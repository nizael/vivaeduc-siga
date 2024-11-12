import { ModalOverlay } from "./ModalOverlay"

export const ErrorModal = ({ isOpen, onClose, message }: { isOpen: boolean, onClose(isOpen: boolean): void, message: string }) => {

  return (
    <ModalOverlay isOpen={isOpen} onClose={() => onClose(false)}>
        <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full overflow-y-auto" onClick={evt => evt.stopPropagation()}>
          <div className="flex justify-between p-4 border-b ">
            <h5 className="text-xl text-[--text-primary] font-semibold">Error</h5>
            <button onClick={() => onClose(false)} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
          </div>

          <div className="grid max-[641px]:grid-cols-1 grid-cols-2  gap-4 p-4 overflow-y-auto h-full" onClick={evt => evt.stopPropagation()}>
            {message}
          </div>

          <div className="flex items-center gap-4 justify-end p-4">
            <button type="button" onClick={() => onClose(false)} className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
            <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
          </div>
        </div>
    </ModalOverlay>
  )
}