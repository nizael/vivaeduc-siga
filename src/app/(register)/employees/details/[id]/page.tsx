import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
import { EmployeeClassrooms } from "./components/classsroon/EmployeeCassroom";
import { employeeDetails } from "@/services/employee/employeeGet";
import { TitlePage } from "./components/TitlePage";
import { EmptyPage } from "@/components/empty-state/EmptyPage";

interface IEmployeeDetailsPageProps {
  params: { id: string }
  searchParams: object
}
export default async function EmployeeDetailsPage(props: IEmployeeDetailsPageProps) {
  const { status, data } = await employeeDetails(props.params.id)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 grow">
        {status === 200 && data ? <EmployeeInfo employeeData={data} /> : <EmptyPage label="Funcionário não encontrado" />}
        <EmployeeClassrooms />
      </div>
    </LayoutWeb>
  )
}