import { Student } from "@/types";
import { client } from "../utils/http";

export const createStudent = async (student: Student) => {
  return await client.post("/student", student);
};

export const getStudents = async () => {
  const data = await client.get("/students");
  return data.data as Student[];
};
