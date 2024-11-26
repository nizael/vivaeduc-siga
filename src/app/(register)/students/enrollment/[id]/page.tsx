import { IPageProps } from "@/types/page-props/IPageProps";
import { studentDetails } from "@/services/student/studentDetails";
import Image from "next/image";
import { FormEnrollment } from "./components/forms/FormEnrollment";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";


export default async function StudentsEnrollmentPage(props: IPageProps) {
  const { data, status } = await studentDetails(props.params.id)
  return (
    <LayoutApp >
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Nova Matrícula" />
          <div className=" bg-gray-50 flex items-center gap-4 justify-between  px-4 py-2">
            <div className="flex items-center gap-4">
              <div className=" w-10 h-10 rounded-full  bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
                {data?.student.image && <Image src={data?.student.image} alt={data?.student.name} width={144} height={144} />}
              </div>
              <h5 className="text-2xl font-semibold text-primary">{data?.student.name}</h5>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <p>Matrícula: <b>{data?.student.code}</b></p>
              <p>Inep: <b>{data?.student.inep || '-'}</b></p>
            </div>
          </div>
          {(status === 200 && data) ? <FormEnrollment studentId={data?.student.id} /> : <EmptyPage label="Aluno não encontrado" />}
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}