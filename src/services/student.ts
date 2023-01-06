import { Student } from "@/types";
import { client } from "../utils/http";

export const createStudent = async (student: Student) => {
  return await client.post("/student", student);
};

export const getStudents = async () => {
  const data = await client.get("/students");
  console.log(data);
  return data.data as Student[];

};

export const getStudent = async (id:string) => {
  const data = await client.get(`/exam/${id}`);
  return data.data as Student[];
}

export const editStudent = async (id:string) => {
  const data = await client.put(`/student/${id}`);
  return data.data as Student[];
}

export const deleteStudent = async () => {
  return await client.delete("/student/");
}


