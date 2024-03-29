async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  //const params = new URLSearchParams();
  // if(animal) {
  //   params.append("animal", animal);
  // }
  // if(city) {
  //   params.append("city", city);
  // }
  // if(breed) {
  //   params.append("breed", breed);
  // }
  // console.log(params.toString());
  const res = await fetch(
   // `https://65bd02f3b51f9b29e932bdb1.mockapi.io/pet?${params.toString()}`
   `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${city}, ${breed}`);
  }
  return res.json();
}

export default fetchSearch;
