'use client'
import { useEffect } from "react"
import { CardGuardian } from "./CardGuardian"
import { IGuardians, useGuardiansStore } from "../../../stores/useGuardianStore"
import { Pagination } from "@/components/pagination/Pagination"

export const ListGuardians = ({ guardians }: { guardians: IGuardians[] }) => {
  const { setListGuardians, guardiansView, listGuardians, setCurrentPage, currentPage, } = useGuardiansStore()

  useEffect(() => {
    if (guardians) setListGuardians(guardians)
  }, [guardians])

  return (
    <section className="grow bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4">
      <div className="grow">
      <div className="w-full grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-3 max-sm:place-items-center gap-4">
          {guardiansView?.map(guardian => <CardGuardian key={guardian.id} contact={guardian.contact} guardianName={guardian.name} employeeRole={guardian.role} image={guardian.image} id={guardian.id} />)}
        </div>
      </div>
      {listGuardians && <Pagination currentPage={currentPage} items={listGuardians} setCurrentPage={setCurrentPage} itemsPerPage={10} />}
    </section>

  )
}