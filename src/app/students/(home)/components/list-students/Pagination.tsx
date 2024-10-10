import { DropdownIcon } from "@/components/icons/DropdownIcon"

export const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <p className="text-xs text-gray-500">Exibindo <b>1-5</b> paginas</p>
      <div className="flex items-center gap-2">
        <button className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 rotate-90"><DropdownIcon /></button>
        <button className={`${true ? 'bg-[#4D44B5] text-gray-50 border-none' : ''} w-[40px] h-[40px] rounded-full border border-gray-500 grid place-content-center`}>1</button>
        <button className={`${false ? 'bg-[#4D44B5] text-gray-50 border-none' : ''} w-[40px] h-[40px] rounded-full border border-gray-500 grid place-content-center`}>2</button>
        <button className={`${false ? 'bg-[#4D44B5] text-gray-50 border-none' : ''} w-[40px] h-[40px] rounded-full border border-gray-500 grid place-content-center`}>3</button>
        <button className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 -rotate-90"><DropdownIcon /></button>
      </div>
    </div>
  )
}