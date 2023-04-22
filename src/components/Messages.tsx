import { api } from "~/utils/api";

type MessagesProps = {
  chatId: string;
};

const Messages: React.FC<MessagesProps> = ({ chatId }) => {
  const { data: messages } = api.message.getAllByChatId.useQuery({ chatId });

  return (
    <div className="flex-1">
      {messages?.map((message) => {
        return <div key={message.id}>{message.body}</div>;
      })}
    </div>
  );
};

export default Messages;
