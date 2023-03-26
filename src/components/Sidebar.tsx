"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import NewChat from "./NewChat";

type SidebarProps = {
  id?: string;
};

const Sidebar: React.FC<SidebarProps> = () => {
  const { data: session } = useSession();

  if (!session) return <div>NOT LOGGED IN</div>;

  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="flex flex-col">
          <NewChat />
          <div>{/* ModelSelection */}</div>
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
