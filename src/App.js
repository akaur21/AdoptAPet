import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayoutPage";
import HomePage from "./pages/HomePage";
import AddPetPage from "./pages/AddPetPage";
import EditPetPage from "./pages/editPetPage";
import PetDetailPage from "./pages/PetDetailPage";
import ErrorPage from "./pages/Error";

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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
