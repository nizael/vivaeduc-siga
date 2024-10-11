interface IInputTextProps {
  label: string
  type?: 'text' | 'email'
  id?: string
}

export const InputText = ({ label, type }: IInputTextProps) => {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      <span className=" text-[--text-primary] font-semibold ">{label}</span>
      <input type={type || "text"} className="border border-[#C1BBEB] bg-white rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary]" />
    </label>
  )
}