'use client'
import Image from "next/image"
import { StudentDetails } from "../details/StudentDetails"
import { IAddress } from "@/types/address/IAddress"
import { IStudent } from "../../../../@types/IStudentInfo"
import { useUpdateStudentStore } from "../../../../stores/useUpdateStudentStore"
import { useEffect } from "react"
import { StudentAddress } from "../details/StudentAddress"



export const StudentInfo = (props: { studentData: { student: IStudent, address: IAddress } }) => {

  const { student, setStudent, setAddress } = useUpdateStudentStore()

  useEffect(() => {
    const { address, student } = props.studentData
    if (props) {
      setStudent(student)
      setAddress(address)
    }
  }, [props])


  return (
    <section className=" bg-gray-50 shadow-sm relative flex flex-col gap-4 ">
      <div className=" l flex flex-col">
        <div className="h-36 w-full bg-[--bg-primary] flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          {student?.image && <Image src={student.image} alt="school" width={144} height={144} />}
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative border-b">
          <h5 className="text-2xl  h-[40px] flex items-center font-semibold text-[--text-primary]">{student?.name}</h5>
        </div>
      </div>
      <StudentDetails />
      <StudentAddress />
    </section>
  )
}

