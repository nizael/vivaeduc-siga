import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";

export default function CreateReceiptsPage() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4 min-h-full">
        <TitlePage title="Criar contrato" />
      </div>
    </LayoutApp>
  )
}