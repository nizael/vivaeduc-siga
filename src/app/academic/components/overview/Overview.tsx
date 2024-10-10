import { Kpi } from "./Kpi"
import { Student2Icon } from "@/common/common/components/icons/Student2Icon"
import { ClassroomIcon } from "@/common/common/components/icons/ClassroomIcon"
import { SubjectIcon } from "@/common/common/components/icons/SubjectIcon"

export const Overview = () => {
  return (
    <section className="flex items-center p-4 rounded-lg bg-gray-50 justify-between shadow-md">
      <Kpi icon={<Student2Icon />} label="Alunos" value="754" />
      <Kpi icon={<ClassroomIcon />} label="Turmas" value="16" />
      <Kpi icon={<SubjectIcon />} label="Disciplinas" value="26" />
    </section>
  )
}
