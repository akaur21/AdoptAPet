import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
//import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";
import { useNavigate } from "react-router-dom";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const navigate = useNavigate();
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  //const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [pets, setPets] = useState([]);
  //   const locationHook = useState("");
  //   const location = locationHook[0];
  //   const setLocation = locationHook[1];
  //   useEffect(() => {
  //     requestPets();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  //   async function requestPets() {
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //     );
  //     const json = await res.json();
  //     setPets(json.pets);
  //   }
  const { data, refetch } = useQuery(["search", requestParams], fetchSearch);
  //const pets = results ?? [];
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data && data.length) {
      console.log("inside Use effect");
      const reverseData = [...data].reverse();
      setPets(reverseData);
    }
  }, [data]);

  const handleDelete = async (id) => {
    const resp = await fetch("https://petstore.swagger.io/v2/pet/" + id, {
      method: "DELETE",
    });
    const content = await resp.json();
    console.log({ content });
    refetch();
  };

  return (
    <div className="search-params">
      <button className="btn-add-pet" onClick={() => navigate("/add-pet")}>
        Add Pet
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            //breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            name="location"
            type="text"
            id="location"
            placeholder="Location"
          />
        </label>
        {/*<label htmlFor="animal">
          Animal
          <select
            value={animal}
            name='animal'
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select name="breed" id="breed" disabled={breeds?.length === 0}>
            <option />
            {breeds?.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
            </label>*/}
        <button>Submit</button>
      </form>
      <Results pets={pets} handleDelete={handleDelete} />
    </div>
  );
};

export default SearchParams;
