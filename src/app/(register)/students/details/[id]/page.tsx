import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { SummaryStudent } from "./components/summary-student/SummaryStudent";
import { Classrooms } from "./components/classsroon/Classrooms";
import { StudentEvaluations } from "./components/evaluations/StudentEvaluations";
import { studentDetails } from "@/services/student/studentDetails";
import { IPageProps } from "@/types/page-props/IPageProps";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { enrollmentGetByStudentId } from "@/services/enrollment/enrollmentGet";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { MonthlyFees } from "./components/monthly-fees/MonthlyFees";
import { monthlyFeesListBayStudentId } from "@/services/monthly-fees/enrollmentGet";
import { PersonalData } from "./components/personal-data/PersonalData";
import { AddressView } from "@/components/templates/address/AddressView";
import { ReceivePayment } from "./components/receive-payment/ReceivePayment";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { redirect } from "next/navigation";

export default async function StudentDetailsPage(props: IPageProps) {
  const { data, status } = await studentDetails(props.params.id)
  if(!data) redirect('/students')
  const { student, address, classrooms, monthlyFees } = data

  return (
    <>
      <ReceivePayment />
      <LayoutApp>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Detalhes do Aluno"/>
          {status === 200 && student && <SummaryStudent student={{ ...student, address: address?.street }} />}
          {status === 200 && student && <PersonalData student={student} />}
          {status === 200 && address && <AddressView address={address} />}
          {status === 200 && classrooms && <Classrooms classrooms={classrooms} />}
          {status === 200 && monthlyFees && <MonthlyFees monthlyFees={monthlyFees} />}

        </div>
      </LayoutApp>
    </>
  )
}