import { Subject } from "@/types";
import { client } from "@/utils/http";

export const getSubjects = async () => {
  const res = await client.get("/subjects");
  if (res.status !== 200) throw new Error("Failed to fetch the subjects");
  return res.data as Subject;
}

export const getSubject = async (id:string) => {
  const res = await client.get(`/subject${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch the subject");
}

export const editSubject = async (id:string) => {
  const res = await client.put(`/subject/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit the subject");
}

export const createSubject = async () => {
  const res = await client.post("/subject");
  if (res.status !== 200) throw new Error("Failed to create the subject");
}

export const deleteSubject = async () => {
  const res = await client.delete("/subject");
  if (res.status!== 200) throw new Error("Failed to delete the subject");
}
