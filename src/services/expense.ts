import { Expense } from "@/types";
import { client } from "@/utils/http";
export const getAllExpense = async () => {
  const data = await client.get("/expenses?page=3&limit=10");

  return data.data as Expense[];
};
export const createExpense = async (data: Expense) => {
  const res = await client.post("/expense", data);
};
