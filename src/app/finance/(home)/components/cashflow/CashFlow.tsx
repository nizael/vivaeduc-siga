import { reportCurrentDayCashFlow } from "@/services/report/reportGet"
import { ListIncomings } from "./incomings/ListIncomings"
import { ListOutgoings } from "./outgoings/ListOutgoing"

export const CashFlow = async () => {
  const { data, status } = await reportCurrentDayCashFlow()
  return (
    <section className="flex max-md:flex-col gap-4 justify-between">
      {status === 200 && <>
        <ListIncomings incomings={[]} />
        <ListOutgoings outgoings={[]} />
      </>}
    </section>
  )
}