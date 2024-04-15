import { useEffect, useState } from "react";
import PetDetail from "../components/PetDetail";
import { getPet } from "../controllers/getPet";
import { useParams } from "react-router-dom";

const PetDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pet, setPet] = useState({});
  const [error, setError] = useState(null);

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
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    throw new Error(error.message);
  }

  const { name, tags, photoUrls } = pet;

  return (
    <PetDetail
      name={name}
      location={tags.map((tag) => tag.name).join(", ")}
      photos={photoUrls}
    />
  );
};

export default PetDetailPage;
