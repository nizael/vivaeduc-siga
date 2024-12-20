import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import Link from "next/link"

const classrooms = [
  { id: '1', name: '1º ANO' },
  { id: '2', name: '2º ANO' },
  { id: '3', name: '3º ANO' },
  { id: '4', name: '4º ANO' },
  { id: '5', name: '5º ANO' },
]
export const ListClassrooms = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-md flex flex-col max-h-[395px] h-full">
      <div className="flex items-center justify-between p-4 bg-opacity-50 rounded-t-xl">
        <h3 className="text-[--text-primary] font-semibold flex items-center gap-2">
          <ClassroomIcon />
          Turmas
        </h3>
        <Link href={'/'} className="text-2xl font-bold text-gray-50 bg-[--bg-primary] w-[40px] h-[40px] rounded-full grid place-content-center">+</Link>
      </div>
      <ul className=" overflow-y-auto h-full">
        {classrooms.map(classroom => <li key={classroom.id} className="flex items-center gap-4 justify-between text-[--text-primary] font-semibold text-sm hover:bg-[#C1BBEB] hover:bg-opacity-20 px-4 last:rounded-b-xl ">
          {classroom.name}
          <button className="w-[40px] h-[40px] grid place-content-center text-gray-500">{<DotsIcon />}</button>
        </li>)}
      </ul>
      <Link href={'/academic/classrooms'} className="p-2 text-center rounded-b-xl bg-[--bg-tertiary] text-[--text-primary] font-semibold">Ver mais</Link>
    </section>
  )
}