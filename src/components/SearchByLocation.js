import { Box, Paper } from "@mui/material";
import CustomButton from "./CustomButton";

import "./SearchByLocation.css";
import Wrapper from "./Wrapper";
import CustomInput from "./CustomInput";
import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

const SearchByLocation = ({ onEnteredLocation }) => {
  const [enteredLocation, setEnteredLocation] = useState("");

  const handleLocation = (val) => {
    setEnteredLocation(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnteredLocation(enteredLocation);
  };

  return (
    // <Wrapper
    //   sx={{
    //     width: {
    //       sm: "350px",
    //       md: "auto",
    //     },
    //   }}
    <Paper
      sx={{
        width: {
          sm: "350px",
          md: "auto",
          padding: "8px 16px",
          boxShadow: "0px 0px 12px 8px #faeff0",
        },
      }}
    >
      <Box>
        <form className="search-by-location" onSubmit={handleSubmit}>
          <CustomInput
            label="Location"
            type="text"
            name="location"
            value={enteredLocation}
            onChange={handleLocation}
          />
          <Box display="flex" justifyContent="center">
            <CustomButton variant="primary" type="submit">
              Submit
            </CustomButton>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default SearchByLocation;
