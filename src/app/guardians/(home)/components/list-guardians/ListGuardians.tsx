import { CardGuardian } from "./CardGuardian"
import { Pagination } from "./Pagination"

const listGuardians = [
  { id: '1', image:'/temp/guardian.jpeg', name: 'Samanta William', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '2', image:'/temp/guardian.jpeg', name: 'Tony Soap', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '3', image:'/temp/guardian.jpeg', name: 'Karen Hope', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '4', image:'/temp/guardian.jpeg', name: 'Jordan Nico', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '5', image:'/temp/guardian.jpeg', name: 'Nadila Adja', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '6', image:'/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '7', image:'/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
]
export const ListGuardians = () => {
  return (
    <section className=" w-full flex flex-col gap-4">
      <div className="w-full flex gap-4 flex-wrap">
      {listGuardians.map(guardian => <CardGuardian key={guardian.id} contact={guardian.contact} guardianName={guardian.name} employeeRole={guardian.role} image={guardian.image} id={guardian.id} />)}
      </div>
      <Pagination />
    </section>

  )
}