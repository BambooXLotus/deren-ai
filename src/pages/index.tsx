import { AlertTriangle, CloudLightning, Sun } from "lucide-react";
import { useSession } from "next-auth/react";
import ChatWrapper from "~/components/ChatWrapper";
import Login from "~/components/Login";
import Sidebar from "~/components/Sidebar";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <div className="flex">
      <div className="h-screen max-w-xs overflow-y-auto bg-gray-900 md:min-w-[20rem]">
        <Sidebar />
      </div>
      <ChatWrapper session={session} />
    </div>
  );
}
