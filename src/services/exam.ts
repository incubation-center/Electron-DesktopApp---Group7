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
