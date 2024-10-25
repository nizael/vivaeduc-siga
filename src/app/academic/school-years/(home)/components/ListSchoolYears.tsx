'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"
import { useSchoolYearStore } from "../../stores/useSchoolYearStore"
import { useEffect, useState } from "react"

export const ListSchoolYears = ({ schoolYears }: { schoolYears: ISchoolYear[] }) => {
  const { setSchoolYears, schoolYearsView } = useSchoolYearStore()

  useEffect(() => {
    if (schoolYears) setSchoolYears(schoolYears)
  }, [schoolYears])

  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
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
            <td className="p-4"> {schoolYear.code}</td>
            <td className="p-4"> {schoolYear.name}</td>
            <td className="p-4 text-center"> {new Date(schoolYear.startDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
            <td className="p-4 text-center"> {new Date(schoolYear.endDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
            <td className="p-4 text-center"> {schoolYear.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-center"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}