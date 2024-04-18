import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { Box } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { GlobalContext } from "./globalContext";
import { useState } from "react";

const RootLayoutPage = ({ children }) => {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("success");


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShow(false);
  };
  return (
    <>
      <GlobalContext.Provider value={{ setMsg, setShow, setVariant }}>
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
        <Snackbar open={show} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert
            onClose={handleClose}
            severity={variant}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {msg}
          </Alert>
        </Snackbar>
      </GlobalContext.Provider>
    </>
  );
};

export default RootLayoutPage;
