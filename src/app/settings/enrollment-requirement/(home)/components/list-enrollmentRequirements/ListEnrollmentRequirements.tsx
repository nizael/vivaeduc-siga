'use client'
import { NavMenu } from "@/components/nav-menu/NavMenu"
import { useEffect } from "react"
import { IEnrollmentRequirement } from "@/services/enrollmentRequirement/IEnrollmentRequirement"
import { useEnrollmentRequirementsStore } from "../../../../stores/useEnrollmentRequirementStore"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { Pagination } from "@/components/pagination/Pagination"


export const ListEnrollmentRequirement = ({ listEnrollmentRequirements }: { listEnrollmentRequirements: IEnrollmentRequirement[] }) => {
  const { setListEnrollmentRequirements, enrollmentRequirementsView, enrollmentRequirements, setCurrentPage, currentPage } = useEnrollmentRequirementsStore()
  useEffect(() => {
    if (listEnrollmentRequirements) setListEnrollmentRequirements(listEnrollmentRequirements)
  }, [listEnrollmentRequirements])
  if (!enrollmentRequirementsView?.length) return <EmptyPage label="Não existem requisitos cadastrados!" />
  return (
    <section className="bg-gray-50shadow-sm  w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
          <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semibold  border-b">
              <td className="px-4 py-2">Nome</td>
              <td className="px-4 py-2">Período letivo</td>
              <td className="px-4 py-2 text-center ">Curso</td>
              <td className="px-4 py-2 text-center">Série</td>
              <td className="px-4 py-2 text-center">Obrigatorio</td>
              <td className="px-4 py-2  w-16">Ação</td>
            </tr>
          </thead>
          <tbody>
            {enrollmentRequirementsView?.map(enrollmentRequirement => <tr key={enrollmentRequirement.id} className="hover:bg-[--hover-secondary] text-xs font-semibold text-[--text-primary] border-l-[4px] border-transparent border-t border-t-gray-200 even:border-l-[--bg-primary]">
              <td className="px-4 py-2 text-primary text-sm font-bold">{enrollmentRequirement.name}</td>
              <td className="px-4 py-2">{enrollmentRequirement.schoolYearName}</td>
              <td className="px-4 py-2  text-center">{enrollmentRequirement.courseName}</td>
              <td className="px-4 py-2 text-center">{enrollmentRequirement.gradeName}</td>
              <td className="px-4 py-2 text-center">{enrollmentRequirement.isRequired ? 'Sim' : 'Não'}</td>
              <td className="px-4 py-2 text-center"><NavMenu items={[
                { href: `#`, label: 'Editar' },
                { href: `#`, label: 'Detalhes' },
              ]} /></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {enrollmentRequirements && <Pagination currentPage={currentPage} items={enrollmentRequirements} setCurrentPage={setCurrentPage} />}
    </section>
  )
}