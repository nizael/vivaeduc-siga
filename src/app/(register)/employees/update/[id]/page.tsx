import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { employeeDetails } from "@/services/employee/employeeGet";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
interface IEmployeeDetailsPageProps {
  params: { id: string }
  searchParams: object
}

export default async function EmployeeUpdatePage(props: IEmployeeDetailsPageProps) {
  const { status, data } = await employeeDetails(props.params.id)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 grow">
        {(status === 200 && data) && <EmployeeInfo employeeData={data} />}
      </div>
    </LayoutWeb>
  )
}