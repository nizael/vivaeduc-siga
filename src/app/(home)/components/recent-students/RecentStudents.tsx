import Link from "next/link"
import { ListView } from "./ListView"
import { enrollmentGetTheLatest } from "@/services/enrollment/enrollmentGet"
import { IEnrollment } from "@/services/enrollment/IEnrollment"
import { IStudentInfo } from "../../../(register)/students/@types/IStudentInfo"
import { IPersonalData } from "@/types/personal/IPersonalData"

const recentStudents = [
  { id: '1', image: '/temp/employee.jpg', studentName: 'Samantha William', classroom: 'VII A' },
  { id: '2', image: '/temp/employee.jpg', studentName: 'Tony Soap', classroom: 'VII A' },
  { id: '3', image: '/temp/employee.jpg', studentName: 'Karen Hope', classroom: 'VII A' },
  { id: '4', image: '/temp/employee.jpg', studentName: 'Jordan Nico', classroom: 'VII A' },
  { id: '5', image: '/temp/employee.jpg', studentName: 'Nadila Adja', classroom: 'VII A' },
]

export const RecentEnrollment = async () => {
  const { data, status } = await enrollmentGetTheLatest()
  if (status !== 200 || !data?.length) return null
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold text-[--text-primary]">Matrículas Recentes</p>
      <ul className="flex-col flex gap-4">
        {data.map((enrollment: IEnrollment & { student: IStudentInfo & { person: IPersonalData } }) => {
          const { student: { person, ...student }, classroom } = enrollment
          const name = person.name.split(' ')
          return (
            <ListView
              key={student.id}
              id={student.id}
              classroomName={classroom.name}
              studentName={[name[0], name[name.length-1]].join(' ')}
              image={student.image}
            />
          )
        })}
      </ul>
      <Link href={'/students'} className="h-[40px] grid place-content-center  w-full rounded-full bg-[--bg-tertiary] text-[--text-primary] font-semibold">Ver mais</Link>
    </div>
  )
}
