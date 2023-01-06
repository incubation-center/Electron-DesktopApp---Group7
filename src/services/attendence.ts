import { Attendance } from "@/types";
import { client } from "@/utils/http";

export const getAttendances = async () => {
  const res = await client.get("/attendances");
  if (res.status !== 200) throw new Error("Failed to fetch the Attendances");
  return res.data as Attendance;
}

export const getAttendance = async (id:string) => {
  const res = await client.get(`/attendance${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch the Attendance");
}

export const editAttendance = async (id:string) => {
  const res = await client.put(`/attendance/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit the Attendance");
}

export const createAttendance = async () => {
  const res = await client.post("/attendance");
  if (res.status !== 200) throw new Error("Failed to create the Attendance");
}

export const deleteAttendance = async () => {
  const res = await client.delete("/attendance");
  if (res.status!== 200) throw new Error("Failed to delete the Attendance");
}
