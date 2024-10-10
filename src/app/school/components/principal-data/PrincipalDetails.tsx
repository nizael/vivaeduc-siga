import { EditIcon } from "@/components/icons/EditIcon"

export const PrincipalDetails = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-md relative">
      <div className="h-36 w-full bg-[#4D44B5] rounded-t-xl flex justify-end p-10 overflow-hidden">
        <div className="w-[261px] h-[275px] rounded-full bg-[#FB7D5B] mt-10 -mr-40 " />
        <div className="w-[261px] h-[275px] rounded-full bg-[#FCC43E] " />
      </div>
      <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50"></div>
      <div className="p-8 mt-14 flex flex-col gap-4 relative">
        <button className="absolute top-0 right-10 text-[#303972]"><EditIcon /></button>
        <h5 className="text-2xl font-semibold text-[#303972]">Escola Demonstração</h5>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <FieldData field="Admin" value="Nabila Azalea" />
            <FieldData field="Telefone" value="(12) 3456-7890" />
            <FieldData field="Email" value="jordan@mail.com" />
          </div>
        </div>
      </div>
    </section>
  )
}

const FieldData = ({ field, value }: { value: string, field: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-gray-500 text-sm">{field}</p>
      <p className="text-[#303972] font-semibold">{value}</p>
    </div>
  )
}