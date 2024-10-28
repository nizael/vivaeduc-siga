import { Kpi } from "./Kpi"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { SubjectIcon } from "@/components/icons/SubjectIcon"
import { countStudentClassroomSubject } from "@/services/report/reportGet"

export const Overview = async () => {
  const { data, status } = await countStudentClassroomSubject()
  return (
    <section className="flex items-center p-4 rounded-lg bg-gray-50 justify-between shadow-md">
      <Kpi icon={<Student2Icon />} label="Alunos" value={data?.countStudents} />
      <Kpi icon={<ClassroomIcon />} label="Turmas" value={data?.countClassrooms} />
      <Kpi icon={<SubjectIcon />} label="Disciplinas" value={data?.countSubjects} />
    </section>
  )
}

