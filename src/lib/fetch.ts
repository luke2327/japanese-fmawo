import { config } from "@/lib/config";

export async function fetcher<T = any>(
  url: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> {
  const res = await fetch(config.apiHost + url, init);
  console.log(res.status);
  const x = await res.json();

  console.log(22, x.result);

  return x.result;
}
