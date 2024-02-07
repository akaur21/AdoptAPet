const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];
  const apiRes = await fetch(
    `https://65bd02f3b51f9b29e932bdb1.mockapi.io/breed?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch is not ok`);
  }
  return apiRes.json();
};

export default fetchBreedList;
