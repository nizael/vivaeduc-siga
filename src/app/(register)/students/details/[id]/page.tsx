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
import { Address } from "@/components/templates/address/Address";
import { ReceivePayment } from "./components/receive-payment/ReceivePayment";

export default async function StudentDetailsPage(props: IPageProps) {
  const { data, status } = await studentDetails(props.params.id)
  const { student, address, classrooms, monthlyFees } = data
  // const getEnrollment = enrollmentGetByStudentId(props.params.id)
  // const getMonthlyFees = monthlyFeesListBayStudentId(props.params.id)
  // const [details, enrollment, monthlyFees] = await Promise.all([getDetails, getEnrollment, getMonthlyFees])
  return (
    <>
      <ReceivePayment />
      <LayoutWeb titlePage="Detalhes do Aluno">
        <div className="flex flex-col gap-4 grow">
          {status === 200 && student && <SummaryStudent student={{ ...student, address: address?.street }} />}
          {status === 200 && student && <PersonalData student={student} />}
          {status === 200 && address && <Address address={address} />}
          {status === 200 && classrooms && <Classrooms classrooms={classrooms} />}
          {status === 200 && monthlyFees && <MonthlyFees monthlyFees={monthlyFees} />}
          {/*
        */}

        </div>
      </LayoutWeb>
    </>
  )
}