import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function formatDate(date: string, noFormattedDate: boolean = true) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = date.replace(" ", "T");
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

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} ${noFormattedDate ? `(${formattedDate})` : ""}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function blockingSprite(slug: string) {
  if (slug === "sprite.svg") {
    throw "sprite.svg is blocked";
  }
}

const ACCEPTED_IMAGE_TYPES = [".jpg", ".jpeg", ".png"];

export const assetForm = z.object({
  file: z
    .custom<FileList>()
    .refine((fileList) => fileList.length === 1, "Expected file")
    .transform((file) => file[0] as File)
    .refine((file) => {
      return file.size <= 10;
    }, `File size should be less than 1gb.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only these types are allowed .jpg, .jpeg, .png, .webp and mp4"
    ),
});

export const getUUID = () => {
  return "xxx-xxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
};
