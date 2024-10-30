'use client'
import { ClassroomData } from "./ClassroomData"
import { EnrollmentRequirement } from "./EnrollmentRequirement"
import { PaymentPlan } from "./PaymentPlan"
import { DetailsBilling } from "./DetailsBilling"
import { DiscountData } from "./DiscountData"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"
import { enrollmentCreate } from "@/services/enrollment/enrollmentCreate"
import { Toast } from "@/components/toast/Toast"
import { useState } from "react"

export const FormEnrollment = ({ studentId }: { studentId: string }) => {
  const { enrollmentRequirements, enrollmentRequirementChecklists } = useEnrollmentStore()
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('error');

  async function handleSubmit(formData: FormData) {
    const isValid = enrollmentRequirementChecklist()
    if (!isValid) {
      setToastType('error')
      setToastMessage('Requisitos obrigatórios não entregues')
      return
    }
    formData.set('enrollmentRequirementChecklists', JSON.stringify(enrollmentRequirements))
    formData.set('studentId', studentId)
    const { data, status } = await enrollmentCreate(formData)
    setToastType(status === 201 ? 'success' : 'error')
    setToastMessage(data.message)

  }

  function enrollmentRequirementChecklist() {
    const requirements = enrollmentRequirements.filter(enrollmentRequirement => enrollmentRequirement.isRequired)
    return requirements.every(requirement => {
      const enrollmentRequirementChecklist = enrollmentRequirementChecklists.find(item => item.enrollmentRequirementId == requirement.id)
      return enrollmentRequirementChecklist && enrollmentRequirementChecklist.status==='DELIVERED' 
    });
  }

  return (
    <>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} type={toastType} />
      )}
      <form action={async formData => {
        handleSubmit(formData)
      }} className="flex flex-col gap-4">
        <ClassroomData />
        <EnrollmentRequirement />
        <PaymentPlan />
        <DiscountData />
        <DetailsBilling />
        <div className="flex items-center gap-4 justify-end">
          <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
          <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
        </div>
      </form>
    </>

  )
}