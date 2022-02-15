import { ROLES } from "variables";
import { getState } from "../redux";
import clientUtils from "./client-utils";

export const checkRole = (accessRoles, roles) => {
  const state = getState();
  const listRoles = state?.auth?.auth?.authorities || [];
  const isSuperAdmin = listRoles.includes(ROLES["SUPER_ADMIN"]);

  if (!accessRoles || accessRoles.length < 1 || isSuperAdmin) {
    return true;
  }
  return (
    accessRoles.map((rA) => listRoles.includes(rA)).filter((b) => !b).length < 1
  );
};

export const getImg = (avatar) => {
  return avatar
    ? `${clientUtils.serverApi}/files/${avatar}`
    : "https://cf.shopee.vn/file/f00ff3ca6680edb907b53d0fad7d22e8_tn";
};