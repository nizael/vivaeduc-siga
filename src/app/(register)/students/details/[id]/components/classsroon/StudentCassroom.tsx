import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { IClassroom } from "@/services/classroom/IClassroom"
import { ICourse } from "@/services/course/ICourse"
import { IEnrollment } from "@/services/enrollment/IEnrollment"
import { IGrade } from "@/services/grade/IGrade"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"


interface IStudentClassroomsProps {
  enrollments:( IEnrollment & {
    schoolYear: ISchoolYear
    course:ICourse
    grade:IGrade
    classroom: IClassroom
  })[]
}


export const StudentClassrooms = ({ enrollments }: IStudentClassroomsProps) => {
  return (
    <section className=" bg-gray-50 shadow-sm flex flex-col">
      <div className="flex items-center text-gray-50 gap-2 bg-primary px-4 py-2 border-b">
        <ClassroomIcon />
        <h5 className="font-semibold">Turmas</h5>
      </div>

     { enrollments.length ? <table className=" overflow-y-auto h-full ">
        <thead className="">
          <tr className="text-sm font-semibold  text-gray-500 ">
            <td className="px-4 py-2">Turna</td>
            <td className="px-4 py-2 text-center">Período letivo</td>
            <td className="px-4 py-2 text-center">Série</td>
            <td className="px-4 py-2 text-end">Situação</td>
          </tr>
        </thead>
        <tbody>
          {enrollments?.map(enrollment => <tr key={enrollment.id} className="text-[--text-primary] font-semibold text-sm">
            <td className="p-4"> {enrollment.classroom.name}</td>
            <td className="p-4 text-center"> {enrollment.schoolYear.name}</td>
            <td className="p-4 text-center"> {enrollment.grade.name}</td>
            <td className="p-4 text-end"> {enrollment.status ==='COMPLETED' ?'Conpleto':'Cursando'}</td>
          </tr>)}
        </tbody>
      </table>: <EmptyPage label="Aluno não matrículado" />}
    </section>
  )
}