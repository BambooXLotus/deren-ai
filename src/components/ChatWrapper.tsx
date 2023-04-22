import { type Session } from "next-auth";
import { useRouter } from "next/router";
import Chat from "./Chat";
import Start from "./Start";

type ChatWrapperProps = {
  session: Session;
};

const ChatWrapper: React.FC<ChatWrapperProps> = ({ session }) => {
  const {
    query: { chatId },
  } = useRouter();
  const {
    user: { id: userId },
  } = session;

  console.log("chatId", chatId);

  return chatId && typeof chatId === "string" ? (
    <Chat chatId={chatId} />
  ) : (
    <Start />
  );
};

export default ChatWrapper;
