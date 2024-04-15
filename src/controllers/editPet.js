import { EDIT_PET } from "../consts/urlEndPoints";

export const editPet = async (body) => {
  const response = await fetch(EDIT_PET, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
