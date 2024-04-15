import { DELETE_PET } from "../consts/urlEndPoints";

export const deletePet = async (id) => {
  const response = await fetch(DELETE_PET + id, {
    method: "DELETE",
  });
  return response.json();
};
