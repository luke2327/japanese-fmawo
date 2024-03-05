/**
 * Fetches data from the specified URL using the Fetch API.
 * @param url - The URL to fetch data from.
 * @param init - Optional request initialization options.
 * @returns A promise that resolves to the fetched data.
 * @throws If the fetch request is not successful, an error with the error message is thrown.
 */
import { config } from "@/lib/config";
import cookie from "react-cookies";

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
  const accessToken = cookie.load("accessToken");
  const headers: RequestInit["headers"] = {
    "Content-Type": "application/json",
    Authorization: accessToken ? "Bearer " + cookie.load("accessToken") : "",
  };

  const res = await fetch(config.apiHost + url, {
    ...init,
    headers: init?.headers ? { ...headers, ...init.headers } : headers,
  });
  const resJson = (await res.json()) as Response<T>;

  if (resJson.success) {
    console.log(resJson);
    return resJson.result;
  }

  throw resJson.message;
}
