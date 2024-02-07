const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://65bd02f3b51f9b29e932bdb1.mockapi.io/pet`);
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch is not ok`);
  }
  return apiRes.json();
};

export default fetchPet;
