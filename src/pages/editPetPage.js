import { useParams } from "react-router-dom";
import PetForm from "../components/PetForm";
import { useEffect, useState } from "react";
import { getPet } from "../controllers/getPet";

const EditPetPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pet, setPet] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      return getPet(id);
    };
    fetchPet()
      .then((data) => {
        setPet(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <PetForm id={id} pet={pet} isLoading={isLoading} />;
};

export default EditPetPage;
