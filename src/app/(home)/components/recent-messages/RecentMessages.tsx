import Link from "next/link"
import { ListView } from "./ListView"

const recentMessages = [
  { id: '1', image: '/temp/sender.jpg', hour: '12:45', sender: 'Samantha William', message: 'Lorem ipsum dolor sit amet...' },
  { id: '2', image: '/temp/sender.jpg', hour: '12:45', sender: 'Tony Soap', message: 'Lorem ipsum dolor sit amet...' },
  { id: '3', image: '/temp/sender.jpg', hour: '12:45', sender: 'Karen Hope', message: 'Lorem ipsum dolor sit amet...' },
  { id: '4', image: '/temp/sender.jpg', hour: '12:45', sender: 'Jordan Nico', message: 'Lorem ipsum dolor sit amet...' },
  { id: '5', image: '/temp/sender.jpg', hour: '12:45', sender: 'Nadila Adja', message: 'Lorem ipsum dolor sit amet...' },
]

export const RecentMessages = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-semibold text-[#303972]">Mensagens</p>
      <ul className="flex-col flex gap-4">
        {recentMessages.map(message => <ListView key={message.id} message={message.message} sender={message.sender} image={message.image} hour={message.hour} />)}
      </ul>
      <Link href={'/students'} className="h-[40px] grid place-content-center  w-full rounded-full bg-[#4D44B5] bg-opacity-10 text-[#4D44B5] font-semibold">Ver mais</Link>
    </div>
  )
}
