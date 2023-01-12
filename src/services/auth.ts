import { AuthLogin, AuthRegister, User } from "@/types";
import { client } from "@/utils/http";
import { getUserProfile } from "./profile";

export const login = async ({ email, password }: AuthLogin) => {
  let res = await client.post("/login", { email, password });
  if (res.status === 200) {
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    await initProfile();
    location.href = "/";
  }
};

export const initProfile = async () => {
  const pf = await getUserProfile();
  localStorage.setItem("userInfo", JSON.stringify(pf));
};

export const register = async ({ email, password }: AuthRegister) => {
  const res = await client.post("/register", { email, password });
  if (res.status === 200) {
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    await initProfile();
    location.href = "/";
  }
};

export const logout = () => {
  console.log("logout...");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userInfo");
  window.location.href = "/login";
};
export const getProfile = async () => {
  return await client.get("/user/profile");
};

export const isAuth = () => {
  return !!localStorage.getItem("accessToken");
};

export const userInfo = () => {
  const pf = localStorage.getItem("userInfo");
  if (!pf) {
    return {} as User;
  }
  return JSON.parse(pf) as User;
};
