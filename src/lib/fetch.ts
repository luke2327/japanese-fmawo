/**
 * Fetches data from the specified URL using the Fetch API.
 * @param url - The URL to fetch data from.
 * @param init - Optional request initialization options.
 * @returns A promise that resolves to the fetched data.
 * @throws If the fetch request is not successful, an error with the error message is thrown.
 */
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
  console.log("\x1b[36mfetcher\x1b[0m", config.apiHost + url);
  const res = await fetch(config.apiHost + url, init);
  const resJson = (await res.json()) as Response<T>;

  if (resJson.success) {
    return resJson.result;
  }

  throw resJson.message;
}
