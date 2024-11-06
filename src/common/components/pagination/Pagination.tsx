'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { useEffect, useState } from "react"

interface PaginationProps {
  items: any[] // Lista de itens para calcular o número de páginas
  currentPage: number // Página atual
  setCurrentPage: (page: number) => void // Função para definir a página atual
  itemsPerPage?: number // Opcional: número de itens por página, padrão é 6
}

export const Pagination = ({ items, currentPage, setCurrentPage, itemsPerPage = 6 }: PaginationProps) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])
  const [pageBlockStart, setPageBlockStart] = useState(1)
  const maxVisiblePages = 3

  useEffect(() => {
    if (items) {
      const pageAmount = Math.ceil(items.length / itemsPerPage)
      const pages = Array.from({ length: pageAmount }, (_, index) => index + 1)
      setPageNumbers(pages)
      setPageBlockStart(1)
    }
  }, [items, itemsPerPage])

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      if (currentPage === pageBlockStart) {
        setPageBlockStart(pageBlockStart - 1)
      }
    }
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
      if (currentPage === pageBlockStart + maxVisiblePages - 1) {
        setPageBlockStart(pageBlockStart + 1)
      }
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    if (pageNumber === pageBlockStart + maxVisiblePages - 1 && pageNumber < pageNumbers.length) {
      setPageBlockStart(pageBlockStart + 1)
    } else if (pageNumber === pageBlockStart && pageBlockStart > 1) {
      setPageBlockStart(pageBlockStart - 1)
    }
  }

  const visiblePages = pageNumbers.slice(pageBlockStart - 1, pageBlockStart - 1 + maxVisiblePages)

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
      <p className="text-xs text-gray-500">Exibindo página <b>{currentPage}</b> de <b>{pageNumbers.length}</b></p>
      <div className="flex items-center gap-2">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 rotate-90"
        >
          <DropdownIcon />
        </button>

        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`${currentPage === pageNumber ? 'bg-[--bg-primary] text-gray-50' : ''} w-[40px] h-[40px] rounded-full border border-gray-500 grid place-content-center`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
          className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 -rotate-90"
        >
          <DropdownIcon />
        </button>
      </div>
    </div>
  )
}
