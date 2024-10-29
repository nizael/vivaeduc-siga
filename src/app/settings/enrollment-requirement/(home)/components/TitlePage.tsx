'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon";
import { useRouter } from "next/navigation";

export const TitlePage = () => {
  const backPage = useRouter().back;

  return (
    <div className="flex items-center gap-2">
      <button onClick={backPage} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center rotate-90"> <DropdownIcon /></button>
      Requisitos de matrícula
    </div>
  )
}