import { GET_PET } from "../consts/urlEndPoints";

export const getPet = async (id) => {
  const response = await fetch(GET_PET + id);
  const data = await response.json();
  if (data.type === "error") {
    throw new Error(data.message);
  }
  return data;
};
