
'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { ActionMenu } from "@/components/action-menu/ActionMenu"
import { useEffect, useState } from "react"
import { ICurriculum } from "@/services/curriculum/ICurriculum"
import { useCurriculumStore } from "../../stores/useCurriculumStore"
import { EmptyPage } from "@/components/empty-state/EmptyPage"

export const ListCurriculum = ({ listCurriculum }: { listCurriculum: ICurriculum[] }) => {
  const { curriculums, setCurriculums } = useCurriculumStore()

  useEffect(() => {
    if (listCurriculum.length) {
      setCurriculums(listCurriculum)
    }
  }, [listCurriculum])
  if (!curriculums.length) return <EmptyPage label="Nenhuma grade curricular encontrada" />
  return (
    <section className="flex flex-col gap-4">
      {curriculums?.map(curriculum => {
        return (
          <details key={curriculum.id}>
            <summary className="px-4 py-2 flex justify-between border-b bg-primary text-gray-50">
              <span className="font-semibold text-sm">{curriculum.name}</span>
              <DropdownIcon className="w-4" />
            </summary>
            <div className="">
              <table className="w-full">
                <thead className=" text-gray-500">
                  <tr className="text-sm font-semibold border-b">
                    <td className="px-4 py-2 w-2/6">Disciplina</td>
                    <td className="px-4 py-2">Professor</td>
                    <td className="px-4 py-2 w-10">Ação</td>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.curriculumSubjects?.map(curriculumSubject => {
                    return (
                      <tr key={curriculumSubject.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
                        <td className="px-4 py-2 w-2/6">{curriculumSubject.subject.name}</td>
                        <td className="px-4 py-2 ">{curriculumSubject.employee.name}</td>
                        <td className="py-2 px-4  flex items-center justify-end" >
                          <ActionMenu position="bottom" items={[
                            { onClick: () => ({}), label: 'Detalhes' },
                            { onClick: () => ({}), label: 'Editar' },
                          ]} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </details>
        )
      })}
    </section>
  )
}