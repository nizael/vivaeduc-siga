import { CardEmployees } from "./CardEmployees"
import { Pagination } from "./Pagination"

const listEmployees = [
  { id: '1', image:'/temp/employee.jpg', name: 'Samanta William', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '2', image:'/temp/employee.jpg', name: 'Tony Soap', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '3', image:'/temp/employee.jpg', name: 'Karen Hope', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '4', image:'/temp/employee.jpg', name: 'Jordan Nico', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '5', image:'/temp/employee.jpg', name: 'Nadila Adja', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '6', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
  { id: '7', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
]
export const ListEmployees = () => {
  return (
    <section className=" w-full flex flex-col gap-4">
      <div className="w-full flex gap-4 flex-wrap">
      {listEmployees.map(employee => <CardEmployees key={employee.id} contact={employee.contact} employeeName={employee.name} employeeRole={employee.role} image={employee.image} />)}
      </div>

      <Pagination />
    </section>

  )
}