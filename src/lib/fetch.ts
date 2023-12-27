import { config } from "@/lib/config";

type Response<T> = {
  result: T;
  success: boolean;
  message?: string;
};

export async function fetcher<T>(
  url: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> {
  const res = await fetch(config.apiHost + url, init);
  const resJson = (await res.json()) as Response<T>;

  if (resJson.success) {
    return resJson.result;
  }

  throw resJson.message;
}
