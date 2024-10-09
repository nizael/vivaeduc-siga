import { Calender } from "./Calender"
import { Finance } from "./Fianance"

export const CalenderFinance = () => {
  return (
    <section className="flex max-md:flex-col gap-4 justify-between">
      <Calender />
      <Finance />
    </section>
  )
}