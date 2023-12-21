import { config } from "@/lib/config";

export async function fetcher<T = any>(
  url: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> {
  const res = await fetch(config.apiHost + url, init);
  const x = await res.json();

  return x.result;
}
