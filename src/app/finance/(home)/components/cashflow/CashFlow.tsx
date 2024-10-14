import { ListIncomings } from "./incomings/ListIncomings"
import { ListOutgoings } from "./outgoings/ListOutgoing"

const incomings = [
  { id: '#1425', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1421', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1429', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1442', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1478', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1444', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1498', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1414', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1558', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1368', value: 'R$ 50,00', date: '11-10-2024' },
]

const outgoings = [
  { id: '#1425', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1421', value: 'R$ 50,00', date: '11-10-2024' },
  { id: '#1429', value: 'R$ 50,00', date: '11-10-2024' },
]

export const CashFlow = () => {
  return (
    <section className="flex max-md:flex-col gap-4 justify-between">
      <ListIncomings incomings={incomings} />
      <ListOutgoings outgoings={outgoings} />
    </section>
  )
}