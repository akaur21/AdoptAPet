import { Box, Fab, Grid } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Add } from "@mui/icons-material";

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
    // <header className="site-container" style={{ paddingTop: 20 }}>
    //   <nav>
    //     <Grid container>
    //       <Grid item xs={location.pathname === "/add-pet" ? 5 : 4}>
    //         <Box></Box>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Link to="/">
    //           <img src="/images/logo.png" />
    //         </Link>
    //       </Grid>
    //       <Grid
    //         item
    //         xs={3}
    //         display="flex"
    //         justifyContent="flex-end"
    //         alignItems="center"
    //         gap="10px"
    //       >
    //         {homeButton}
    //         {addPetButton}
    //       </Grid>
    //     </Grid>
    //   </nav>
    // </header>
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
                <img src="/images/logo.png" />{" "}
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
          {/* <Box width="33.33%"></Box>

            <Box display="flex" justifyContent="center" width="33%.33">
              <Link to="/">
                <img src="/images/logo.png" />{" "}
              </Link>
            </Box> */}
          {/* <Box sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#ad343e" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
              width="33.33%"
            >
              {homeButton}
            </Box>
          </Toolbar> */}
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
