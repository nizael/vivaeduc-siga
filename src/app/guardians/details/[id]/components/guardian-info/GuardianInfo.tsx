import { FieldData } from "../field-data/FieldData"
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { GuardianDetails } from "../details/GuardianDatails"
import { EditIcon } from "@/components/icons/EditIcon"
import { IGuardianInfo } from "../../../../@types/IGuardianInfo"
import { GuardianAddress } from "../details/GuardianAddress"
import { IAddress } from "@/types/address/IAddress"

export const GuardianInfo = ({ guardianData }: { guardianData: IGuardianInfo & { address: IAddress } }) => {
  const { address, ...guardian } = guardianData
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm relative">
      <div className="flex flex-col">
        <div className="h-36 w-full bg-[--bg-primary] rounded-t-xl flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-3xl border-[16px] border-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-3xl border-[16px] border-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          {/* <Image src={guardianData.image} alt={guardianData.name} width={144} height={144} /> */}
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative">
          <button className="absolute top-0 right-10 text-[--text-primary]"><EditIcon /></button>
          <h5 className="text-2xl font-semibold text-[--text-primary]">{guardian.name}</h5>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <FieldData field="Endereço" value={address.street} icon={<LocationIcon />} />
              <FieldData field="Telefone" value={guardian.phone} icon={<CallIcon />} />
              <FieldData field="Email" value={guardian.email} icon={<EmailIcon />} />
            </div>
          </div>
        </div>
      </div>
      <GuardianDetails guardian={guardian} />
      <GuardianAddress address={address} />
    </section>
  )
}

