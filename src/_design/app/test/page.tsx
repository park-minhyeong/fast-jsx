import { useState } from "react";
import { DashboardProvider, TextArea } from "../../..";

export default function TestPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>();
  return (
    <DashboardProvider.Layout
      header={{
        title: "hello world",
        option: {
          border: "border-2 border-red-500",
        },
      }}
      menu={{
        menus: [{ name: "asdf", link: "https://tosel.org" }],
      }}
    >
      <TextArea state={[username, setUsername]}
        option={{
          border: 'border-2 border-black',
          textColor: 'text-red-500',
          radius: 'rounded-lg',
          background: 'bg-red-500'

        }} />
    </DashboardProvider.Layout>
  );
}
