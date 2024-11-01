'use client'
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { FileTextIcon } from "@/components/icons/FileTextIcon"
import { DocumentItem } from "./DocumentItem"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"
import { useEffect, useState } from "react"
import { enrollmentRequirementListBySchoolYearIdGradeId } from "@/services/enrollmentRequirement/enrollmentRequirementGet"
import { IEnrollmentRequirement } from "@/services/enrollmentRequirement/IEnrollmentRequirement"

const documentStatus = [
  { value: 'DELIVERED', label: 'Entregue' },
  { value: 'PENDING', label: 'Pendente' },
]


export const EnrollmentRequirement = () => {
  const { schoolYearId, gradeId, enrollmentRequirements, setEnrollmentRequirements, pushEnrollmentRequirementChecklists } = useEnrollmentStore()

  if (!enrollmentRequirements.length) return null
  useEffect(() => {
    if (schoolYearId && gradeId) {
      (async () => {
        const { data, status } = await enrollmentRequirementListBySchoolYearIdGradeId(schoolYearId, gradeId)
        if (status === 200 && data) setEnrollmentRequirements(data)
      })()
    }
  }, [schoolYearId, gradeId])

  return (
    <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><FileTextIcon /> Requisitos de matrículas</span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      <div className="flex flex-col p-4 w-full">
        {enrollmentRequirements.map(enrollmentRequirement => <DocumentItem
          key={enrollmentRequirement.id} options={documentStatus}
          onChange={evt => pushEnrollmentRequirementChecklists({ status: evt.currentTarget.value as 'DELIVERED' | 'DELIVERED', enrollmentRequirementId: enrollmentRequirement.id })}
          label={enrollmentRequirement.name}
          name="foto"
          required={enrollmentRequirement.isRequired}
        />)}
        {/* <DocumentItem options={documentStatus} label="3 fotos 3x4 do(a) aluno(a)" name="foto" required />
        <DocumentItem options={documentStatus} label="Certidão de Nascimento do(a) aluno(a) - cópia" name="foto" required />
        <DocumentItem options={documentStatus} label="Comprovante de residência do(a) aluno(a) - cópia" name="foto" required />
        <DocumentItem options={documentStatus} label="Histórico" name="foto" required />
        <DocumentItem options={documentStatus} label="Ressalva" name="foto" required />
        <DocumentItem options={documentStatus} label="RG e CPF do Resp. Financeiro" name="foto" required /> */}
      </div>
    </details>

  )
}