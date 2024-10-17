import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
import { EmployeeClassrooms } from "./components/classsroon/EmployeeCassroom";
import { employeeDetails } from "../../../../services/employee/employeeDetails";
import { TitlePage } from "./components/TitlePage";

interface IEmployeeDetailsPageProps {
  params: { id: string }
  searchParams: object
}
export default async function EmployeeDetailsPage(props: IEmployeeDetailsPageProps) {
  const employeeData = await employeeDetails(props.params.id)
  console.log(employeeData)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 grow">
        <EmployeeInfo employeeData={employeeData.data} />
        <EmployeeClassrooms />
      </div>
    </LayoutWeb>
  )
}