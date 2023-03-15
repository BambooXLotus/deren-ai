import { PlusIcon } from "@heroicons/react/24/solid";

type NewChatProps = {
  id?: string;
};

const NewChat: React.FC<NewChatProps> = () => {
  return (
    <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 transition-all duration-200 ease-out hover:bg-gray-700/70">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
