import { GetServerSidePropsContext } from "next";
import { Guild } from "./types";

export const validateCookies = (ctx: GetServerSidePropsContext) => {
  const sessionID = ctx.req.cookies["connect.sid"];
  return sessionID
    ? {
        Cookie: `connect.sid=${sessionID}`,
      }
    : false;
};
