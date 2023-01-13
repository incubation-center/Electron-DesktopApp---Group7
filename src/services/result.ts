import { Result } from './../types/index.d';
import { client } from "@/utils/http";

export const getResults =async () => {
    const data = await client.get("/results");
    return data.data as Result
}