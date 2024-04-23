import { Box, Fab, Grid } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Add } from "@mui/icons-material";
import Logo from "../logo.png";

const MainNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let addPetButton = (
    <CustomButton as="a" href="/add-pet" variant="primary">
      Add Pet
    </CustomButton>
  );

  let homeButton = (
    <CustomButton as="a" href="/" variant="primary">
      Home
    </CustomButton>
  );

  if (
    location.pathname === "/add-pet" ||
    location.pathname.startsWith("/edit-pet")
  ) {
    addPetButton = null;
  }

  if (location.pathname === "/") {
    homeButton = null;
  }

  return (
    
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "rgba(0,0,0,0.2)", backdropFilter: "blur(8px)" }}
      >
        <Container maxWidth="xl" className="site-container">
          <Grid container>
            <Grid item sm={4}></Grid>
            <Grid item xs={6} sm={4}>
              <Link to="/">
                <img src={Logo} />{" "}
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              alignItems="center"
              justifyContent="flex-end"
              display="flex"
            >
              {homeButton}
            </Grid>
          </Grid>
          
        </Container>
        {location.pathname !== "/add-pet" && (
          <Box>
            <Fab
              color="primary"
              aria-label="add"
              sx={{
                position: "fixed",
                top: "90vh",
                backgroundColor: "#ad343e",
                "&:hover": { backgroundColor: "#ad343e" },
                left: "10px",
              }}
              onClick={() => navigate("/add-pet")}
            >
              <Add />
            </Fab>
          </Box>
        )}
      </AppBar>
    </>
  );
};

export default MainNavigation;
