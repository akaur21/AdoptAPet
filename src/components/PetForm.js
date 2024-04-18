import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

import { StateCity } from "../StateCity";
import PetFormWrapper from "./PetFormWrapper";
import { width } from "@mui/system";
import "./PetForm.css";
import { savePet } from "../controllers/savePet";
import { useNavigate, useParams } from "react-router-dom";
import { getPet } from "../controllers/getPet";
import { editPet } from "../controllers/editPet";
import { GlobalContext } from "../pages/globalContext";

const states = [];
for (const state in StateCity) {
  states.push(state);
}
const animalMap = {
  Dog: 1,
  Cat: 2,
  Bird: 3,
};

const PetForm = ({ id, pet }) => {
  const { setShow, setMsg, setVariant } = useContext(GlobalContext);
  const [enteredNameInput, setEnteredNameInput] = useState(pet ? pet.name : "");
  const [enteredCategory, setEnteredCategory] = useState(
    pet ? pet.category.name : ""
  );
  const [enteredAddress1, setEnteredAddress1] = useState(
    pet ? pet.tags[0].name : ""
  );
  const [enteredAddress2, setEnteredAddress2] = useState(
    pet ? pet.tags[1].name : ""
  );
  const [enteredState, setEnteredState] = useState(pet ? pet.tags[2].name : "");
  const [enteredCity, setEnteredCity] = useState(pet ? pet.tags[3].name : "");
  const [photoUrls, setPhotoUrls] = useState(pet ? pet.photoUrls : []);

  const navigate = useNavigate();

  const handleCategorySelect = (val) => {
    setEnteredCategory(val);
  };

  const handleNameInput = (val) => {
    setEnteredNameInput(val);
  };

  const handleAddress = (number, val) => {
    if (number === 1) {
      setEnteredAddress1(val);
    } else {
      setEnteredAddress2(val);
    }
  };

  const handleLocation = (state, val) => {
    if (state) {
      setEnteredState(val);
    } else {
      setEnteredCity(val);
    }
  };

  const handlePhotoUrl = (index, val) => {
    const photo_urls = [...photoUrls];
    photo_urls[index] = val;
    setPhotoUrls(photo_urls);
  };

  const handlePhotoAdd = () => {
    const photo_urls = [...photoUrls];
    photo_urls.push("");
    setPhotoUrls(photo_urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let pet = {
      id: 0,
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
    };

    pet.id = id || Date.now();
    pet.category.name = enteredCategory;
    pet.category.id = animalMap[enteredCategory];
    pet.name = enteredNameInput;
    pet.tags[0].name = enteredAddress1;
    pet.tags[1].name = enteredAddress2;
    pet.tags[2].name = enteredState;
    pet.tags[3].name = enteredCity;

    const filteredPhotosUrl = photoUrls.filter((photo) => photo !== "");
    pet.photoUrls = filteredPhotosUrl;

    console.log(pet);

    if (id) {
      await editPet(pet);
      setVariant("success")
      setMsg("Pet Updated Successfully...")
      setShow(true);
    } else {
      await savePet(pet);
      setVariant("success")
      setMsg("Pet Added Successfully...")
      setShow(true);
    }

    navigate("/");
  };

  return (
    <Box position="relative">
      <Box
        width={{ xs: "100%", sm: "40%" }}
        position="absolute"
        left={{ sm: "60%", md: "50%" }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
          onSubmit={handleSubmit}
        >
          <CustomSelect
            label="Category"
            options={Object.keys(animalMap)}
            onChange={handleCategorySelect}
            value={enteredCategory}
          />
          <CustomInput
            name="name"
            type="text"
            placeholder="Name"
            label="Name"
            value={enteredNameInput}
            onChange={handleNameInput}
          />
          {photoUrls.map((photo, i) => (
            <CustomInput
              name={`Photo URL ${i + 1}`}
              type="text"
              placeholder="Add Photo Url"
              label={`Add Photo Url ${i + 1}`}
              value={photoUrls[i]}
              onChange={handlePhotoUrl.bind(null, i)}
              key={i}
            />
          ))}

          <Box display="flex" justifyContent="center">
            <CustomButton
              variant="primary"
              sx={{ width: "100%" }}
              onClick={handlePhotoAdd}
            >
              Add Photo Url
            </CustomButton>
          </Box>
          <CustomInput
            name="address1"
            type="text"
            placeholder="Address 1"
            label="Address 1"
            value={enteredAddress1}
            onChange={handleAddress.bind(null, 1)}
          />
          <CustomInput
            name="address2"
            type="text"
            placeholder="Address 2"
            label="Address 2"
            value={enteredAddress2}
            onChange={handleAddress.bind(null, 2)}
          />
          <CustomSelect
            label="State"
            options={states}
            value={enteredState}
            onChange={handleLocation.bind(null, true)}
          />
          <CustomSelect
            label="City"
            options={StateCity[enteredState] || []}
            value={enteredCity}
            onChange={handleLocation.bind(null, false)}
          />

          <Box>
            <CustomButton
              variant="primary"
              sx={{ width: "100%" }}
              type="submit"
            >
              {id ? "Edit" : "ADD"}
            </CustomButton>
          </Box>
        </form>
      </Box>
      <Box
        width="400px"
        height="100vh"
        position="fixed"
        left={0}
        top={0}
        className="image-container"
        display={{ xs: "none", sm: "block" }}
      >
        {/* <img
          src="https://images.unsplash.com/photo-1569339235754-14228772f415?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ maxHeight: "100%" }}
        /> */}
      </Box>
    </Box>
  );
};

export default PetForm;
