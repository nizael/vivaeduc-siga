import Image from "next/image"
import { FieldData } from "../field-data/FieldData"
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { EmployeeDetails } from "../details/EmployeeDatails"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { formatPhone } from "@/utils/formatPhone"
import { IEmployeeInfo } from "../../../../@types/IEmployeeInfo"
import { IAddress } from "@/types/address/IAddress"
import { AddressView } from "@/components/templates/address/AddressView"
import { RedirectButton } from "./RedirectButton"

export const EmployeeInfo = ({ employeeData }: { employeeData: IEmployeeInfo & { address: IAddress } }) => {
  const { address, ...employee } = employeeData
  return (
    <section className=" bg-gray-50 shadow-sm relative flex flex-col gap-4 ">
      <div className="  flex flex-col">
        <div className="h-36 w-full bg-[--bg-primary]  flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          {employeeData.image && <Image src={employeeData.image} alt="school" width={144} height={144} />}
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative">
          <div className="flex items-center justify-between">
            <h5 className="text-2xl font-semibold text-[--text-primary]">{employeeData.name}</h5>
            <RedirectButton path={employeeData.id}/>
          </div>
          <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between max-sm:flex-col gap-4">
              <FieldData field="Endereço" value={`${address.street}, ${address.city}`} icon={<LocationIcon />} />
              <FieldData field="Telefone" value={formatPhone(employeeData.phone)} icon={<CallIcon />} />
              <FieldData field="Email" value={employeeData.email} icon={<EmailIcon />} />
            </div>
          </div>
        </div>
      </div>

      <EmployeeDetails employee={employee} />
      <AddressView address={address} />

    </section>
  )
}

