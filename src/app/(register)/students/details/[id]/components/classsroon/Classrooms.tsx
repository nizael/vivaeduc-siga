import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"

interface IClassroom {
  name: string
  schoolYearName: string
  gradeName: string
  status: "STUDYING" | "COMPLETED"
}


export const Classrooms = ({ classrooms }: { classrooms: IClassroom[] }) => {
  return (
    <section className=" bg-gray-50 shadow-sm flex flex-col">
      <div className="flex items-center text-gray-50 gap-2 bg-primary px-4 py-2 border-b">
        <ClassroomIcon />
        <h5 className="font-semibold">Turmas</h5>
      </div>

      {classrooms.length ? <table className=" overflow-y-auto h-full ">
        <thead className="">
          <tr className="text-sm font-semibold  text-gray-500 ">
            <td className="px-4 py-2">Turna</td>
            <td className="px-4 py-2 text-center">Período letivo</td>
            <td className="px-4 py-2 text-center">Série</td>
            <td className="px-4 py-2 text-end">Situação</td>
          </tr>
        </thead>
        <tbody>
          {classrooms?.map(classroom => <tr key={classroom.name} className="text-[--text-primary] font-semibold text-sm">
            <td className="p-4"> {classroom.name}</td>
            <td className="p-4 text-center"> {classroom.schoolYearName}</td>
            <td className="p-4 text-center"> {classroom.gradeName}</td>
            <td className="p-4 text-end"> {classroom.status === 'COMPLETED' ? 'Conpleto' : 'Cursando'}</td>
          </tr>)}
        </tbody>
      </table> : <EmptyPage label="Aluno não matrículado" />}
    </section>
  )
}