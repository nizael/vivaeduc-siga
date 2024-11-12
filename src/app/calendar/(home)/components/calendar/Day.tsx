
interface DayProps {
  value: number;
  isToday: boolean;
  isSunday: boolean
  isSaturday: boolean
  isSelected?: boolean
  onClick?(evt: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}
export const Day = ({ value, isToday, isSunday, isSaturday, isSelected, onClick }: DayProps) => {
  const dayClasses = [
    isToday ? "bg-[--bg-primary] text-gray-50" : "text-[--text-primary]", // Dia atual
    isSunday && "border-[#FB7D5B]", // Estilo de domingo
    isSaturday && "border-[#FCC43E]", // Estilo de sábado
    isSelected && !isToday && "bg-[#FB7D5B] text-gray-50" // Estilo de dia selecionado, mas não hoje
  ].filter(Boolean).join(" ")

  return (
    <div className={`border rounded-xl max-h-[100px] h-full p-2 w-full ${dayClasses}`} onClick={onClick}>
      <span className="text-lg font-semibold ">{value}</span>
    </div>
  )
}