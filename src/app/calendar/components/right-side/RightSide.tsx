import { ListEvents } from "../events/ListEvents"


export const RightSide = () => {
  return (
    <section className="flex flex-col gap-4 w-[290px] flex-none bg-gray-50 p-4 rounded-lg shadow-sm h-full">
      <ListEvents />
    </section>
  )
}