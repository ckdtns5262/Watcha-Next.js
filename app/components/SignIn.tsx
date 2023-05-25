"use client";

import { useCallback, useState } from "react";
import Input from "./input";
import { FcGoogle } from "react-icons/fc";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import Image from "next/image";
import Register from "./Register";

const SignIn = () => {
  type Variant = "LOGIN" | "REGISTER";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState<Variant>("LOGIN");

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  return (
    <>
      <nav className="px-12 py-5 flex justify-between">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg=="
          width={100}
          height={100}
          alt="LOGO"
        />
        <button
          onClick={toggleVariant}
          className="bg-white rounded-full px-3 py-1 font-semibold text-sm"
        >
          {variant === "LOGIN" ? "회원가입" : "로그인"}
        </button>
      </nav>
      <div className="flex justify-center mt-16">
        <div className=" py-16 self-center gap-24">
          <div className="flex gap-24">
            <h2 className="text-white text-xl font-semibold">
              {variant === "LOGIN" ? "로그인" : "회원가입"}
            </h2>
            <p className="text-xs mt-1 text-[#575a5f] hover:underline cursor-pointer">
              {variant === "LOGIN" ? "비밀번호를 잊어버리셨나요?" : ""}
            </p>
          </div>
          <div className="flex flex-col mt-3">
            {variant === "REGISTER" ? (
              <Input
                id="name"
                placeholder="이름 (2자 이상)"
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            ) : (
              ""
            )}
            <Input
              id="email"
              placeholder="이메일 (example@gmail.com)"
              type="email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <Input
              id="password"
              placeholder={`${
                variant === "LOGIN"
                  ? "비밀번호"
                  : "영문, 숫자, 특문 중 2개 조합 10자 이상"
              }`}
              type="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              value={password}
            />

            {variant === "LOGIN" ? (
              <button className="bg-[#F82F62] rounded-full mt-4 py-2 text-white">
                로그인
              </button>
            ) : (
              ""
            )}
          </div>
          {variant === "LOGIN" ? (
            <>
              <hr className="mt-8 opacity-25"></hr>
              <div className="mt-4">
                <h2 className="text-[#575a5f] text-xs">
                  다른 방법으로 로그인하기
                </h2>
              </div>
              <div className="flex flex-row items-center gap-6 mt-4 justify-center">
                <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <RiKakaoTalkLine size={25} fill="black" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FcGoogle size={25} />
                </div>
                <div className="w-10 h-10 bg-[#00a2fa] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <TfiTwitterAlt size={25} fill="white" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FaApple size={25} />
                </div>
                <div className="w-10 h-10 bg-[#00c801] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <Image
                    src={
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiMwMEM4MDEiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOS42MTQgMTUuNDY4Yy0yLjAzMiAyLjM0LTYuNTggNS4xOS03LjYxNCA1LjYyNS0xLjAzNC40MzUtLjg4Mi0uMjc4LS44NC0uNTIyLjAyNi0uMTQ2LjEzOS0uODMuMTM5LS44My4wMzMtLjI0Ny4wNjYtLjYzMS0uMDMyLS44NzYtLjEwOC0uMjctLjUzOC0uNDEtLjg1My0uNDc4LTQuNjU4LS42MTUtOC4xMDYtMy44Ny04LjEwNi03Ljc1NiAwLTQuMzM1IDQuMzQ4LTcuODYyIDkuNjkyLTcuODYyczkuNjkyIDMuNTI3IDkuNjkyIDcuODYyYzAgMS43MzUtLjY3MyAzLjI5Ny0yLjA3OCA0LjgzN3pNOC4yMDYgMTIuMTk0SDYuNzg4VjguODUyYzAtLjI4LS4yMjgtLjUwOC0uNTA4LS41MDhzLS41MDguMjI4LS41MDguNTA4djMuODVjMCAuMjguMjI4LjUwOC41MDguNTA4aDEuOTI2Yy4yOCAwIC41MDgtLjIyOC41MDgtLjUwOHMtLjIyNy0uNTA4LS41MDgtLjUwOHptMS45OTItMy4zNDJjMC0uMjgtLjIyOC0uNTA4LS41MDgtLjUwOHMtLjUwOC4yMjgtLjUwOC41MDh2My44NWMwIC4yOC4yMjguNTA4LjUwOC41MDhzLjUwOC0uMjI4LjUwOC0uNTA4di0zLjg1em00LjYzNiAwYzAtLjI4LS4yMjgtLjUwOC0uNTA4LS41MDhzLS41MDkuMjI4LS41MDkuNTA4djIuMzgybC0xLjk3NC0yLjY4N2MtLjA5NS0uMTI3LS4yNDctLjIwMy0uNDA2LS4yMDMtLjA1NCAwLS4xMDkuMDA5LS4xNjEuMDI2LS4yMDguMDctLjM0Ny4yNjMtLjM0Ny40ODJ2My44NWMwIC4yOC4yMjguNTA4LjUwOC41MDhzLjUwOC0uMjI4LjUwOC0uNTA4VjEwLjMybDEuOTc0IDIuNjg3Yy4wOTYuMTI3LjI0Ny4yMDMuNDA2LjIwMy4wNTUgMCAuMTA5LS4wMDkuMTYxLS4wMjYuMjA4LS4wNy4zNDgtLjI2My4zNDgtLjQ4MnYtMy44NXptMy4xMTYgMi40MzNjLjI4IDAgLjUwOC0uMjI4LjUwOC0uNTA4cy0uMjI4LS41MDgtLjUwOC0uNTA4aC0xLjQxN1Y5LjM2aDEuNDE3Yy4yOCAwIC41MDgtLjIyOC41MDgtLjUwOHMtLjIyOC0uNTA4LS41MDgtLjUwOGgtMS45MjZjLS4yOCAwLS41MDguMjI4LS41MDguNTA4VjEyLjcwMmMwIC4yOC4yMjguNTA4LjUwOC41MDhoMS45MjZjLjI4IDAgLjUwOC0uMjI4LjUwOC0uNTA4cy0uMjI4LS41MDgtLjUwOC0uNTA4aC0xLjQxN3YtLjkxaDEuNDE3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    }
                    width={60}
                    height={60}
                    alt="LineLogo"
                  />
                </div>
              </div>
            </>
          ) : (
            <Register />
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
