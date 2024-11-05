import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { IStudent } from "../../../../@types/IStudentInfo"
import { maritalStatus } from "@/configs/maritalStatus"
import { gender } from "@/configs/gender"
import { colorOrRace } from "@/configs/colorOrRace"
import { IStudentGuardian } from "../../../../@types/student-guardian/IStudentGuardian"
import { kinship } from "@/configs/kinship"


export const StudentGuardians = ({ studentGuardians }: { studentGuardians: (IStudentGuardian & { guardianName: string })[] }) => {
  if (!studentGuardians.length) return null
  return (
    <details open className="">
      <summary className="px-4 py-2 grid grid-cols-3 border-t bg-primary place-items-center text-gray-50"><span className="font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Responsáveis</span> <DotsIcon /> <span /></summary>
      {studentGuardians?.map(studentGuardian => {
        return (
          < div key={studentGuardian.id}>
            <div className="relative grid grid-cols-4 gap-4  p-4">
              <FieldData field="Nome" value={studentGuardian?.guardianName || '-'} />
              <FieldData field="Responsável financeiro" value={studentGuardian?.isFinanciallyResponsible ? 'Sim' : 'Não'} />
              <FieldData field="Parentesco" value={kinship[studentGuardian?.kinship as keyof typeof kinship]} />
            </div>
          </div>
        )
      })}
    </details >
  )
}