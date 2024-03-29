const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  //const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  const apiRes = await fetch(`https://petstore.swagger.io/v2/pet/${id}`)
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch is not ok`);
  }
  return apiRes.json();
};

export default fetchPet;
