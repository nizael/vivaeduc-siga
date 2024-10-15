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
        {/* 
        <FieldData field="INEP" value={studentData?.inep || '-'} />
        <FieldData field="Data de nascimento" value={studentData?.dateOfBirth || '-'} />
        <FieldData field="Estado civil" value={studentData?.maritalStatus || '-'} />
        <FieldData field="Sexo" value={studentData?.gender || '-'} />
        <FieldData field="Cor/Raça" value={studentData?.colorOrRace || '-'} />
        <FieldData field="CPF" value={studentData?.document || '-'} />
        <FieldData field="Identidade" value={studentData?.identityCard || '-'} />
        <FieldData field="Orgão emissor" value={studentData?.issuingAuthority || '-'} />
        <FieldData field="Data de emissão" value={studentData?.issueDate || '-'} />
        <FieldData field="UF" value={studentData?.state || '-'} /> */}
      </div>
    </details>
  )
}