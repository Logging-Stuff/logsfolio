"use server";

import path from "path";
import fs from "fs";
import { Data } from "@/types/data";

export async function getData(): Promise<Data> {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(file);
}
