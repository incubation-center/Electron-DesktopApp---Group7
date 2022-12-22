import { client } from "../utils/http";

export const createStudent = async (student) => {
  return await client.post("/student", student);
};

export const getStudents = async () => {
  return await client.get("/student");
};
