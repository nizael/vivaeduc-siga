'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useSearchModalStore } from "../../../stores/useSearchModalStore"
import { IStudents, useStudentsStore } from "../../../stores/useStudentsStore"
import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"

export const SearchModal = () => {
  const { isOpen, onClose } = useSearchModalStore()
  const { listStudents } = useStudentsStore()
  const [students, setStudents] = useState<IStudents[]>([])
  const { setIsLoading } = useLoadingSpinnerStore()

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.currentTarget.value
    if (inputValue) {
      const filterStudent = listStudents?.filter(student => student.name.toLowerCase().includes(inputValue.toLowerCase()))
      setStudents(filterStudent || [])
    } else setStudents([])
  }

  useEffect(() => { if (!isOpen) setStudents([]) }, [isOpen])

  const handleClickLink = () => { setIsLoading(true); onClose() }
  
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="h-[80%] bg-gray-50 w-full max-w-lg p-4 flex flex-col gap-4" onClick={evt => evt.stopPropagation()}>
        <input onChange={handleOnChange} type="search" placeholder="Buscar aluno por nome" className="py-2 px-4 w-full outline-bg-primary" autoFocus />
        <div className="flex flex-col gap-2">
          {students?.map(student => {
            return (
              <Link onClick={handleClickLink} href={`/students/details/${student.id}`} className="flex items-center justify-between px-4 py-2">
                <p className="text-sm">{student.name}</p>
                <p className="font-semibold text-sm">{student.code}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </ModalOverlay>
  )
}