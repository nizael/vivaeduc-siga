'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"
import { useSchoolYearStore } from "../../stores/useSchoolYearStore"
import { useEffect, useState } from "react"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { Pagination } from "@/components/pagination/Pagination"

export const ListSchoolYears = ({ listSchoolYears }: { listSchoolYears: ISchoolYear[] }) => {
  const { setSchoolYears, schoolYearsView, schoolYears, setCurrentPage, currentPage } = useSchoolYearStore()

  useEffect(() => {
    if (listSchoolYears.length) setSchoolYears(listSchoolYears)
  }, [listSchoolYears])
  if (!schoolYearsView) return <EmptyPage label="Não existem períodos letivos cadastrados" />
  return (
    <section className="bg-gray-50 shadow-sm  w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
          <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semiboldborder-b">
              <td className="px-4 py-2">Codigo</td>
              <td className="px-4 py-2">Nome do período</td>
              <td className="px-4 py-2 text-center">Data inicial</td>
              <td className="px-4 py-2 text-center">Data final</td>
              <td className="px-4 py-2 text-center">Situação</td>
              <td className="px-4 py-2 text-center">Ação</td>
            </tr>
          </thead>
          <tbody>
            {schoolYearsView?.map(schoolYear => <tr key={schoolYear.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
              <td className="px-4 py-2"> {schoolYear.code}</td>
              <td className="px-4 py-2"> {schoolYear.name}</td>
              <td className="px-4 py-2 text-center"> {new Date(schoolYear.startDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
              <td className="px-4 py-2 text-center"> {new Date(schoolYear.endDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
              <td className="px-4 py-2 text-center"> {schoolYear.isActive ? 'Ativo' : 'Inativo'}</td>
              <td className="px-4 py-2 text-center"> <button><EditIcon /></button> </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {schoolYears && <Pagination currentPage={currentPage} items={schoolYears} setCurrentPage={setCurrentPage} />}
    </section>
  )
}