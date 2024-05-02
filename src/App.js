import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayoutPage";
import HomePage from "./pages/HomePage";
import AddPetPage from "./pages/AddPetPage";
import EditPetPage from "./pages/editPetPage";
import PetDetailPage from "./pages/PetDetailPage";
import ErrorPage from "./pages/Error";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f48fb1',
    },
    secondary: {
      main: '#f50057',
    },
  },
  
});

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "add-pet",
        element: <AddPetPage />,
      },
      {
        path: "pet-detail/:id",
        element: <PetDetailPage />,
      },
      {
        path: "edit-pet/:id",
        element: <EditPetPage />,
      },{
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

function App() {

  return <ThemeProvider theme={theme}><RouterProvider router={router} /></ThemeProvider>;
}

export default App;
