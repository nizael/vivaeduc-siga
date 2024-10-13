import { Student2Icon } from "@/components/icons/Student2Icon"
import { KpiCard } from "./KpiCard"
import { EmployeeIcon } from "@/components/icons/EmployeeIcon"
import { FinanceIcon } from "@/components/icons/FinanceIcon"
import { Chart } from "./Chart"

export const KpiSection = () => {
  return (
    <section className="flex items-center gap-4">
      <KpiCard amount="932" score={10} title="Total de alunos" color="blue" icon={<Student2Icon />} />
      <KpiCard amount="754" score={1} title="Total de funcionarios" color="orange" icon={<EmployeeIcon />} />
      <KpiCard amount="R$ 123.456,00" score={23} title="Saldo da escola" color="yellow" icon={<FinanceIcon />} />
      <div className=" bg-gray-50 h-[124px] rounded-xl shadow-sm w-full">
        <Chart />
      </div>
    </section>
  )
}