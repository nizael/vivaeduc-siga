'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { useEffect, useState } from "react"
import { useOutgoingStore } from "../../../stores/useOutgoingStore"

export const Pagination = () => {
  const { listOutgoings, setCurrentPage, currentPage, } = useOutgoingStore()

  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  useEffect(() => {
    if (listOutgoings) {
      const pageAmount = Math.ceil(listOutgoings.length / 5);
      const pageNumbers = Array.from({ length: pageAmount }, (_, index) => index + 1);
      setPageNumbers(pageNumbers)
    }
  }, [listOutgoings])

  const previousPage = () => {
    if (currentPage > 1)
      setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length)
      setCurrentPage(currentPage + 1)
  }

  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-gray-500">Exibindo <b>{currentPage}-{pageNumbers.length}</b> paginas</p>
      <div className="flex items-center gap-2">
        <button onClick={previousPage} className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 rotate-90"><DropdownIcon /></button>
        {pageNumbers.map((pageNumber, index) => <button onClick={() => setCurrentPage(index + 1)} key={`empty_${pageNumber}`} className={`${currentPage === index + 1 ? 'bg-[--bg-primary] text-gray-50 border-none' : ''} w-[40px] h-[40px] rounded-full border border-gray-500 grid place-content-center`}>{index + 1}</button>)}
        <button onClick={nextPage} className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 -rotate-90"><DropdownIcon /></button>
      </div>
    </div>
  )
}