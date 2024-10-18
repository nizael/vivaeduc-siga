import { LayoutWeb } from "../../../common/components/_layout/LayoutWeb";
import { guardianListAll } from "@/services/guardian/guardianListAll";
import { ListGuardians } from "./components/list-guardians/ListGuardians";
import { ToolBar } from "./components/ToolBar";
import { EmptyPage } from "@/components/empty-state/EmptyPage";

export default async function GuardiansPage() {
  const { status, data } = await guardianListAll()
  return (
    <LayoutWeb titlePage="Responsáveis">
      <div className="flex flex-col gap-4 h-full">
        <ToolBar />
        {status === 200 && data ? <ListGuardians guardians={data} /> : <EmptyPage label="Não existem responsáveis cadastrados!" />}
      </div>
    </LayoutWeb>
  );
}
