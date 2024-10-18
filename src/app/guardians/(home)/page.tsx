import { LayoutWeb } from "../../../common/components/_layout/LayoutWeb";
import { guardianListAll } from "../../../services/guardian/guardianListAll";
import { EmptyStateGuardian } from "./components/empty-state/EmptyStateGuardian";
import { ListGuardians } from "./components/list-guardians/ListGuardians";
import { ToolBar } from "./components/ToolBar";


const listGuardians = null
//  [
//   { id: '1', image: '/temp/guardian.jpeg', name: 'Samanta William', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '2', image: '/temp/guardian.jpeg', name: 'Tony Soap', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '3', image: '/temp/guardian.jpeg', name: 'Karen Hope', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '4', image: '/temp/guardian.jpeg', name: 'Jordan Nico', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '5', image: '/temp/guardian.jpeg', name: 'Nadila Adja', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '6', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '7', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '8', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '9', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '10', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '11', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '12', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '13', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '14', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '15', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '16', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '17', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '18', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '19', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '20', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '21', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '22', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '23', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
//   { id: '24', image: '/temp/guardian.jpeg', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, role: 'Science', classroom: '8-FND' },
// ]

export default async function GuardiansPage() {
  const { status, data } = await guardianListAll()
  return (
    <LayoutWeb titlePage="Responsáveis">
      <div className="flex flex-col gap-4 h-full">
        <ToolBar />
        {status === 200 && data ? <ListGuardians guardians={data} /> : <EmptyStateGuardian />}
      </div>
    </LayoutWeb>
  );
}
