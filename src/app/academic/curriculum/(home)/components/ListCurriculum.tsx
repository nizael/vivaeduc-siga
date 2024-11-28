
'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { ActionMenu } from "@/components/action-menu/ActionMenu"
import { useEffect } from "react"
import { ICurriculum } from "@/services/curriculum/ICurriculum"
import { useCurriculumStore } from "../../stores/useCurriculumStore"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { ICurriculumUpdate, useUpdateCurriculum } from "../../stores/useUpdateCurriculum"
import { useDeleteSubjectFromCurriculumStore } from "../../stores/useDeleteSubjectFromCurriculumStore"
import { useDeleteCurriculumStore } from "../../stores/useDeleteCurriculumStore"
import { useAddCurriculumSubjectStore } from "../../stores/useAddCurriculumSubjectStore"
import { env } from "@/configs/env"

export const ListCurriculum = ({ listCurriculum }: { listCurriculum: ICurriculum[] }) => {
  const { curriculums, setCurriculums, setCurriculumUpdate } = useCurriculumStore()
  const { onOpen, setCurrentCurriculum, } = useUpdateCurriculum()
  const { onOpen: openModalDelete, } = useDeleteSubjectFromCurriculumStore()
  const { onOpen: openModalCurriculumUpdate } = useDeleteCurriculumStore()
  const { onOpen: openModalAdd } = useAddCurriculumSubjectStore()

  useEffect(() => {
    if (listCurriculum.length) {
      setCurriculums(listCurriculum)
    }
  }, [listCurriculum])

  const handleEdit = (curriculum: ICurriculumUpdate) => {
    onOpen()
    setCurrentCurriculum(curriculum)
  }

  const handleDelete = (curriculum: ICurriculumUpdate) => {
    setCurrentCurriculum(curriculum)
    openModalDelete()
  }

  const handleAddSubject = (id: string) => {
    const curriculum = curriculums.find(curriculum => curriculum.id === id)
    if (curriculum) {
      setCurriculumUpdate(curriculum)
      openModalCurriculumUpdate()
    }
  }
  if (!curriculums.length) return <EmptyPage label="Nenhuma grade curricular encontrada" />
  return (
    <section className="bg-gray-50 shadow-sm w-full flex flex-col gap-4 grow">
      {curriculums?.map((curriculum, curriculumIndex) => {
        return (
          <details key={curriculum.id}>
            <summary className="px-4 py-2 flex justify-between border-b bg-primary text-gray-50">
              <span className="font-semibold text-sm">{curriculum.name}</span>
              <DropdownIcon className="w-4" />
            </summary>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4">
                {env.NODE_ENV !== 'production' && <button onClick={openModalAdd} className="px-4 py-2 bg-primary rounded-full text-gray-50">Adicionar discplina</button>}
                <button onClick={() => handleAddSubject(curriculum.id)} className="px-4 py-2 bg-primary rounded-full text-gray-50">Excluir grade</button>
              </div>
              <table className="w-full">
                <thead className=" text-gray-500">
                  <tr className="text-sm font-semibold border-b">
                    <td className="px-4 py-2 w-2/6">Disciplina</td>
                    <td className="px-4 py-2">Professor</td>
                    <td className="px-4 py-2 w-10">Ação</td>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.curriculumSubjects?.map((curriculumSubject, subjectIndex) => {

                    const dataForEdit = {
                      curriculumIndex,
                      curriculumId: curriculum.id,
                      curriculumSubjectId: curriculumSubject.id,
                      subjectIndex,
                      subjectsName: curriculumSubject.subject.name,
                      teacher: { id: curriculumSubject.employee.id, name: curriculumSubject.employee.name }
                    }
                    return (
                      <tr key={curriculumSubject.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
                        <td className="px-4 py-2 w-2/6">{curriculumSubject.subject.name}</td>
                        <td className="px-4 py-2 ">{curriculumSubject.employee.name}</td>
                        <td className="py-2 px-4  flex items-center justify-end" >
                          <ActionMenu position="bottom" items={[
                            { onClick: () => handleDelete(dataForEdit), label: 'Excluir' },
                            {
                              onClick: () => handleEdit(dataForEdit),
                              label: 'Editar'
                            },
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