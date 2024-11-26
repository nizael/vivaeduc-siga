import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { Conversations } from "./components/Conversations";
import { env } from "@/configs/env";

export default function Chat() {
  if (env.NODE_ENV === 'production') return null
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4 min-h-full">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary] ">Chat</h1>
        <section className=" bg-gray-50 shadow-sm p-4 gap-4 flex grid-cols-2 w-full grow">
          <div className="flex flex-col max-w-screen-sm w-full gap-4">
            <h5 className="text-[--text-primary]">Mensagens</h5>
            <div className="flex flex-col overflow-y-auto">
              <details open className="group ">
                <summary className="text-sm text-gray-500 border-b group-open:border-b-transparent py-2">Grupos</summary>
                <div className="flex flex-col  gap-2 py-4">
                  <Conversations />
                </div>
              </details>
              <details open className="group">
                <summary className="text-sm text-gray-500 border-b group-open:border-b-transparent py-2">Chats</summary>
                <div className="flex flex-col gap-2 py-4">
                  <Conversations />
                </div>
              </details>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <div className="flex items-center gap-1 border-b py-2 h-14">
              <div className="w-10 h-10 rounded-full bg-primary" />
              <div className="grow flex flex-col">
                <span className="text-sm text-[--text-primary] font-semibold">Samantha WIlliam</span>
                <span className="text-xs text-gray-500">Online</span>
              </div>
              <span className="text-xs text-gray-500">...</span>
            </div>
            <div className="grow overflow-y-auto">
              <Conversations />
            </div>
          </div>
        </section>
      </div>
    </LayoutApp>
  );
}
