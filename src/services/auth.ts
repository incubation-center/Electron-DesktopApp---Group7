import { AuthLogin, AuthRegister } from "@/types";
import { client } from "@/utils/http";

export const login = async ({ email, password }: AuthLogin) => {
  let res = await client.post("/login", { email, password });
  if (res.status === 200) {
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    location.href = "/";
  }
};

export const register = async ({ email, password }: AuthRegister) => {
  const res = await client.post("/register", { email, password });
  if (res.status === 200) {
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    location.href = "/";
  }
};

export const logout = () => {
  console.log("logout...");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};
export const getProfile = async () => {
  return await client.get("/user/profile");
};

export const isAuth = () => {
  return !!localStorage.getItem("accessToken");
};

export const userInfo = () => {
  return {};
};
