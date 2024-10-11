interface IInputTextProps {
  label: string
  type?: 'text' | 'email'
  id?: string
}

export const InputText = ({ label, type }: IInputTextProps) => {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      <span className=" text-[#303972] font-semibold ">{label}</span>
      <input type={type || "text"} className="border border-[#C1BBEB] bg-white rounded-lg p-2 text-base text-[#303972] font-medium outline-[#4D44B5]" />
    </label>
  )
}