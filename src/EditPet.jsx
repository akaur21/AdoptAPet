import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StateCity } from "./StateCity";

const states = [];
for (const state in StateCity) {
  states.push(state);
}

const animalMap = {
  1: "Dog",
  2: "Cat",
  3: "Bird",
};
const EditPet = () => {
  const [state, setState] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    id: Date.now(),
    category: {
      id: 0,
      name: "",
    },
    name: "",
    photoUrls: [],
    tags: [
      {
        id: 0,
        name: "",
      },
      {
        id: 1,
        name: "",
      },
      {
        id: 2,
        name: "",
      },
      {
        id: 3,
        name: "",
      },
    ],
    status: "available",
  });

  const updateField = (name, value) => {
    const modifiedData = { ...data };
    const findTagIndex = data.tags.findIndex((i) => i.id === name);
    modifiedData.tags[findTagIndex].name = value;
    setData(modifiedData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ data });
    const resp = await fetch("https://petstore.swagger.io/v2/pet", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const content = await resp.json();
    console.log({ content });
    e.target.reset();
    navigate("/");
  };
  const fetchPetById = async () => {
    const resp = await fetch(`https://petstore.swagger.io/v2/pet/${id}`);
    const jsonResp = await resp.json();
    console.log({ jsonResp });
    setData(jsonResp);
    setState(jsonResp.tags[2].name);
  };
  useEffect(() => {
    if (id) {
      fetchPetById(id);
    }
  }, [id]);
  return (
    <div className="addpet-wrapper">
      <form name="addpet" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="category">Category</label>
          <select
            value={data.category.id}
            onChange={(e) =>
              setData({
                ...data,
                category: {
                  id: e.target.value,
                  name: animalMap[e.target.value],
                },
              })
            }
          >
            <option>Please Select</option>
            <option value={1}>Dog</option>
            <option value={2}>Cat</option>
            <option value={3}>Bird</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </fieldset>
        {data.photoUrls.map((photo, i) => (
          <fieldset>
            <label>Photo URL {i + 1}</label>
            <input
              key={i}
              type={"text"}
              value={photo}
              onChange={(e) => {
                let modifiedPhotoUrls = { ...data };
                modifiedPhotoUrls.photoUrls[i] = e.target.value;
                setData(modifiedPhotoUrls);
              }}
            />
          </fieldset>
        ))}
        <button
          type="button"
          onClick={() => {
            let modifiedPhotoUrls = { ...data };
            modifiedPhotoUrls.photoUrls.push([]);
            setData(modifiedPhotoUrls);
          }}
        >
          Add Photo Url
        </button>
        <fieldset>
          <label htmlFor="Address 1">Address 1</label>
          <input
            type="text"
            id="Address 1"
            placeholder="Address 1"
            value={data.tags[0].name}
            onChange={(e) => updateField(0, e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="Address 2">Address 2</label>
          <input
            type="text"
            id="Address 2"
            placeholder="Address 2"
            value={data.tags[1].name}
            onChange={(e) => updateField(1, e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="State">State</label>
          <select
            value={data.tags[2].name}
            onChange={(e) => {
              setState(e.target.value);
              updateField(2, e.target.value);
            }}
          >
            <option>Please Select</option>
            {states.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="City">City</label>
          <select
            value={data.tags[3].name}
            onChange={(e) => updateField(3, e.target.value)}
          >
            <option>Please Select</option>
            {state &&
              StateCity[state].map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
          </select>
        </fieldset>
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditPet;
