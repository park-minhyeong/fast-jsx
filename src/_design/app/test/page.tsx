import { useState } from "react";
import { DashboardProvider, Input } from "../../..";

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
      <Input state={[username, setUsername]}
        option={{
          border: '',
          textColor: 'text-red-500'
        }} />
    </DashboardProvider.Layout>
  );
}
