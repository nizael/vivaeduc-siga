import { ActivityIcon } from "@/components/icons/ActivityIcon"
import { PrintIcon } from "@/components/icons/PrintIcon"

const evaluations = [
  { id: '1', subject: 'Matemática', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '2', subject: 'Ciências', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '3', subject: 'Geografia', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '4', subject: 'Português', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '5', subject: 'História', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
]

export const StudentEvaluations = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col max-h-[395px]">
      <div className="flex items-center justify-between gap-2 text-[--text-primary] rounded-t-xl p-4 border-b">
        <div className="flex items-center gap-2">
          <ActivityIcon />
          <h5 className="font-semibold">Notas</h5>
        </div>
        <button className="flex items-center gap-2 font-semibold "><PrintIcon /> Boletim</button>
      </div>

      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 bg-[--bg-tertiary]">
            <td className="px-4 py-2 text-center border">Disciplina</td>
            <td className="px-4 py-2 text-center border">1º Bimestre</td>
            <td className="px-4 py-2 text-center border">2º Bimestre</td>
            <td className="px-4 py-2 text-center border">1º Recuperação</td>
            <td className="px-4 py-2 text-center border">3º Bimestre</td>
            <td className="px-4 py-2 text-center border">4º Bimestre</td>
            <td className="px-4 py-2 text-center border">2º Recuperação</td>
            <td className="px-4 py-2 text-center border">Média</td>
            <td className="px-4 py-2 text-center border">Pontos</td>
          </tr>
        </thead>
        <tbody>
          {evaluations.map(evaluation => <tr key={evaluation.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary]">
            <td className="p-4 text-center border"> {evaluation.subject}</td>
            <td className="p-4 text-center border"> {evaluation.evaluation1.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.evaluation2.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.evaluation3.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.evaluation4.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.evaluation5.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.evaluation6.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.media.toFixed(1)}</td>
            <td className="p-4 text-center border"> {evaluation.pointAmount.toFixed(1)}</td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}