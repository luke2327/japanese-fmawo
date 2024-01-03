import { LoginAccount } from "@/components/login-account";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description:
    "회원가입하여 세계각국의 사람들과 교류해봐요 | 会員登録して世界各国の人々と交流してみましょう | Join the Member and interact with people from all over the world",
  openGraph: {
    title: "Sign Up",
    description:
      "회원가입하여 세계각국의 사람들과 교류해봐요 | 会員登録して世界各国の人々と交流してみましょう | Join the Member and interact with people from all over the world",
  },
};

function SignupPage() {
  return (
    <Card className="max-w-md w-full mx-4">
      <CardHeader>
        <CardTitle className="text-black dark:text-white">Login</CardTitle>
      </CardHeader>
      <LoginAccount />
    </Card>
  );
}

export default SignupPage;
