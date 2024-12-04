'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useSearchModalStore } from "../../../stores/useSearchModalStore"
import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"
import { IEmployees, useEmployeesStore } from "../../../stores/useEmployeesStore"
import { employeeRole } from "@/configs/employeeRole"

export const SearchModal = () => {
  const { isOpen, onClose } = useSearchModalStore()
  const { listEmployees } = useEmployeesStore()
  const [employees, setEmployees] = useState<IEmployees[]>([])
  const { setIsLoading } = useLoadingSpinnerStore()

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.currentTarget.value
    if (inputValue) {
      const filterResult = listEmployees?.filter(employee => employee.name.toLowerCase().includes(inputValue.toLowerCase()))
      setEmployees(filterResult || [])
    } else setEmployees([])
  }

  useEffect(() => { if (!isOpen) setEmployees([]) }, [isOpen])

  const handleClickLink = () => { setIsLoading(true); onClose() }
  
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="h-[80%] bg-gray-50 w-full max-w-lg p-4 flex flex-col gap-4" onClick={evt => evt.stopPropagation()}>
        <input onChange={handleOnChange} type="search" placeholder="Buscar funcionário por nome" className="py-2 px-4 w-full outline-bg-primary" autoFocus />
        <div className="flex flex-col gap-2">
          {employees?.map(employee => {
            return (
              <Link onClick={handleClickLink} href={`/students/details/${employee.id}`} className="flex items-center justify-between px-4 py-2">
                <p className="text-sm">{employee.name}</p>
                <p className="font-semibold text-sm">{employeeRole[employee.role as keyof typeof employeeRole]}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </ModalOverlay>
  )
}