import { useState } from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SignUp from "./SignUp";
import AddPet from "./AddPet";
import EditPet from "./EditPet";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      cacheTime: 5000,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header
              className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500
               to-red-500 p-7 text-center
             "
            >
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
              <Route path="/add-pet" element={<AddPet />} />
              <Route path="/edit-pet/:id" element={<EditPet />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </HashRouter>
    </div>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
