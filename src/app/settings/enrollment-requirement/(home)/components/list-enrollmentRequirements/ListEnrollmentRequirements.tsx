'use client'
import { Pagination } from "./Pagination"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import { useEffect } from "react"
import { IEnrollmentRequirement } from "@/services/enrollmentRequirement/IEnrollmentRequirement"
import { useEnrollmentRequirementsStore } from "../../../../stores/useEnrollmentRequirementStore"
import { EmptyPage } from "@/components/empty-state/EmptyPage"


export const ListEnrollmentRequirement = ({ enrollmentRequirements }: { enrollmentRequirements: IEnrollmentRequirement[] }) => {
  const { setListEnrollmentRequirements, enrollmentRequirementsView } = useEnrollmentRequirementsStore()
  useEffect(() => {
    if (enrollmentRequirements) setListEnrollmentRequirements(enrollmentRequirements)
  }, [enrollmentRequirements])
  if (!enrollmentRequirementsView?.length) return <EmptyPage label="Não existem requisitos cadastrados!" />
  return (
    <section className="bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
          <thead className="p-4">
            <tr className="text-xs font-semibold text-[--text-primary]">
              <td className="p-4">Nome</td>
              <td className="p-4">Período letivo</td>
              <td className="p-4 text-center ">Curso</td>
              <td className="p-4 text-center">Série</td>
              <td className="p-4 text-center">Obrigatorio</td>
              <td className="p-4  w-16">Ação</td>
            </tr>
          </thead>
          <tbody className="p-4">
            {enrollmentRequirementsView?.map(enrollmentRequirement => <tr key={enrollmentRequirement.id} className="hover:bg-[--hover-secondary] text-xs font-semibold text-[--text-primary] border-l-[4px] border-transparent border-t border-t-gray-200 even:border-l-[--bg-primary]">
              <td className="p-4 text-[--text-primary] text-sm font-bold">{enrollmentRequirement.name}</td>
              <td className="p-4">{enrollmentRequirement.schoolYearName}</td>
              <td className="p-4  text-center">{enrollmentRequirement.courseName}</td>
              <td className="p-4 text-center">{enrollmentRequirement.gradeName}</td>
              <td className="p-4 text-center">{enrollmentRequirement.isRequired ? 'Sim' : 'Não'}</td>
              <td className="p-4 text-center"><NavMenu items={[
                { href: `#`, label: 'Editar' },
                { href: `#`, label: 'Detalhes' },
              ]} /></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  )
}