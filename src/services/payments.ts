import { Payment } from "@/types";
import { client } from "@/utils/http";
export const getAllPayments = async () => {
  const data = await client.get("/payments");
  return data.data as Payment[];
};

export const createPayments = async (data: Payment) => {
  const res = await client.post("/payment", data);
};
