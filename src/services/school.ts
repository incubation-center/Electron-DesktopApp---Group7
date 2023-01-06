import { School } from "@/types";
import { client } from "@/utils/http";

export const getSchools = async () => {
  const data = await client.get("/schools");
  return data.data as School[];
}

export const getSchool = async (id: string) => {
  const data = await client.get(`/school/${id}`);
  return data.data as School[];
}

export const createSchool = async (data: School) => {
  return await client.post("/school", data);
}

export const deleteSchool = async () => {
  return await client.delete("/school/");
}

export const editSchool = async (id:string) => {
  const data = await client.put(`/school/${id}`);
  return data.data as School[];
}
