import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { StethoscopeIcon } from "@/components/icons/StethoscopeIcon"

interface IMedicalRecord {
  bloodType: string
}

export const MedicalRecord = ({ medicalRecord }: { medicalRecord: IMedicalRecord }) => {
  return (
    <details className=" rounded-b-xl group">
      <summary className="px-4 grid grid-cols-3  group-open:rounded-b-none rounded-b-xl place-items-center bg-[--bg-tertiary] text-gray-500 py-2"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"> <StethoscopeIcon /> Ficha médica</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <FieldData field="Tipo sanguíneo" value={medicalRecord?.bloodType || '-'} />
      </div>
    </details>
  )
}