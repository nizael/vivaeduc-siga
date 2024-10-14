import { LayoutWeb } from "../../../common/components/_layout/LayoutWeb";
import { ListStudents } from "./components/list-students/ListStudets";
import { ToolBar } from "./components/ToolBar";

const listStudents = [
  { id: '1', name: 'Samanta William', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '2', name: 'Tony Soap', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '3', name: 'Karen Hope', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '4', name: 'Jordan Nico', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '5', name: 'Nadila Adja', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '6', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '7', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '8', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '9', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '10', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '11', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '+5591981730582' }, grade: '8º Ano', classroom: '8-FND' },
]

export default function StudentsPage() {
  return (
    <LayoutWeb titlePage="Alunos">
      <div className="flex flex-col gap-4 h-full">
        <ToolBar />
        <ListStudents students={listStudents} />
      </div>
    </LayoutWeb>
  );
}
