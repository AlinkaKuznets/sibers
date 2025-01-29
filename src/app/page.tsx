import Chat from "./components/chat/Chat";
import List from "./components/list/List";

export default function Home() {
  return (
    <div className="wrapper">
      <List />
      <Chat />
    </div>
  );
}
