import { SAVE_PET } from "../consts/urlEndPoints";

export const savePet = async (body) => {
  const response = await fetch(SAVE_PET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
