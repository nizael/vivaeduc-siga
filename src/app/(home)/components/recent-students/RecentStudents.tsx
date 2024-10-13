import Link from "next/link"
import { ListView } from "./ListView"

const recentStudents = [
  { id: '1', image: '/temp/employee.jpg', studentName: 'Samantha William', classroom: 'VII A' },
  { id: '2', image: '/temp/employee.jpg', studentName: 'Tony Soap', classroom: 'VII A' },
  { id: '3', image: '/temp/employee.jpg', studentName: 'Karen Hope', classroom: 'VII A' },
  { id: '4', image: '/temp/employee.jpg', studentName: 'Jordan Nico', classroom: 'VII A' },
  { id: '5', image: '/temp/employee.jpg', studentName: 'Nadila Adja', classroom: 'VII A' },
]

export const RecentStudents = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold text-[--text-primary]">Alunos Recentes</p>
          <p className="text-gray-500">Você tem <b>452</b> alunos</p>
        </div>
        <Link href={'/students/create'} className="font-semibold text-3xl bg-[--bg-primary] w-[40px] h-[40px] grid place-content-center rounded-full text-gray-50">+</Link>
      </div>
      <ul className="flex-col flex gap-4">
        {recentStudents.map(student => <ListView key={student.id} classroomName={student.classroom} studentName={student.studentName} image={student.image} />)}
      </ul>
      <Link href={'/students'} className="h-[40px] grid place-content-center  w-full rounded-full bg-[--bg-secondary] text-[--text-primary] font-semibold">Ver mais</Link>
    </div>
  )
}
