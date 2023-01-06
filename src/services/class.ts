import { Class } from "@/types";
import { client } from "@/utils/http";

export const getAllClasses = async () => {
  const res = await client.get("/classes");
  if (res.status !== 200) throw new Error("Failed to get classes");
  return res.data.classes as Class[];
};

export const getClasByid =async (id:number) => {
  const res = await client.get(`/class/${id}`)
  if(res.status !== 200) throw new Error("Failled to get this class Id");
  return res.data as Class[];
}

export const updateClassByid =async (id:number, data:Class) => {
  const res = await client.put(`/class/${id}`,data)
  if(res.status !== 200) throw new Error("Failed to update this classes");
  return res.data as Class[];
}

export const deleteClassByid =async (id:number) => {
  const res = await client.delete(`/class/${id}`)
  if(res.status !== 200) throw new Error("Failled to delete this course");
  return res.data as Class[];
}

export const createClass =async (data:Class) => {
  const res = await client.post("/class",data);
  if(res.status !== 200) throw new Error("Failed to create this subject!!!")
}