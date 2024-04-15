import { Grid } from "@mui/material";
import SearchByLocation from "./SearchByLocation";
import Results from "./Results";
import { useEffect, useState } from "react";
import { getPets } from "../controllers/getPets";
import View from "./View";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState({
    list: false,
    tiles: true,
  });
  const [viewValue, setViewValue] = useState("tiles");
  const [locationValue, setLocationValue] = useState("");
  const [refetch, setRefetch] = useState(null);

  const location = useLocation();
  const searchParam = location.search;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      return getPets();
    };
    if (refetch === false) {
      return;
    }
    fetchPets()
      .then((data) => {
        const reversedData = data.reverse();       
        setPets(reversedData.filter(i => i.id.toString().startsWith("171")));
        setRefetch(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setRefetch(false);
        setIsLoading(false);
      });
  }, [refetch]);

  useEffect(() => {
    if (!locationValue) {
      return;
    }
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        location: locationValue,
      }).toString(),
    });
  }, [locationValue]);

  useEffect(() => {
    const filteredPets = pets.filter((pet) => {
      return pet?.tags?.some((tag) => tag.name.toLowerCase() === locationValue);
    });
    setPets(filteredPets);
  }, [locationValue, searchParam]);

  const handleView = (value) => {
    if (value === "list") {
      setView({ list: true, tiles: false });
      setViewValue(value);
    } else {
      setView({ list: false, tiles: true });
      setViewValue(value);
    }
  };

  const handleGettingLocation = (location) => {
    setLocationValue(location.toLowerCase());
  };

  return (
    <Grid container spacing="25px">
      <Grid item xs={12} md={4}>
        <SearchByLocation onEnteredLocation={handleGettingLocation} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <View onChange={handleView} value={viewValue} />
          </Grid>
          <Grid item xs={12}>
            {pets.length > 0 ? <Results
              pets={pets}
              isLoading={isLoading}
              view={view}
              onDelete={() => setRefetch(true)}
            /> : <div>
              No records found, Try adding new records...
              </div>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
