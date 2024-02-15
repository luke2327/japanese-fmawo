"use client";

import { BlogAuthentication } from "@/components/blog/authentication";
import { ReactNode, useState } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [loginState, setLoginState] = useState(false);
  return (
    <div className="font-raleway w-[36rem] flex justify-center mx-auto">
      {loginState ? (
        children
      ) : (
        <BlogAuthentication onChangeAuthentication={setLoginState} />
      )}
    </div>
  );
}
