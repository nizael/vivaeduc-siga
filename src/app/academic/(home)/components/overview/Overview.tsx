import { Kpi } from "./Kpi"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { SubjectIcon } from "@/components/icons/SubjectIcon"
import { countStudentClassroomSubjectEventEmployee } from "@/services/report/reportGet"

export const Overview = async () => {
  const { data, status } = await countStudentClassroomSubjectEventEmployee()
  return (
    <section className="flex items-center p-4 max-sm:flex-col  bg-gray-50 justify-between gap-2">
      <Kpi icon={<Student2Icon />} label="Alunos" value={data?.countStudents} />
      <Kpi icon={<ClassroomIcon />} label="Turmas" value={data?.countClassrooms} />
      <Kpi icon={<SubjectIcon />} label="Disciplinas" value={data?.countSubjects} />
    </section>
  )
}

