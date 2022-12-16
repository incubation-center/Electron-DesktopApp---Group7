import { client } from "../utils/http";

export const createStudent = async (student) => {
  return client.post("/student", student);
};
