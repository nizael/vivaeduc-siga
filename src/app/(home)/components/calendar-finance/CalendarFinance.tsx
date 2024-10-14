import { Calendar } from "./calendar/Calendar"
import { Finance } from "./finance/Finance"

export const CalendarFinance = () => {
  return (
    <section className="grid grid-cols-2  gap-4 justify-between">
      <Calendar />
      <Finance />
    </section>
  )
}