import { SummaryStudent } from "./components/summary-student/SummaryStudent";
import { Classrooms } from "./components/classsroon/Classrooms";
import { studentDetails } from "@/services/student/studentDetails";
import { IPageProps } from "@/types/page-props/IPageProps";
import { MonthlyFees } from "./components/monthly-fees/MonthlyFees";
import { PersonalData } from "./components/personal-data/PersonalData";
import { AddressView } from "@/components/templates/address/AddressView";
import { ReceivePayment } from "./components/receive-payment/ReceivePayment";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { redirect } from "next/navigation";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function StudentDetailsPage(props: IPageProps) {
  const { data, status } = await studentDetails(props.params.id)
  if (!data) redirect('/students')
  const { student, address, classrooms, monthlyFees } = data

  return (
    <>
      <ReceivePayment />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4">
            <TitlePage title="Detalhes do Aluno" />
            {status === 200 && student && <SummaryStudent student={{ ...student, address: address?.street }} />}
            {status === 200 && student && <PersonalData student={student} />}
            {status === 200 && address && <AddressView address={address} />}
            {status === 200 && classrooms && <Classrooms classrooms={classrooms} />}
            {status === 200 && monthlyFees && <MonthlyFees monthlyFees={monthlyFees} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  )
}