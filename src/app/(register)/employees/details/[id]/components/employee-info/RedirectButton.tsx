'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"
import Link from "next/link"

export const RedirectButton = ({ path }: { path: string }) => {
  const { setIsLoading } = useLoadingSpinnerStore()

  return <Link onClick={() => setIsLoading(true)} href={`/employees/update/${path}`} className="shadow-sm text-[--text-primary] text-sm font-semibold  rounded-full h-[40px] px-4 flex items-center gap-1"><EditIcon /> Editar</Link>

}