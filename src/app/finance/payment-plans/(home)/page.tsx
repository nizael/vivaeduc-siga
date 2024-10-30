import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { PaymentPlanList } from "./components/PaymentPlanList";
import { paymentPlanListAll } from "@/services/paymentPlan/paymentPlaGet";
import { ToolBar } from "./components/ToolBar";
import { ModalPaymentPlanCreate } from "../create/ModalPaymentPlanCreate";

export default async function PaymentPlanPage() {
  const { data, status } = await paymentPlanListAll()
  return (
    <>
      <ModalPaymentPlanCreate />
      <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 h-full">
          <ToolBar />
          {(status === 200 && data) && <PaymentPlanList paymentPlans={data} />}
        </div>
      </LayoutWeb>
    </>
  )
}