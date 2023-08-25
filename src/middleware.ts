import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "./utils/api";

const validateMiddlewareCookies = (req: NextRequest) => {
  const sessionID = req.cookies["connect.sid"];
  console.log(req.cookies);
  return sessionID
    ? {
        Cookie: `connect.sid=${sessionID}`,
      }
    : false;
};

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // if (/^[0-9]*$/.test(req.nextUrl.pathname.split("/")[3])) {
  console.log("Middleware Function");
  console.log(req.cookies); // returnes a cookie
  validateMiddlewareCookies(req); // returns false
}
