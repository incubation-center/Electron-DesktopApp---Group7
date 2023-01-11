import { Subject } from "@/types";
import { client } from "@/utils/http";

export const createSubject = async (data: Subject) => {
  const res = await client.post("/subject", data);
  if (res.status !== 200) throw new Error("Failed to create subject");
  return res.data as Subject;
};

export const updateSubject = async (id: number, data: Subject) => {
  const res = await client.put(`/subject/${id}`, data);
  if (res.status !== 200) throw new Error("Failed to update subject");
  return res.data as Subject;
};

export const getAllSubjects = async () => {
  const res = await client.get("/subjects");
  if (res.status !== 200) throw new Error("Failed to fetch all subjects");
  return res.data as Subject[];
};

export const getSubjectById = async (id: number) => {
  const res = await client.get(`/subject/${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch subject");
  return res.data as Subject;
};

export const deleteSubjectById = async (id: number) => {
  const res = await client.delete(`/subject/${id}`);
  if (res.status !== 200) throw new Error("Failed to delete subject");
  return res.data as Subject;
};
