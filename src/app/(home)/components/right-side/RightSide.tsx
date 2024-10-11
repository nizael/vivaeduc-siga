import { RecentMessages } from "../recent-messages/RecentMessages"
import { RecentStudents } from "../recent-students/RecentStudents"

export const RightSide = () => {
  return (
    <section className="flex flex-col gap-10 w-[290px] flex-none bg-gray-50 p-4 rounded-lg">
      <RecentStudents />
      <RecentMessages />
    </section>
  )
}