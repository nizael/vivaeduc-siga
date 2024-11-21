export const Conversations = () => {
  return (
    <div className="flex items-center gap-1 border-b py-2 h-14">
      <div className="w-10 h-10 rounded-full bg-primary" />
      <div className="grow flex flex-col">
        <div className="flex justify-between">
          <span className="text-sm text-[--text-primary] font-semibold">Primeiro ano do médio</span>
          <span className="text-xs text-gray-500">10:40</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Lorem ipsum dolor sit amet...</span>
          <span className="w-4 h-4 rounded-full text-xs grid place-content-center text-gray-50 bg-orange-400">2</span>
        </div>
      </div>
    </div>
  )
}