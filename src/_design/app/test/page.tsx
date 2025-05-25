import { useState } from "react";
import { DashboardProvider, Input, Select, TextArea } from "../../..";

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
      <Input
        state={[username, setUsername]}
        option={{
          border: '',
          font: 'text-[64px]'
        }}
      />
      {/* <Select.Toggle
        titles={{
          title: username
        }}
        state={[username, setUsername]}
        selectOptions={[{
          value: "a",
          title: "a",
        }, {
          value: "b",
          title: "b",
        }]}
      /> */}
    </DashboardProvider.Layout>
  );
}
