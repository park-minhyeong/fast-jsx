import { useState } from "react";
import { Action, Button, Input, Modal, Shelf } from "../../..";
import Loading from "../../../ui/Loading";

export default function TestPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>();
  return (
    <Action.Show
      actions={[
        [
          true,
          <Modal
            key="signIn"
            titles={{
              title: "로그인",
            }}
            option={{
              height: "lg",
              className: "flex flex-col justify-between",
            }}
          >
            <Input state={[username, setUsername]} />
            <Input
              state={[password, setPassword]}
              type="password"
              onKeyDown={(e) => {}}
            />
            <Button
              title="asdf"
              onClick={() => {}}
              option={{
                height: "h-12",
              }}
            />
          </Modal>,
        ],
      ]}
    >
      <Loading.Spinner />
    </Action.Show>
  );
}
