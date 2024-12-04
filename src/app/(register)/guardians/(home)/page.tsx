import { guardianListAll } from "@/services/guardian/guardianListAll";
import { ListGuardians } from "./components/list-guardians/ListGuardians";
import { ToolBar } from "./components/ToolBar";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { SearchModal } from "./components/search/SearchModal";

export default async function GuardiansPage() {
  const { status, data } = await guardianListAll()
  return (
    <LayoutApp>
      <SearchModal />
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4 min-h-full">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Responsáveis</h1>
          <ToolBar />
          {status === 200 && data.length ? <ListGuardians guardians={data} /> : <EmptyPage label="Não existem responsáveis cadastrados!" />}
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}
