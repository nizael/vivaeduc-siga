import { ReactNode } from "react"

interface IFieldDataProps {
  value: string
  field: string
  icon?: ReactNode
}
export const FieldData = ({ field, value, icon }: IFieldDataProps) => {

  return (
    <div className="flex flex-col gap-1">
      <p className="text-gray-500 text-sm">{field}</p>
      <p className="text-[#303972] font-semibold flex items-center gap-2">
        {icon && <span className="grid place-content-center w-9 h-9 bg-[#FB7D5B] rounded-full text-gray-50">{icon}</span>}
        {value}
      </p>
    </div>
  )
}