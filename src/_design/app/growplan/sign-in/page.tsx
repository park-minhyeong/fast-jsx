import { useState } from "react";
import { Shelf } from "../../../../layout";
import { Button, Input } from "../../../../widget";
import { useNavigate } from "react-router-dom";
import { useActionStore } from "../../../../store";
import { Modal } from "../../../../ui";

export default function SignInPage() {
  const router = useNavigate();
  const { setModal } = useActionStore();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const buttonStyle = {
    width: "w-full",
    height: "h-12",
  };
  const signIn = () => {
    if (username === "admin" && password === "asdfasdf") {
      return router("/growplan/dashboard");
    }
    return setModal("fail");
  };

  return (
    <Shelf.Center
      action={{
        shows: [
          [
            "fail",
            <Modal
              titles={{
                title: "로그인 실패",
                subtitle: "아이디와 비밀번호를 확인해주세요",
              }}
            >
              <div>WRONG PASSWORD</div>
            </Modal>,
          ],
        ],
      }}
      option={{
        height: "h-screen min-h-screen",
      }}
    >
      <Shelf.Col
        option={{
          width: "w-1/2",
          height: "h-120 ",
          boundary: "p-3.5 border-2 border-blue-500",
          display: "gap-y-3.5 items-center",
        }}
      >
        <img
          onClick={() => router("/growplan")}
          src="/images/growplan/logo.png"
          width={200}
        />
        <Input titles={{ title: "아이디" }} state={[username, setUsername]} />
        <Input
          titles={{ title: "비밀번호" }}
          type="password"
          state={[password, setPassword]}
          onKeyDown={(e) => e.key === "Enter" && signIn()}
        />
        <Button
          name="로그인"
          onClick={() => signIn()}
          option={{ ...buttonStyle, pressure: "mt-auto" }}
        />
        <Button
          name="회원가입"
          onClick={() => router("/growplan/sign-up")}
          option={buttonStyle}
        />
      </Shelf.Col>
    </Shelf.Center>
  );
}
