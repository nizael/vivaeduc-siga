'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useSearchModalStore } from "../../../stores/useSearchModalStore"
import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"
import { employeeRole } from "@/configs/employeeRole"
import { IGuardians, useGuardiansStore } from "../../../stores/useGuardianStore"

export const SearchModal = () => {
  const { isOpen, onClose } = useSearchModalStore()
  const { listGuardians } = useGuardiansStore()
  const [guardians, setGuardians] = useState<IGuardians[]>([])
  const { setIsLoading } = useLoadingSpinnerStore()

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.currentTarget.value
    if (inputValue) {
      const filterResult = listGuardians?.filter(guardian => guardian.name.toLowerCase().includes(inputValue.toLowerCase()))
      setGuardians(filterResult || [])
    } else setGuardians([])
  }

  useEffect(() => { if (!isOpen) setGuardians([]) }, [isOpen])

  const handleClickLink = () => { setIsLoading(true); onClose() }
  
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="h-[80%] bg-gray-50 w-full max-w-lg p-4 flex flex-col gap-4" onClick={evt => evt.stopPropagation()}>
        <input onChange={handleOnChange} type="search" placeholder="Buscar responsáveis por nome" className="py-2 px-4 w-full outline-bg-primary" autoFocus />
        <div className="flex flex-col gap-2">
          {guardians?.map(guardian => {
            return (
              <Link key={guardian.id} onClick={handleClickLink} href={`/guardians/details/${guardian.id}`} className="flex items-center justify-between px-4 py-2">
                <p className="text-sm">{guardian.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </ModalOverlay>
  )
}