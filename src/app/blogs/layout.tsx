import { NextRequest } from "next/server";

export default function BlogLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: NextRequest;
}>) {
  return <div className="container max-w-5xl blog-post">{children}</div>;
}
