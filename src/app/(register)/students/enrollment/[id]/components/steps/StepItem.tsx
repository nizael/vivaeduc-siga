export const StepItem = ({ label, step }: { label: string, step: string }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="w-8 h-8 rounded-full bg-[--bg-primary] grid place-content-center text-gray-50 text-xs">{step}</span>
      <span className="text-gray-500 text-xs">{label}</span>
    </div>
  )
}