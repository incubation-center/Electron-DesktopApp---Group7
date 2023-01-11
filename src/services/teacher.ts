import { Teacher } from "./../types/index.d";
import { client } from "@/utils/http";

export const getTeachers = async () => {
  const res = await client.get("/teachers");
  if (res.status !== 200) throw new Error("Failed to get teachers");
  return res.data as Teacher[];
};

export const getTeacherByid = async (id: number) => {
  const res = await client.get(`/teacher/${id}`);
  if (res.status !== 200) throw new Error("Failed to get teachers");
  return res.data as Teacher[];
};

export const deleteTeacherByid = async (id: number) => {
  const res = await client.delete(`/teacher/${id}`);
  return res.data as Teacher;
};

export const createTeacher = async (data: Teacher) => {
  const res = await client.post("/teacher", data);
  if (res.status !== 200) throw new Error("Failed to create this teacher");
};

export const updateTeacherByid = async (id: number, data: Teacher) => {
  const res = await client.put(`/teacher/${id}`, data);
  if (res.status !== 200) throw new Error("Failed to update this teacherId");
  return res.data as Teacher[];
};
