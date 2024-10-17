import { ReactNode } from "react"

interface IFieldDataProps {
  value: string
  field: string
  icon?: ReactNode
  id?:string
}
export const FieldData = ({ field, value, icon, id }: IFieldDataProps) => {

  return (
    <div className="flex flex-col gap-1">
      <p className="text-gray-500 text-sm">{field}</p>
      <p id={id} className="text-[--text-primary] font-semibold flex items-center gap-2">
        {icon && <span className="grid place-content-center w-9 h-9 bg-[#FB7D5B] rounded-full text-gray-50">{icon}</span>}
        {value}
      </p>
    </div>
  )
}