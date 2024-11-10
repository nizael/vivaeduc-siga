import { Calendar } from "./calendar/Calendar"
import { Finance } from "./finance/Finance"

export const CalendarFinance = () => {
  return (
    <section className="flex max-sm:flex-col gap-4 justify-between">
      <Calendar />
      <Finance />
    </section>
  )
}