import { Event } from "@/types";
import { client } from "@/utils/http";

export const getEvents = async () => {
  const res = await client.get("/events");
  if (res.status !== 200) throw new Error("Failed to fetch the Events");
  return res.data as Event;
}

export const getEvent = async (id:string) => {
  const res = await client.get(`/event${id}`);
  if (res.status !== 200) throw new Error("Failed to fetch the Event");
}

export const editEvent = async (id:string) => {
  const res = await client.put(`/event/${id}`);
  if (res.status !== 200) throw new Error("Failed to edit the Event");
}

export const createEvent = async () => {
  const res = await client.post("/event");
  if (res.status !== 200) throw new Error("Failed to create the Event");
}

export const deleteEvent = async () => {
  const res = await client.delete("/event");
  if (res.status!== 200) throw new Error("Failed to delete the Event");
}
