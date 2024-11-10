import { SchoolData } from "./components/principal-data/SchoolData";
import { RightSide } from "./components/right-side/RightSide";
import { schoolDetails } from "@/services/school/schoolGets";
import { AddressView } from "@/components/templates/address/AddressView";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function SchoolPage() {
  const { data, status } = await schoolDetails()
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4  p-4">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Escola</h1>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 grow">
            {(status === 200 && data) && <SchoolData schoolData={data} />}
            {/* {(status === 200 && data.address) && <AddressView address={data.address} />} */}
          </div>
          <RightSide />
        </div>
      </div>
    </LayoutApp>
  )
}