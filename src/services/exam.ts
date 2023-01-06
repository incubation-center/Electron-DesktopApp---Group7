import { Exam } from "@/types";
import { client } from "@/utils/http";

export const getExam = async (id: string) => {
  const res = await client.get(`/exam/${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch exams");
  return res.data as Exam;
};

export const getExams = async () => {
  const res = await client.get("/exams");
  if (res.status !== 200) throw new Error("Failed to fetch exams");
  return res.data as Exam[];
};

export const editExam = async (id: string) => {
  const res = await client.put(`/exam/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit exams");
  return res.data as Exam[];
}

export const createExam = async (id:string) => {
  const res = await client.post(`/exam/${id}`);
  if (res.status!== 200) throw new Error("Failed to create exams");
  return res.data as Exam[];
}

export const delExam = async () => {
  const res = await client.delete("/exam");
  if (res.status!== 200) throw new Error("Failed to delete exams");
  return res.data as Exam[];
}
