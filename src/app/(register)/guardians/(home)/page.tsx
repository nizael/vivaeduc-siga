import { guardianListAll } from "@/services/guardian/guardianListAll";
import { ListGuardians } from "./components/list-guardians/ListGuardians";
import { ToolBar } from "./components/ToolBar";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function GuardiansPage() {
  const { status, data } = await guardianListAll()
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4 min-h-full">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Responsáveis</h1>
        <ToolBar />
        <LoadingSpinner>
          {status === 200 && data.length ? <ListGuardians guardians={data} /> : <EmptyPage label="Não existem responsáveis cadastrados!" />}
        </LoadingSpinner>
      </div>
    </LayoutApp>
  );
}
