interface IInputTextProps {
  label?: string
  type?: 'text' | 'email' | 'password' | 'date' | 'number'|'time'
  id?: string
  name?: string
  required?: boolean
  value?: string
  placeholder?: string
  readOnly?: boolean
  autoFocus?: boolean
  disabled?: boolean
  step?: any
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void
}

export const InputText = (props: IInputTextProps) => {
  const { label, ...rest } = props
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      {label && <span className=" text-sm text-[--text-primary] font-semibold ">{label}</span>}
      <input {...rest} className={`${props.disabled ? ' bg-gray-200' : 'bg-white'} border border-[#C1BBEB] h-11 rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary]`} />
    </label>
  )
}