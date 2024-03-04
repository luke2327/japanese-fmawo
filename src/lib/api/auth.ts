import { fetcher } from "@/lib/fetch";
import cookie from "react-cookies";

type sendVerificationMail = { email: string; password: string; name: string };
export async function sendVerificationMail(params: sendVerificationMail) {
  return await fetcher("/auth/send-verification-mail", {
    method: "post",
    body: JSON.stringify(params),
  });
}

export async function login(params: {
  email: string;
  password: string;
}): Promise<{
  accessToken: string;
  refreshToken: string;
}> {
  return await fetcher("/auth/login", {
    method: "post",
    body: JSON.stringify(params),
  });
}

export async function removeCookies() {
  cookie.remove("accessToken", { path: "/" });
  cookie.remove("refreshToken", { path: "/" });
}
