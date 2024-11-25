'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useDeleteSubjectFromCurriculumStore } from "../stores/useDeleteSubjectFromCurriculumStore"
import { useUpdateCurriculum } from "../stores/useUpdateCurriculum"
import { curriculumSubjectUpdate } from "@/services/curriculum-subject/curriculumSubjectUpdate"
import { useCurriculumStore } from "../stores/useCurriculumStore"

export const DeleteCurriculum = () => {
  const { isOpen, onClose } = useDeleteSubjectFromCurriculumStore()
  const { currentCurriculum } = useUpdateCurriculum()
  const { deleteCurriculumSubject } = useCurriculumStore()

  const handleDelete = async () => {
    const curriculumSubjectId = currentCurriculum?.curriculumSubjectId
    const curriculumIndex = currentCurriculum?.curriculumIndex
    if (curriculumSubjectId && curriculumIndex !== undefined && curriculumIndex >= 0) {
      const { status } = await curriculumSubjectUpdate(curriculumSubjectId, { isActive: false })
      if (status === 200) {
        deleteCurriculumSubject(curriculumIndex, curriculumSubjectId)
        onClose()
      }
    }
  }

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} >
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Desvicular disciplina</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>

        <div className="p-4 flex flex-col gap-4" >
          <p className="text-sm text-[--text-primary]">Após devincular a <b> disciplina da grade curricular</b>, isso não poderá ser desfeito. </p>
          <p className="text-sm text-[--text-primary]">Deseja continuar?</p>
          <div className="flex flex-col gap-2">
          </div>
        </div>
        <div className="p-4 w-full flex items-center gap-4 justify-end" >
          <button onClick={onClose} className="rounded-md bg-primary text-gray-50 px-4 py-2">Cancelar</button>
          <button onClick={handleDelete} className={`bg-primary rounded-md text-gray-50 px-4 py-2`}>Continuar</button>
        </div>
      </div>
    </ModalOverlay>
  )
}