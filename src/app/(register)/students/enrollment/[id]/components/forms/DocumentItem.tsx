'use client'
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
interface IDocumentItemProps {
  name: string
  label: string
  required?: boolean
  options: {
    label: string
    value: string
  }[]
}
export const DocumentItem = ({ name, options, label, required }: IDocumentItemProps) => {
  return (
    <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
      <p className="text-sm font-semibold">{label} {required && '*'}</p>
      <CustomSelect options={options} name={name} required={required} onChange={() => ({})} />
    </div>
  )
}