import { RecentStudents } from "../recent-students/RecentStudents"

export const RightSide = () => {
  return (
    <section className="flex flex-col gap-4 w-[350px] bg-gray-50 p-4 rounded-lg">
      <RecentStudents />
    </section>
  )
}