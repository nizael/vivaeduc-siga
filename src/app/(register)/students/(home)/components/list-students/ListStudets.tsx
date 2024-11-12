'use client'
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import { IStudents, useStudentsStore } from "../../../stores/useStudentsStore"
import { useEffect } from "react"
import Link from "next/link"
import { Pagination } from "@/components/pagination/Pagination"


export const ListStudents = ({ students }: { students: IStudents[] }) => {
  const { setListStudents, studentsView, listStudents, setCurrentPage, currentPage, } = useStudentsStore()
  useEffect(() => {
    if (students) setListStudents(students)
  }, [students])

  return (
    <section className="bg-gray-50 shadow-sm w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
          <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semibold ">
              <td className="px-4 py-2">Nome</td>
              <td className="px-4 py-2 max-sm:hidden">Matrícula</td>
              <td className="px-4 py-2 text-center md:w-[120px]">Contato</td>
              <td className="px-4 py-2 text-center max-sm:hidden">Série</td>
              <td className="px-4 py-2 text-center max-sm:hidden">Turma</td>
              <td className="px-4 py-2  w-16">Ação</td>
            </tr>
          </thead>
          <tbody className="p-4">
            {studentsView?.map(student => <tr key={student.id} className="hover:bg-[--hover-secondary] text-xs font-semibold text-[--text-primary] border-l-[4px] border-transparent border-t border-t-gray-200 even:border-l-[--bg-primary]">
              <td className="py-2 px-4 text-[--text-primary] text-sm font-bold truncate">{student.name}</td>
              <td className="py-2 px-4 max-sm:hidden ">{student.code}</td>
              <td className="py-2 px-4 flex items-center gap-1 justify-center">
                <Link href={`tel:${student.contact.phone}`} className="w-[40px] h-[40px] grid place-content-center bg-gray-100 rounded-full"><CallIcon /></Link>
                <Link href={`mailto:${student.contact.email}`} className="w-[40px] h-[40px] grid place-content-center bg-gray-100 rounded-full"><EmailIcon /></Link>
              </td>
              <td className="py-2 px-4 text-center max-sm:hidden">{student.grade}</td>
              <td className="py-2 px-4 text-center max-sm:hidden">{student.classroom}</td>
              <td className="py-2 px-4 text-center"><NavMenu items={[
                { href: `/students/update/${student.id}`, label: 'Editar' },
                { href: `/students/details/${student.id}`, label: 'Detalhes' },
              ]} /></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {listStudents && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} items={listStudents} itemsPerPage={10} />}
    </section>
  )
}