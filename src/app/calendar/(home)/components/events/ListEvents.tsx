import { EventCard } from "./EventCard"

const events = [
  { title: 'Basic Algorithm', subtitle: 'Algorithm', date: 'March 20, 2021', hour: '09.00 - 10.00 AM' },
  { title: 'Basic Art', subtitle: 'Art', date: 'March 20, 2021', hour: '09.00 - 10.00 AM' },
  { title: 'HTML & CSS Class', subtitle: 'Programming', date: 'March 20, 2021', hour: '09.00 - 10.00 AM' },
  { title: 'Simple Past Tense', subtitle: 'English', date: 'March 20, 2021', hour: '09.00 - 10.00 AM' },
]

export const ListEvents = () => {
  return (
    <div className="flex flex-col gap-4">
      {events.map((event, index) => <EventCard key={`empty_${index}`} date={event.date} hour={event.hour} indexColor={index} subtitle={event.subtitle} title={event.title} />)}
      <button className="h-[40px] rounded-full w-full bg-[--bg-tertiary] text-[--text-primary] font-semibold">Ver mais</button>
    </div>
  )
}