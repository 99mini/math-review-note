import axios from "axios";

export type IndexDataType = string;

export const getIndex = async (): Promise<IndexDataType | null> => {
  try {
    const res = await axios.get("/api");
    const data = res.data.message;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
