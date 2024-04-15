import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { Box } from "@mui/material";

const RootLayoutPage = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <Box
        className="site-container"
        sx={{
          p: { xs: "30px" },
          paddingTop: "15px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayoutPage;
