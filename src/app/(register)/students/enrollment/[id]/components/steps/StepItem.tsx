'use client'
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"

export const StepItem = ({ label, step }: { label: string, step: string }) => {
  const { step: stepCurrent } = useEnrollmentStore()
  return (
    <div className="flex flex-col gap-1 items-center">
      <span className={`${step === stepCurrent ? 'bg-[--bg-primary] text-gray-50' : 'border border-[--bg-primary] text-[--text-primary]'} w-8 h-8 rounded-full  grid place-content-center  text-xs`}>{step}</span>
      <span className="text-gray-500 text-xs">{label}</span>
    </div>
  )
}