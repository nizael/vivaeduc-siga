'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { FormEvent, PropsWithChildren, useRef } from "react"

type IIputEditProps = PropsWithChildren & {
  name: string
  defaultValue?: string
  options: { label: string, value: string }[]
  onSubmit(evt: FormEvent<HTMLFormElement>): void
}
export const SelectEdit = ({ children, name, options, defaultValue, onSubmit }: IIputEditProps) => {

  return (
    <div className="flex items-center gap-2 relative group " >
      {children}
      <button className="border p-1 rounded-md text-gray-300 hover:border-[--bg-secondary] hover:text-[--text-primary]"><EditIcon /></button>
      <form onSubmit={onSubmit} className="z-20 absolute hidden bottom-0 left-0 group-focus-within:flex flex-col p-2 bg-gray-50 shadow-sm border rounded-lg gap-2" >
        <select name={name} defaultValue={defaultValue} className="p-2">
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <div tabIndex={1} className="flex items-center gap-2 justify-end px-2">
          <button type="submit" className="border shadow-sm px-2 h-[40px] rounded-md bg-[--bg-primary] text-gray-50 font-semibold">Salvar</button>
        </div>
      </form>
    </div>
  )
}
