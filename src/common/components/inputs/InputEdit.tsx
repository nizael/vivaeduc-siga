'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { FormEvent, PropsWithChildren, useEffect, useRef, useState } from "react"

type IIputEditProps = PropsWithChildren & {
  name?: string
  defaultValue?: string
  type?: 'text' | 'email' | 'password' | 'number'
  onSubmit(evt: FormEvent<HTMLFormElement>): void
}
export const InputEdit = ({ children, name, type, onSubmit, defaultValue }: IIputEditProps) => {

  const [initialValue, setInitialValue] = useState('')
  
  useEffect(() => {
    if (defaultValue) setInitialValue(defaultValue)
  }, [defaultValue])

  return (
    <div className="flex items-center gap-2 relative group" >
      {children}
      <button className="border p-1 rounded-md text-gray-300 hover:border-[--bg-secondary] hover:text-[--text-primary]"><EditIcon /></button>
      <form onSubmit={onSubmit} className="z-20 absolute hidden bottom-0 left-0 group-focus-within:flex flex-col p-2 bg-gray-50 shadow-sm border rounded-lg gap-2" >
        <input required name={name} defaultValue={initialValue} type={type} className="border border-[#C1BBEB] bg-white rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary]" />
        <div tabIndex={1} className="flex items-center gap-2 justify-end px-2">
          <button type="submit" className="border shadow-sm px-2 h-[40px] rounded-md bg-[--bg-primary] text-gray-50 font-semibold">Salvar</button>
        </div>
      </form>
    </div>
  )
}
