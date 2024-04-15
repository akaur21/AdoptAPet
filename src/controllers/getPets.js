import { GET_PETS } from "../consts/urlEndPoints";

export const getPets = async () => {
  const response = await fetch(GET_PETS);

  if (!response.ok) {
    throw new Error("Could not fetch pets.");
  }
  return response.json();
};
