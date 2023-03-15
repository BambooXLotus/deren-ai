import NewChat from "./NewChat";

type SidebarProps = {
  id?: string;
};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
