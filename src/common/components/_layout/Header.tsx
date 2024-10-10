import { BellIcon } from "../icons/BellIcon"
// import { SearchIcon } from "../icons/SearchIcon"
import { SettingsIcon } from "../icons/SettingsIcon"

export const Header = ({titlePage}:{titlePage: string}) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center justify-between grow  p-4">
        <h1 className="text-[#303972] text-3xl font-semibold">{titlePage}</h1>
        {/* <button className="flex gap-2 px-4 py-1 bg-gray-50 max-w-96 w-full flex-none rounded-full text-[#4D44B5]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button> */}
      </div>
      <div className="flex items-center gap-4  p-4">
        <button className="grid place-content-center rounded-full bg-gray-50 p-1 text-slate-500">
          <BellIcon />
        </button>
        <button className="grid place-content-center rounded-full bg-gray-50 p-1 text-slate-500">
          <SettingsIcon />
        </button>
        <div className="flex flex-col items-end">
          <p className="text-[#303972] font-semibold">Thalita</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <div className="bg-[#C1BBEB] w-[40px] h-[40px] rounded-full"></div>
      </div>
    </header>
  )
}