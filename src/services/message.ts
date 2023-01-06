import { Message } from "@/types";
import { client } from "@/utils/http";

export const getMessages = async () => {
  const res = await client.get("/messages");
  if (res.status !== 200) throw new Error("Failed to fetch the Messages");
  return res.data as Message;
}

export const getMessage = async (id:string) => {
  const res = await client.get(`/message${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch the Message");
}

export const editMessage = async (id:string) => {
  const res = await client.put(`/message/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit the Message");
}

export const createMessage = async () => {
  const res = await client.post("/message");
  if (res.status !== 200) throw new Error("Failed to create the Message");
}

export const deleteMessage = async () => {
  const res = await client.delete("/message");
  if (res.status!== 200) throw new Error("Failed to delete the Message");
}
