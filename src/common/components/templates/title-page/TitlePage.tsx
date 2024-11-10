'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon";
import { useRouter } from "next/navigation";

export const TitlePage = ({ title }: { title: string }) => {
  const backPage = useRouter().back;

  return (
    <div className="flex items-center font-semibold gap-2 text-[--text-primary]">
      <button onClick={backPage} className="border text-[--text-primary] rounded-full h-10 w-10 grid place-content-center rotate-90"> <DropdownIcon /></button>
     <h1>{title}</h1> 
    </div>
  )
}