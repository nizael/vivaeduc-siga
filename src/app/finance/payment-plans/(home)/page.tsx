import { PaymentPlanList } from "./components/PaymentPlanList";
import { paymentPlanListAll } from "@/services/paymentPlan/paymentPlaGet";
import { ToolBar } from "./components/ToolBar";
import { ModalPaymentPlanCreate } from "../create/ModalPaymentPlanCreate";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function PaymentPlanPage() {
  const { data, status } = await paymentPlanListAll()
  return (
    <>
      <ModalPaymentPlanCreate />
      <LayoutApp >
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Planos de pagamento" />
          <ToolBar />
          {(status === 200) && <PaymentPlanList ListPaymentPlans={data} />}
        </div>
      </LayoutApp>
    </>
  )
}