import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { SchoolData } from "./components/principal-data/SchoolData";
import { RightSide } from "./components/right-side/RightSide";
import { schoolDetails } from "@/services/school/schoolGets";
import { AddressDetails } from "@/components/templates/address/AddressDetails";

export default async function SchoolPage() {
  const { data, status } = await schoolDetails()
  const { address, ...school } = data
  console.log({ data })
  return (
    <LayoutWeb titlePage="Detalhes da Escola">
      <div className="flex gap-4 h-full">
        <div className="flex flex-col gap-4 grow">
          <SchoolData schoolData={school} />
          <AddressDetails address={address}  />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  )
}