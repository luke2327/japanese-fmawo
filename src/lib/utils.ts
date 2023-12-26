import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDate(date: string, noFormattedDate: boolean = true) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("ko-kr", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} ${noFormattedDate ? `(${formattedDate})` : ""}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
