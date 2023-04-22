import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";
import { Input } from "./ui/Input";

type MessageInputProps = {
  chatId: string;
};

const MessageInput: React.FC<MessageInputProps> = ({ chatId }) => {
  const [messageBody, setMessageBody] = useState("");
  const { mutateAsync: sendMessage } = api.message.create.useMutation();

  async function handleSubmitMessage(event: React.FormEvent): Promise<void> {
    event.preventDefault();

    const notification = toast.loading("ChatGPT is thinking...");
    await sendMessage(
      { chatId, messageBody },
      {
        onSuccess: (response) => {
          console.log(response);
          setMessageBody("");
          toast.success("ChatGPT has responded!", {
            id: notification,
          });
        },
      }
    );
  }

  return (
    <div>
      <form
        className="p-5 text-sm"
        onSubmit={(event) => void handleSubmitMessage(event)}
      >
        <Input
          className="focus:shadow-none focus:ring-0 focus:ring-offset-0"
          placeholder="Type your message here..."
          value={messageBody}
          onChange={(event) => setMessageBody(event.target.value)}
        />
      </form>
    </div>
  );
};

export default MessageInput;
