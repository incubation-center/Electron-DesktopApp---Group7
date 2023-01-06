import { Teacher } from "@/types";
import { client } from "@/utils/http";

export const getTeachers = async () => {
  const data = await client.get("/teachers");
  return data.data as Teacher[];
}

export const getTeacher = async (id:string) => {
  const data = await client.get(`/teacher/${id}`);
  return data.data as Teacher[];
}

export const editTeacher = async (id:string) => {
  const data = await client.put(`/teacher/${id}`);
  return data.data as Teacher[];
}

export const createTeacher = async (data: Teacher) => {
  return await client.post("/teacher/", data);
}

export const deleteTeacher = async () => {
  const data = await client.delete("/teacher");
  return data.data as Teacher[];
}
