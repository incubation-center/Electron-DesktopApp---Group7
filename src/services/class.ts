import { Class } from "@/types";
import { client } from "@/utils/http";

export const getClasses = async () => {
  const res = await client.get("/classes");
  if (res.status !== 200) throw new Error("Failed to fetch the Class");
  return res.data as Class;
}

export const getClass = async (id:string) => {
  const res = await client.get(`/class${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch the Class");
}

export const editClass = async (id:string) => {
  const res = await client.put(`/class/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit the Class");
}

export const createClass = async () => {
  const res = await client.post("/class");
  if (res.status !== 200) throw new Error("Failed to create the Class");
}

export const deleteClass = async () => {
  const res = await client.delete("/class");
  if (res.status!== 200) throw new Error("Failed to delete the Class");
}
