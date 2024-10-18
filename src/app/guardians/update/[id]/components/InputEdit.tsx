'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { InputText } from "@/components/inputs/InputText"
import { FormEvent, PropsWithChildren, useRef } from "react"

type IIputEditProps = PropsWithChildren & {
  name: string
  type?: 'text' | 'email' | 'password'
}
export const InputEdit = ({ children, name, type }: IIputEditProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const el = containerRef.current?.querySelector(`#${name}`) as HTMLParagraphElement
    if (el) el.innerText = formData.get(name)?.toString() || ''
    evt.currentTarget.reset()
    buttonRef.current?.blur()
  }

  return (
    <div ref={containerRef} className="flex items-center gap-2 relative group" >
      {children}
      <button className="border p-1 rounded-md text-gray-300 hover:border-[--bg-secondary] hover:text-[--text-primary]"><EditIcon /></button>
      <form onSubmit={handleSubmit} className="z-20 absolute hidden bottom-0 left-0 group-focus-within:flex flex-col p-2 bg-gray-50 shadow-sm border rounded-lg gap-2" >
        <InputText name={name} autoFocus required type={type} />
        <div tabIndex={1} className="flex items-center gap-2 justify-end px-2">
          <button ref={buttonRef} type="submit" className="border shadow-sm px-2 h-[40px] rounded-md bg-[--bg-primary] text-gray-50 font-semibold">Salvar</button>
        </div>
      </form>
    </div>
  )
}
