import { useState } from "react";
import { DashboardProvider } from "../../..";

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
      <div>hello World</div>
    </DashboardProvider.Layout>
  );
}
