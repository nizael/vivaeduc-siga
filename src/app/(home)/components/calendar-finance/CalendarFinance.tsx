import { Calendar } from "./Calendar"
import { Finance } from "./Fianance"

export const CalendarFinance = () => {
  return (
    <section className="flex max-md:flex-col gap-4 justify-between">
      <Calendar />
      <Finance />
    </section>
  )
}