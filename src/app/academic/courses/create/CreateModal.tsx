'use client'
import { InputText } from "@/components/inputs/InputText"
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { schoolYearCreate } from "@/services/school-year/schoolYearCreate"
import { useCourseCreateModalStore } from "../stores/useCourseCreateModal"
import { useCourseStore } from "../stores/useCourseStore"
import { courseCreate } from "@/services/course/courseCreate"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { modalityCourseOptions } from "@/configs/modalityCourse"

export const CourseCreateModal = () => {
  const { isOpen, onClose } = useCourseCreateModalStore()
  const { pushCourse } = useCourseStore()
  
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Novo Curso</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          const { data, status } = await courseCreate(formData)
          if (status === 201) {
            pushCourse(data)
            onClose()
          }
        }} className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-4 gap-4 w-full">
            <InputText required label="Código" name="code" />
            <div className="col-start-2 col-end-5">
              <InputText required label="Nome *" name="name" />
            </div>
            <div className="col-start-1 col-end-3">
              <InputText  label="Portaria de autorização" name="authorizationOrdinance" />
            </div>
            <div className="col-start-3 col-end-5">
              <CustomSelect required options={modalityCourseOptions} onChange={()=>({})} label="Modalidade" name="modality" />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <button type="button" onClick={onClose} className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
            <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
          </div>
        </form>
      </div>
    </ModalOverlay>
  )
}