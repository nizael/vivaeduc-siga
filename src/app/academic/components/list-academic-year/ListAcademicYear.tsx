import { DotsIcon } from "@/common/common/components/icons/DotsIcon"
import { SubjectIcon } from "@/common/common/components/icons/SubjectIcon"
import Link from "next/link"

const academicYears = [
  { id: '1', name: '2023' },
  { id: '2', name: '2024' },
  { id: '3', name: '2025' },
]
export const ListAcademicYear = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-md flex flex-col max-h-[395px] h-full">
      <div className="flex items-center justify-between p-4 bg-[#C1BBEB] bg-opacity-50 rounded-t-xl">
        <div className="flex items-center gap-2 text-[#303972]">
          <SubjectIcon />
          <p className="font-semibold text-lg ">Períodos</p>
        </div>
        <Link href={'/'} className="text-2xl font-bold text-gray-50 bg-[#4D44B5] w-[40px] h-[40px] rounded-full grid place-content-center">+</Link>
      </div>
      <ul className=" overflow-y-auto h-full">
        {academicYears.map(academicYear => <li key={academicYear.id} className="flex items-center gap-4 justify-between text-[#303972] font-semibold text-sm hover:bg-[#C1BBEB] hover:bg-opacity-20 px-4 last:rounded-b-xl ">
          {academicYear.name}
          <button className="w-[40px] h-[40px] grid place-content-center text-gray-500">{<DotsIcon />}</button>
        </li>)}
      </ul>
      <button className="p-2 rounded-b-xl bg-[#C1BBEB] text-[#303972] font-semibold">Ver mais</button>
    </section>
  )
}