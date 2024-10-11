import Image from "next/image"

interface IListViewProps {
  image?: string
  sender: string
  message: string
  hour: string
}

export const ListView = ({ message, sender, image, hour }: IListViewProps) => {
  return (
    <li className="flex items-center gap-2 justify-between">
        <div className="w-[40px] h-[40px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden">
          {image && <Image src={image} width={40} height={40} alt={sender} />}
        </div>
        <div className="flex flex-col grow gap-1">
          <p className="text-sm font-semibold text-[--text-primary]">{sender}</p>
          <p className="text-xs text-gray-500 truncate">{message}</p>
        </div>
        <div className="flex h-full text-gray-500 text-sm">
          <p>{hour}</p>
        </div>
    </li>
  )
}