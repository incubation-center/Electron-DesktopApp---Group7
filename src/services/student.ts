import { StudentInput } from "./../types/index.d";
import { Student } from "@/types";
import { client } from "../utils/http";

export const createStudent = async (student: StudentInput) => {
  const res = await client.post("/student", student);
  return res.data as Student;
};

export const getStudents = async () => {
  const data = await client.get("/students");

  return data.data as Student[];
};

export const updateStudent = async (id: number, student: StudentInput) => {
  const res = await client.put(`/student/${id}`, student);
  return res.data as Student;
};

export const deleteStudent = async (id: number) => {
  const res = await client.delete(`/student/${id}`);
  return res.data as Student;
};
