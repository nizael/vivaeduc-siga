import { ListIncomings } from "./ListIncomings"
import { ListOutgoings } from "./ListOutgoing"

const incomings = [
  { id: '#1425', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1421', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1429', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1442', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1478', value: 'R$ 50,00', date: '11-10-2024' },
]

export const CashFlow = () => {
  return (
    <section className="flex max-md:flex-col gap-4 justify-between">
      <ListIncomings incomings={incomings} />
      <ListOutgoings outgoings={incomings} />
    </section>
  )
}