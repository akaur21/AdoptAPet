async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  console.log({ location });
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
  // const res = await fetch(
  //  // `https://65bd02f3b51f9b29e932bdb1.mockapi.io/pet?${params.toString()}`
  //  `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  // );
  const res = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${city}, ${breed}`);
  }
  let resJson = await res.json();
  if(location) {
    resJson = resJson.filter(i => i.tags.find(j => j.name.startsWith(location)));
  }
  console.log({ resJson });
  return resJson;
}

export default fetchSearch;
