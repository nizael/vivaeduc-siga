
interface DayProps {
  value: number;
  isToday: boolean;
  isSunday: boolean
  isSaturday: boolean
  selected?: boolean
}
export const Day = ({ value, isToday, isSunday, isSaturday, selected }: DayProps) => {
  const dayClasses = [
    isToday ? "bg-[#4D44B5] text-gray-50" : "text-[#303972]", // Dia atual
    isSunday && "border-[#FB7D5B]", // Estilo de domingo
    isSaturday && "border-[#FCC43E]", // Estilo de sábado
    selected && !isToday && "bg-[#FB7D5B] text-gray-50" // Estilo de dia selecionado, mas não hoje
  ].filter(Boolean).join(" ")

  return (
    <div className={`border rounded-xl p-2 w-full h-[130px] ${dayClasses}`}>
      <span className="text-lg font-semibold ">{value}</span>
    </div>
  )
}