import { fetcher } from "@/lib/fetch";

type sendVerificationMail = { email: string; password: string; name: string };
export async function sendVerificationMail(params: sendVerificationMail) {
  return await fetcher("/auth/send-verification-mail", {
    method: "post",
    body: JSON.stringify(params),
  });
}

export async function login(params: { email: string; password: string }) {
  return await fetcher("/auth/login", {
    method: "post",
    body: JSON.stringify(params),
  });
}
