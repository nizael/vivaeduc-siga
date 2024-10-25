'use client'
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { Pagination } from "./Pagination"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import { IStudents, useStudentsStore } from "../../../stores/useStudentsStore"
import { useEffect } from "react"
import Link from "next/link"


export const ListStudents = ({ students }: { students: IStudents[] }) => {
  const { setListStudents, studentsView } = useStudentsStore()
  useEffect(() => {
    if (students) setListStudents(students)
  }, [students])

  return (
    <section className="bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4  h-full">
      <div className=" grow">
        <table className="w-full">
          <thead className="p-4">
            <tr className="text-xs font-semibold text-[--text-primary]">
              <td className="p-4">Nome</td>
              <td className="p-4">Matrícula</td>
              <td className="p-4 text-center w-[120px]">Contato</td>
              <td className="p-4 text-center">Série</td>
              <td className="p-4 text-center">Turma</td>
              <td className="p-4  w-16">Ação</td>
            </tr>
          </thead>
          <tbody className="p-4">
            {studentsView?.map(student => <tr key={student.id} className="hover:bg-[--hover-secondary] text-xs font-semibold text-[--text-primary] border-l-[4px] border-transparent border-t border-t-gray-200 even:border-l-[--bg-primary]">
              <td className="p-4 text-[--text-primary] text-sm font-bold">{student.name}</td>
              <td className="p-4">{student.code}</td>
              <td className="p-4 flex items-center gap-1 justify-center">
                <Link href={`tel:${student.contact.phone}`} className="w-[40px] h-[40px] grid place-content-center bg-gray-100 rounded-full"><CallIcon /></Link>
                <Link href={`mailto:${student.contact.email}`} className="w-[40px] h-[40px] grid place-content-center bg-gray-100 rounded-full"><EmailIcon /></Link>
              </td>
              <td className="p-4 text-center">{student.grade}</td>
              <td className="p-4 text-center">{student.classroom}</td>
              <td className="p-4 text-center"><NavMenu items={[
                { href: `/students/details/${student.id}`, label: 'Detalhes' },
                { href: `/students/update/${student.id}`, label: 'Editar' },
                { href: `/students/enrollment/${student.id}`, label: 'Matrícula' },
              ]} /></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  )
}