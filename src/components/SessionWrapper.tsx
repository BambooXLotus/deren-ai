"use client";

import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Login from "./Login";

type SessionProviderProps = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionWrapper: React.FC<SessionProviderProps> = ({
  session,
  children,
}) => {
  if (!session) return <Login />;

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionWrapper;
