import { type ClassValue, clsx } from "clsx";
import path from "path";
import fs from "fs";
import { twMerge } from "tailwind-merge";
import { Data } from "@/types/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getData(): Data {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(file);
}
