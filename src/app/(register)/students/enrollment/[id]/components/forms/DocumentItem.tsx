'use client'
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import React from "react"
interface IDocumentItemProps {
  name: string
  label: string
  required?: boolean
  options: {
    label: string
    value: string
  }[]
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void
}
export const DocumentItem = ({ name, options, label, required, onChange }: IDocumentItemProps) => {
  return (
    <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
      <p className="text-sm font-semibold">{label} {required && '*'}</p>
      <CustomSelect options={options} name={name} required={required} onChange={onChange} />
    </div>
  )
}