import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { employeeDetails } from "../../../../services/employee/employeeDetails";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
// import { EmployeeClassrooms } from "./components/classsroon/EmployeeCassroom";

interface IEmployeeDetailsPageProps {
  params: { id: string }
  searchParams: object
}

export default async function EmployeeUpdatePage(props: IEmployeeDetailsPageProps) {
  const employeeData = await employeeDetails(props.params.id)
  console.log(employeeData)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 grow">
        <EmployeeInfo employeeData={employeeData.data} />
        {/* <EmployeeClassrooms /> */}
      </div>
    </LayoutWeb>
  )
}