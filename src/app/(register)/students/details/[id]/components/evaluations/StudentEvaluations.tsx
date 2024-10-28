import { ActivityIcon } from "@/components/icons/ActivityIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { EditIcon } from "@/components/icons/EditIcon"
import { PrintIcon } from "@/components/icons/PrintIcon"
import Link from "next/link"

const evaluations = [
  { id: '1', subject: 'Matemática', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '2', subject: 'Ciências', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '3', subject: 'Geografia', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '4', subject: 'Português', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
  { id: '5', subject: 'História', evaluation1: 9, evaluation2: 8, evaluation3: 5, evaluation4: 9, evaluation5: 8, evaluation6: 7, media: 4, pointAmount: 25 },
]

export const StudentEvaluations = () => {
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2">
          <ActivityIcon />
          Notas
        </span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      <table className=" w-full">
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
          {evaluations.map(evaluation => <tr key={evaluation.id} className="text-[--text-primary] font-semibold text-sm">
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

      <div className="p-4 flex justify-end">
        <Link href={`/students/update/${1}`} className="shadow-sm bg-[--bg-primary] text-gray-50 text-sm font-semibold  rounded-full h-[40px] px-4 flex items-center gap-1"><EditIcon /> Editar</Link>
      </div>
    </details>
  )
}