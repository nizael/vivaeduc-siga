'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useCurriculumStore } from "../stores/useCurriculumStore"
import { curriculumUpdate } from "@/services/curriculum/curriculumUpdate"
import { useDeleteCurriculumStore } from "../stores/useDeleteCurriculumStore"
import { useAddCurriculumSubjectStore } from "../stores/useAddCurriculumSubjectStore"

export const AddCurriculumSubject = () => {
  const { isOpen, onClose } = useAddCurriculumSubjectStore()
  const { curriculumUpdateData, deleteCurriculum } = useCurriculumStore()

  const handleDeleteCurriculum = async () => {
    const curriculumId = curriculumUpdateData?.id
    if (curriculumId && curriculumUpdateData.id) {
      const { status } = await curriculumUpdate({ isActive: false }, curriculumId)
      if (status === 200) {
        deleteCurriculum(curriculumUpdateData.id)
        onClose()
      }
    }
  }

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} >
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Adicionar disciplina</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>

        <div className="p-4 flex flex-col gap-4" >
          <p className="text-sm text-[--text-primary]"><b>Atenção!</b></p>
          <p className="text-sm text-[--text-primary]">Esta ação não poderá ser desfeita.</p>
          <p className="text-sm text-[--text-primary]">Deseja continuar?</p>
          <div className="flex flex-col gap-2">
          </div>
        </div>
        <div className="p-4 w-full flex items-center gap-4 justify-end" >
          <button onClick={onClose} className="rounded-md bg-primary text-gray-50 px-4 py-2">Cancelar</button>
          <button onClick={handleDeleteCurriculum} className={`bg-primary rounded-md text-gray-50 px-4 py-2`}>Continuar</button>
        </div>
      </div>
    </ModalOverlay>
  )
}