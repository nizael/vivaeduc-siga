interface IInputTextProps {
  label?: string
  type?: 'text' | 'email' | 'password' | 'date' | 'number'
  id?: string
  name?: string
  required?: boolean
  autoFocus?: boolean
}

export const InputText = (props: IInputTextProps) => {
  const { label, ...rest } = props
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      {label && <span className=" text-[--text-primary] font-semibold ">{label}</span>}
      <input  {...rest} className="border border-[#C1BBEB] bg-white rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary]" />
    </label>
  )
}