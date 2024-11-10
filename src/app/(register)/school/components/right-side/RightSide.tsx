import { BannerPlan } from "../banner-plan/BannerPlan"

export const RightSide = () => {
  return (
    <section className="hidden lg:flex flex-col gap-10 w-[290px] shadow-sm flex-none bg-gray-50 p-4 ">
      <BannerPlan />
    </section>
  )
}