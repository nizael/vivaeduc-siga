'use client'
import Image from "next/image"
import { EmployeeDetails } from "../details/EmployeeDatails"
import { IAddress } from "@/types/address/IAddress"
import { IEmployeeInfo } from "../../../../@types/IEmployeeInfo"
import { EmployeeAddress } from "../details/EmployeeAddress"
import { useUpdateEmployeesStore } from "../../../../stores/useUpdateEmployeesStore"
import { useEffect } from "react"



export const EmployeeInfo = ({ employeeData }: { employeeData: IEmployeeInfo & { id: string } & { address: IAddress } }) => {
  const { employee, setEmployee, setAddress } = useUpdateEmployeesStore()
  useEffect(() => {
    const { address, ...employee } = employeeData
    if (employeeData) {
      setEmployee(employee)
      setAddress(address)
    }
  }, [employeeData])
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm relative flex flex-col gap-4 ">
      <div className=" rounded-b-xl flex flex-col">
        <div className="h-36 w-full bg-[--bg-primary] rounded-t-xl flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          {employee?.image && <Image src={employee.image} alt="school" width={144} height={144} />}
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative border-b">
          <h5 className="text-2xl  h-[40px] flex items-center font-semibold text-[--text-primary]">{employee?.name}</h5>
        </div>
      </div>
      <EmployeeDetails />
      <EmployeeAddress />
    </section>
  )
}

