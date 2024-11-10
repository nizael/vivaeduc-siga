import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { LayoutWeb } from "../../common/components/_layout/LayoutWeb";

export default function Chat() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Chat</h1>
      </div>
    </LayoutApp>
  );
}
