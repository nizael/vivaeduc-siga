import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { IPageProps } from "@/types/page-props/IPageProps";
import { studentDetails } from "@/services/student/studentDetails";
import Link from "next/link";
import { FieldData } from "./components/field-data/FieldData";
import Image from "next/image";
import { EditIcon } from "@/components/icons/EditIcon";
import { LocationIcon } from "@/components/icons/LocationsIcon";
import { CallIcon } from "@/components/icons/CallIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { StepSection } from "./components/steps/StepSection";
import { FormClassroom } from "./components/forms/Formenrollment";


export default async function StudentsEnrollmentPage(props: IPageProps) {

  const { data: { address, ...student }, status } = await studentDetails(props.params.id)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4">
        <div className="rounded-b-xl bg-gray-50 flex items-center gap-4 ">
          <div className=" w-14 h-14 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
            {student.image && <Image src={student.image} alt={student.name} width={144} height={144} />}
          </div>
          <h5 className="text-2xl font-semibold text-[--text-primary]">{student.name}</h5>
          {/* <div className="flex flex-col gap-4">
              <div className="flex items-center gap-20">
                <FieldData field="Endereço" value={`${address.street}, ${address.city}`} icon={<LocationIcon />} />
                <FieldData field="Telefone" value={student.phone} icon={<CallIcon />} />
                <FieldData field="Email" value={student.email} icon={<EmailIcon />} />
              </div>
            </div> */}
        </div>
        {/* <StepSection /> */}
        <FormClassroom />
      </div>
    </LayoutWeb>
  );
}
