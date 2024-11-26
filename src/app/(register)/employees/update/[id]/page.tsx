import { employeeDetails } from "@/services/employee/employeeGet";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
interface IEmployeeDetailsPageProps {
  params: { id: string }
  searchParams: object
}

export default async function EmployeeUpdatePage(props: IEmployeeDetailsPageProps) {
  const { status, data } = await employeeDetails(props.params.id)
  return (
    <LayoutApp >
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Atualizar Funcionário" />
          {(status === 200 && data) && <EmployeeInfo employeeData={data} />}
        </div>
      </LoadingSpinner>
    </LayoutApp>
  )
}