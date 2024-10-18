'use client'
import { useEffect } from "react"
import { CardGuardian } from "./CardGuardian"
import { Pagination } from "./Pagination"
import { IGuardians, useGuardiansStore } from "../../../stores/useGuardianStore"

export const ListGuardians = ({ guardians }: { guardians: IGuardians[] }) => {
  const { setListGuardians, guardiansView } = useGuardiansStore()

  useEffect(() => {
    if (guardians) setListGuardians(guardians)
  }, [guardians])

  return (
    <section className="grow bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4">
      <div className="grow">
        <div className="w-full grid grid-cols-5 gap-4">
          {guardiansView?.map(guardian => <CardGuardian key={guardian.id} contact={guardian.contact} guardianName={guardian.name} employeeRole={guardian.role} image={guardian.image} id={guardian.id} />)}
        </div>
      </div>
      <Pagination />
    </section>

  )
}