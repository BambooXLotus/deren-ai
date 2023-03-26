import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "~/utils/api";
import { Button } from "./ui/Button";

type NewChatProps = {
  id?: string;
};

const NewChat: React.FC<NewChatProps> = () => {
  const router = useRouter();

  const { mutateAsync: createChat } = api.chat.create.useMutation();

  async function handleCreateChat() {
    await createChat(
      {
        title: "WONK",
      },
      {
        onSuccess: ({ id: chatId }) => {
          router.push(`/chat/${chatId}`);
        },
      }
    );
  }

  return (
    <Button variant="outline" onClick={() => void handleCreateChat()}>
      <Plus className="h-4 w-4" />
      <p>New Chat</p>
    </Button>
  );
};

export default NewChat;
