import { Teacher } from "./../types/index.d";
import { client } from "@/utils/http";

export const getTeachers = async () => {
  const res = await client.get("/teacher");
  if (res.status !== 200) throw new Error("Failed to get teachers");
  return res.data.teacher as Teacher[];
};
