'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { useEffect, useState } from "react"
import { usePaymentPlanStore } from "../../../stores/usePaymentPlanStore"


export const Pagination = () => {
  const { paymentPlans, setCurrentPage, currentPage, } = usePaymentPlanStore()

  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  useEffect(() => {
    if (paymentPlans) {
      const pageAmount = Math.ceil(paymentPlans.length / 8);
      const pageNumbers = Array.from({ length: pageAmount }, (_, index) => index + 1);
      setPageNumbers(pageNumbers)
    }
  }, [paymentPlans])

  const previousPage = () => {
    if (currentPage > 1)
      setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length)
      setCurrentPage(currentPage + 1)
  }

  return (
    <div className="px-4 py-2 flex items-center justify-between bg-gray-200">
      <p className="text-xs text-gray-500">Exibindo <b>{currentPage}-{pageNumbers.length}</b> paginas</p>
      <div className="flex items-center gap-2">
        <button onClick={previousPage} className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 rotate-90"><DropdownIcon /></button>
        {pageNumbers.map((pageNumber, index) => <button onClick={() => setCurrentPage(index + 1)} key={`empty_${pageNumber}`} className={`${currentPage === index + 1 ? 'bg-[--bg-primary] text-gray-50 border-none' : ''} w-[40px] h-[40px] rounded-full border border-gray-500 grid place-content-center`}>{index + 1}</button>)}
        <button onClick={nextPage} className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 -rotate-90"><DropdownIcon /></button>
      </div>
    </div>
  )
}