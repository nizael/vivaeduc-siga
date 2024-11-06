'use client'
import { useEffect } from "react"
import { IEmployees, useEmployeesStore } from "../../../stores/useEmployeesStore"
import { CardEmployees } from "./CardEmployees"
import { Pagination } from "@/components/pagination/Pagination"
// import { Pagination } from "./Pagination"


export const ListEmployees = ({ employees }: { employees: IEmployees[] }) => {

  const { setListEmployees, employeesView, listEmployees, setCurrentPage, currentPage, } = useEmployeesStore()

  useEffect(() => {
    if (employees) setListEmployees(employees)
  }, [employees])
  return (
    <section className="grow bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <div className="w-full grid grid-cols-5 gap-4">
          {employeesView?.map(employee => <CardEmployees key={employee.id} id={employee.id} contact={employee.contact} employeeName={employee.name} employeeRole={employee.role} image={employee.image} />)}
        </div>
      </div>
      {listEmployees && <Pagination currentPage={currentPage} items={listEmployees} setCurrentPage={setCurrentPage} itemsPerPage={10} />}
    </section>

  )
}