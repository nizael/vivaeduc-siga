import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListEmployees } from "./components/list-employees/ListEmployees";
import { ToolBar } from "./components/ToolBar";

const listEmployees = [
  { id: '1', image:'/temp/employee.jpg', name: 'Samanta William', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '2', image:'/temp/employee.jpg', name: 'Tony Soap', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '3', image:'/temp/employee.jpg', name: 'Karen Hope', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '4', image:'/temp/employee.jpg', name: 'Jordan Nico', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '5', image:'/temp/employee.jpg', name: 'Nadila Adja', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '6', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '7', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '8', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '9', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '10', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '11', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
  { id: '12', image:'/temp/employee.jpg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, role: 'Science', classroom: '8-FND' },
]

export default function EmployeesPage() {
  return (
    <LayoutWeb titlePage="Funcionários">
      <div className="flex flex-col gap-4 h-full">
        <ToolBar />
        <ListEmployees employees={listEmployees} />
      </div>
    </LayoutWeb>
  );
}
