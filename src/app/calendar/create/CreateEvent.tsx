'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useCalendarStore } from "../stores/useCalendarStore"
import { InputText } from "@/components/inputs/InputText"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { eventTypeOptions } from "@/configs/eventType"


export const CreateEvent = () => {
  const { isOpen, onClose } = useCalendarStore()
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} >
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full overflow-y-auto" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Novo evento</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action="" className="p-4 flex flex-col gap-4">
          <div className="grid max-[641px]:grid-cols-1 grid-cols-2  gap-4" onClick={evt => evt.stopPropagation()}>
            <InputText required name="eventName" label="Nome" />
            <CustomSelect required options={eventTypeOptions} name="eventType" label="Tipo do evento" />
            <div className="flex flex-col gap-4 col-start-1 col-end-3">
              <div className="flex items-center gap-4">
                <InputText type="date" required name="startDate" label="Inicio" />
                <InputText type="time" required name="startTime" label="hora" />
              </div>
              <div className="flex items-center  gap-4">
                <InputText type="date" required name="endDate" label="Fim" />
                <InputText type="time" required name="endTime" label="hora" />
              </div>
            </div>
            {/* <label htmlFor="sendEmailReminder" className="flex items-center gap-1 text-[--text-primary]">
              <input type="checkbox" name="sendEmailReminder" id="sendEmailReminder" />
              Enviar lembrete por email
            </label> */}
          </div>
          <div className="md:col-start-1 md:col-end-3">
            <InputText name="description" label="Descrição" />
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