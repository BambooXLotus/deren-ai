"use client";

import { api } from "~/utils/api";

type TrpcWrapperProps = {
  children: React.ReactNode;
};

const TrpcWrapper: React.FC<TrpcWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default api.withTRPC(TrpcWrapper);
