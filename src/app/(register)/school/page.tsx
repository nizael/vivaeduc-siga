import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { SchoolData } from "./components/principal-data/SchoolData";
import { RightSide } from "./components/right-side/RightSide";
import { schoolDetails } from "@/services/school/schoolGets";
import { Address } from "@/components/templates/address/Address";

export default async function SchoolPage() {
  const { data, status } = await schoolDetails()
  return (
    <LayoutWeb titlePage="Detalhes da Escola">
      <div className="flex gap-4 h-full">
        <div className="flex flex-col gap-4 grow">
          {(status === 200 && data) && <SchoolData schoolData={data} />}
          {(status === 200 && data.address) && <Address address={data.address} />}
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  )
}