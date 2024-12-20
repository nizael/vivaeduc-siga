import { Student2Icon } from "@/components/icons/Student2Icon"
import { KpiCard } from "./KpiCard"
import { EmployeeIcon } from "@/components/icons/EmployeeIcon"
import { FinanceIcon } from "@/components/icons/FinanceIcon"
import { generalFinancialStudentEmployeeReport } from "@/services/report/reportGet"
import { env } from "@/configs/env"

export const KpiSection = async () => {
  const { data, status } = await generalFinancialStudentEmployeeReport()
  return (
    <section className="flex items-center gap-4 max-[769px]:flex-col">
      {status === 200 &&
        (
          <>
            <KpiCard
              amount={data.analyzeStudents.totalCount}
              score={data.analyzeStudents.percentageDifference}
              title="Total de alunos"
              color="blue"
              icon={<Student2Icon />}
            />
            <KpiCard
              amount={data.analyzeEmployees.totalCount}
              score={data.analyzeEmployees.percentageDifference}
              title="Total de funcionarios"
              color="orange"
              icon={<EmployeeIcon />}
            />
            {env.NODE_ENV !== 'production' &&
              <>
                <KpiCard amount={'79'} score={10} title="Títulos venvidos" color="yellow" icon={<FinanceIcon />} />
              </>
            }
            <KpiCard
              amount={data.analyzePayments.totalPaymentsSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              score={data.analyzePayments.percentageDifference}
              title="Saldo da escola"
              color="yellow"
              icon={<FinanceIcon />}
            />
          </>
        )}
    </section>
  )
}