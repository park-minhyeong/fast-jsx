import { useEffect, useState } from "react";
import { DashboardProvider, Input, Select, TextArea } from "../../..";

export default function TestPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>();
  const [selects, setSelects] = useState<string[]>([]);

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
      <div className="flex">
        <div></div>
        <div className="flex flex-col w-full">
          <Input
            state={[username, setUsername]}
            select={{
              selectOptions: [
                { value: '12', title: 'asd1234f' },
                { value: '123', title: 'asd1234f' },
                { value: '1234', title: 'asd1234f' },
              ],
              onClick: (value) => setSelects([...selects, String(value)])
            }}
            option={{
              height: 'h-8',
              rightNode: <div className="w-12 h-12 bg-red-500" />
            }}
          />
          <div
            className="h-12"
          >{selects.join(', ') ?? 'none'}</div>
          <TextArea
            titles={{
              title: '프로젝트 설명'
            }}
            state={[username, setUsername]}
          />
        </div>
      </div>
    </DashboardProvider.Layout>
  );
}
