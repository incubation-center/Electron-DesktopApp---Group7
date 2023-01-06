import { Result } from "@/types";
import { client } from "@/utils/http";

export const getResults = async () => {
  const res = await client.get("/results");
  if (res.status !== 200) throw new Error("Failed to fetch the Results");
  return res.data as Result;
}

export const getResult = async (id:string) => {
  const res = await client.get(`/result${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch the Result");
}

export const editResult = async (id:string) => {
  const res = await client.put(`/result/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit the Result");
}

export const createResult = async () => {
  const res = await client.post("/result");
  if (res.status !== 200) throw new Error("Failed to create the Result");
}

export const deleteResult = async () => {
  const res = await client.delete("/result");
  if (res.status!== 200) throw new Error("Failed to delete the Result");
}
