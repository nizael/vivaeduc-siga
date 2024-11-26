import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
import { EmployeeClassrooms } from "./components/classsroon/EmployeeCassroom";
import { employeeDetails } from "@/services/employee/employeeGet";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

interface IEmployeeDetailsPageProps {
  params: { id: string }
  searchParams: object
}
export default async function EmployeeDetailsPage(props: IEmployeeDetailsPageProps) {
  const { status, data } = await employeeDetails(props.params.id)
  return (
    <LayoutApp >
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Detalhes do Funcionário" />
          {status === 200 && data ? <EmployeeInfo employeeData={data} /> : <EmptyPage label="Funcionário não encontrado" />}
          <EmployeeClassrooms />
        </div>
      </LoadingSpinner>
    </LayoutApp>
  )
}