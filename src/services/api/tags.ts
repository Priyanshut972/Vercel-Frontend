import { Tag } from "@/types/types";
import axios from "axios";

export const getTagsAPI = async () => {
  const response = await axios.get<Tag[]>(`${import.meta.env.VITE_API_URL}/api/v1/tags');

  return response.data;
};
