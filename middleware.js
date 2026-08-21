import { NextResponse } from "next/server";

const encodedLegacyRoutes = {
  "/blog/category/Pet+Stories/Community+Stories": "/blog/category/Pet+Stories%252FCommunity+Stories",
  "/blog/category/Pet+Stories%2FCommunity+Stories": "/blog/category/Pet+Stories%252FCommunity+Stories",
  "/blog/category/Pet+Behaviour+&+Training": "/blog/category/Pet+Behaviour+%2526+Training",
  "/blog/category/Pet+Behaviour+%26+Training": "/blog/category/Pet+Behaviour+%2526+Training",
  "/blog/tag/Tips+&+Tricks": "/blog/tag/Tips+%2526+Tricks",
  "/blog/tag/Tips+%26+Tricks": "/blog/tag/Tips+%2526+Tricks",
};

export function middleware(request) {
  const destination = encodedLegacyRoutes[request.nextUrl.pathname];
  return destination ? NextResponse.rewrite(new URL(destination, request.url)) : NextResponse.next();
}

export const config = { matcher: "/blog/:path*" };
