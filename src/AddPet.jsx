import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
const AddPet = () => {
  const [state, setState] = useState();
  const navigate = useNavigate();
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
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ data });
    const resp = await fetch("https://petstore.swagger.io/v2/pet", {
      method: "POST",
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

  return (
    <div className="addpet-wrapper">
      <form name="addpet" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="category">Category</label>
          <select
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
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </fieldset>
        {data.photoUrls.map((photo, i) => (
          <fieldset>
            <label>Photo URL {i + 1}</label>
            <input
              key={i}
              type={"text"}
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
            modifiedPhotoUrls.photoUrls.push([""]);
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
            onChange={(e) => updateField(0, e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="Address 2">Address 2</label>
          <input
            type="text"
            id="Address 2"
            placeholder="Address 2"
            onChange={(e) => updateField(1, e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="State">State</label>
          <select
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
          <select onChange={(e) => updateField(3, e.target.value)}>
            <option>Please Select</option>
            {state &&
              StateCity[state].map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
          </select>
        </fieldset>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddPet;
