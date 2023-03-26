"use client";

import { Fan } from "lucide-react";
import { signIn } from "next-auth/react";

type LoginProps = {
  id?: string;
};

async function handleSignIn() {
  await signIn();
}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-teal-400 text-white">
      <Fan className="h-80 w-80 text-white" strokeWidth={0.5} />
      <button
        className="font-bol animate-pulse text-3xl"
        onClick={() => void handleSignIn()}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
