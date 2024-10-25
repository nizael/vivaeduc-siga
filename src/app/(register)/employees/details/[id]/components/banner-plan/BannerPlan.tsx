import Link from "next/link"

export const BannerPlan = () => {
  return (
    <div className="bg-[--bg-primary] text-gray-50 p-4 rounded-t-xl rounded-l-xl relative overflow-hidden ">
      <div className="w-20 h-72 rounded-full bg-[#FB7D5B] absolute -bottom-32 right-1 z-0" />
      <div className="w-20 h-72 rounded-full bg-[#FCC43E] absolute  -bottom-20 -right-10 z-0" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p>Seu Plano</p>
          <p className="text-3xl font-semibold">Básico</p>
        </div>
        {/* <ul className="flex flex-col gap-1 pl-4 text-sm z-10 italic">
          <li>- Cadastro de Alunos e Professores</li>
          <li>- Matrícula e Rematrícula</li>
          <li>- Controle de Notas e Frequência</li>
          <li>- Emissão de Boletins e Relatórios Simples</li>
          <li>- Calendário Escolar</li>
          <li>- Gestão de Mensalidades</li>
        </ul> */}
        <p className="text-sm z-10 font-semibold">Atualize para o plano Premium para obter mais recursos</p>
        <Link className="z-10  h-[40px] px-4 rounded-full bg-gray-50 text-[--text-primary] grid place-content-center font-semibold w-fit" href={'/'}>Alterar Plano</Link>
      </div>
    </div>
  )
}