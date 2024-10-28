import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { IPageProps } from "@/types/page-props/IPageProps";
import { studentDetails } from "@/services/student/studentDetails";
import Image from "next/image";
import { FormClassroom } from "./components/forms/FormEnrollment";
import { IStudentInfo } from "../../@types/IStudentInfo";
import { IAddress } from "@/types/address/IAddress";


export default async function StudentsEnrollmentPage(props: IPageProps) {

  const { data: { address, ...student }, status } = await studentDetails(props.params.id) as { status: number, data: IStudentInfo & { address: IAddress } }
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4">
        <div className="rounded-b-xl bg-gray-50 flex items-center gap-4 justify-between  px-4 py-2">
          <div className="flex items-center gap-4">
            <div className=" w-10 h-10 rounded-full  bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
              {student.image && <Image src={student.image} alt={student.name} width={144} height={144} />}
            </div>
            <h5 className="text-2xl font-semibold text-[--text-primary]">{student.name}</h5>
          </div>
          <div className="flex items-center gap-4 text-[--text-primary]">
            <p>Matrícula: <b>{student.code}</b></p>
            <p>Inep: <b>{student.inep || '-'}</b></p>
          </div>
        </div>
        {/* <StepSection /> */}
        <FormClassroom />
      </div>
    </LayoutWeb>
  );
}
