import MessageInput from "./MessageInput";
import Messages from "./Messages";

type ChatProps = {
  chatId: string;
};

const Chat: React.FC<ChatProps> = ({ chatId }) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-gray-800">
      <Messages chatId={chatId} />
      <MessageInput chatId={chatId} />
    </div>
  );
};

export default Chat;
