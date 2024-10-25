import { StepItem } from "./StepItem"

export const StepSection = () => {
  return (
    <section className="flex gap-4 justify-evenly ">
      <StepItem label="Turma" step="1" />
      <StepItem label="Procedimento" step="2" />
      <StepItem label="Pagamento" step="3" />
      <StepItem label="Desconto" step="4" />
      <StepItem label="Cobrança" step="5" />
      <StepItem label="Confirmação" step="6" />
    </section>
  )
}