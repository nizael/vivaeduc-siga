import Image from "next/image"
import { GuardianDetails } from "../details/GuardianDetails"
import { IAddress } from "@/types/address/IAddress"
import { GuardianAddress } from "../details/GuardianAddress"
import { IGuardianInfo } from "../../../../@types/IGuardianInfo"



export const GuardianInfo = ({ guardianData: guardianData }: { guardianData: IGuardianInfo & {address: IAddress} }) => {
  const {address, ...guardian} = guardianData
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm relative flex flex-col gap-4 ">
      <div className=" rounded-b-xl flex flex-col">
        <div className="h-36 w-full bg-[--bg-primary] rounded-t-xl flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          {guardian.image && <Image src={guardian.image} alt="school" width={144} height={144} />}
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative border-b">
          <h5 className="text-2xl  h-[40px] flex items-center font-semibold text-[--text-primary]">{guardian.name}</h5>
        </div>
      </div>
      <GuardianDetails guardian={guardian} />
      <GuardianAddress address={address} />

    </section>
  )
}

