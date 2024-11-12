'use client'
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { useCalendarStore } from "../../../stores/useCalendarStore"
import { EventCard } from "./EventCard"


export const ListEvents = () => {
  const { events } = useCalendarStore()

  return (
    <div className="flex flex-col gap-4">
      {events?.slice(0, 4)?.map((event, index) => {
        const startDate = new Date(event.startDate)
        const endDate = new Date(event.endDate)
        const startTime = startDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });
        const endTime = endDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });
        return (
          <EventCard
            key={`empty_${index}`}
            date={`${startDate.toLocaleDateString('pt-BR')} - ${endDate.toLocaleDateString('pt-BR')}`}
            time={`${startTime} - ${endTime}`}
            indexColor={index}
            subtitle={''}
            title={event.eventName}
          />
        )
      }
      )}
      {/* {!events?.length ? <button className="h-[40px] rounded-full w-full bg-[--bg-tertiary] text-[--text-primary] font-semibold">Ver mais</button> : <EmptyPage label="Não há eventos nesta data"  className="w-40"/>} */}
      {!events?.length ? <EmptyPage label="Não há eventos nesta data" className="w-40" /> : null}
    </div>
  )
}