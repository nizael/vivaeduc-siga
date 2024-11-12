import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { ClockIcon } from "@/components/icons/ClockIcon"

interface IEventCardProps {
  indexColor: number
  title: string
  subtitle: string
  date: string
  time: string
}
export const EventCard = ({ date, time, indexColor, subtitle, title }: IEventCardProps) => {
  const colors = {
    0: 'border-[--bg-primary]',
    1: 'border-[#FB7D5B]',
    2: 'border-[#FCC43E]',
    3: 'border-[--text-primary]',
  }



  return (
    <div className={`w-full rounded-xl p-4 border-l-[16px] flex flex-col gap-4 shadow-sm ${colors[indexColor as keyof typeof colors]}`}>
      <div className="flex flex-col gap2">
        <h3 className="font-semibold text-[#363B64] truncate">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1 text-sm text-gray-500">
          <span className="text-[#FB7D5B]">
            <CalendarIcon />
          </span>
          {date}
        </p>
        <p className="flex items-center gap-1 text-sm text-gray-500">
          <span className="text-[#FCC43E]">
            <ClockIcon />
          </span>
          {time}
        </p>
      </div>
    </div>
  )
}