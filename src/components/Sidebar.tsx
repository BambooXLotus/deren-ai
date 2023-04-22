"use client";

import { MessageSquare, MessageSquareIcon, Trash2 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import NewChat from "./NewChat";
import { Button } from "./ui/Button";

type SidebarProps = {
  id?: string;
};

const Sidebar: React.FC<SidebarProps> = () => {
  const { data: session } = useSession();
  const {
    push,
    query: { chatId },
  } = useRouter();

  if (!session) return <div>NOT LOGGED IN</div>;

  const { data: chats } = api.chat.getAll.useQuery();

  console.count("donkey");

  async function handleChatClick(chatId: string) {
    await push({
      query: { chatId },
    });
  }

  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="flex flex-col gap-2">
          <>
            <NewChat />
            {/* <div>Modal Selection</div> */}
            {chats?.map((chat) => (
              // <div key={chat.id}>
              //   <div
              //     className="flex flex-row items-center justify-center text-white"
              //     onClick={() => void handleChatClick(chat.id)}
              //   >
              //     <MessageSquare className="h-5 w-5" />
              //     <p className="flex-1 truncate md:inline-flex">Deren</p>
              //     <Trash2 className="h-5 w-5 hover:text-red-700" />
              //   </div>
              // </div>
              <Button
                key={chat.id}
                className={`gap-2 font-extralight ${
                  chatId === chat.id ? "bg-slate-800" : ""
                }`}
                variant="ghost"
                onClick={() => void handleChatClick(chat.id)}
              >
                <MessageSquare className="h-5 w-5" />
                <p className="hidden flex-1 truncate md:inline-flex">
                  New Chat
                </p>
                <p className="text-xs">{chat.updatedAt.toDateString()}</p>
                <Trash2 className="h-5 w-5 text-gray-600 hover:text-red-700" />
              </Button>
            ))}
          </>
        </div>
      </div>
      {session.user.image && (
        <Image
          className="mx-auto mb-2 h-12 w-12 cursor-pointer rounded-full hover:opacity-50"
          src={session.user.image}
          alt="Profile pic"
          width={48}
          height={48}
          onClick={() => void signOut()}
        ></Image>
      )}
    </div>
  );
};

export default Sidebar;
