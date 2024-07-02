"use server";

import path from "path";
import fs from "fs";
import { Data } from "@/types/data";
import { BlogMetadata } from "@/types/blog";

function isBlogHeaderData(data: any): data is BlogMetadata {
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.isPublished === "boolean" &&
    typeof data.slug === "string" &&
    typeof data.publishDate === "string" // or Date if you use Date
  );
}

export async function getJSONData(): Promise<Data> {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(file);
}

export async function getBlogPosts(): Promise<BlogMetadata[]> {
  const contentDirPath = path.join(process.cwd(), "src/app/blogs");
  const postDirs = fs
    .readdirSync(contentDirPath, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  const blogs = await Promise.all(
    postDirs.map(async (postDir) => {
      console.log(`@/app/blogs/${postDir}/page.tsx`);
      const { metadata } = await import(`@/app/blogs/${postDir}/page.mdx`);

      if (isBlogHeaderData(metadata)) {
        return metadata;
      }

      throw new Error("Blog data missing!");
    })
  );

  return blogs;
}
