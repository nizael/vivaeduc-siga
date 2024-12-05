import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { ToolBar } from "./components/ToolBar";

export default function ContractPage() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4 min-h-full">
        <TitlePage title="Contratos" />
        <ToolBar />
      </div>
    </LayoutApp>
  )
}