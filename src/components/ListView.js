import { List } from "@mui/material";
import Pet from "./Pet";

const ListView = ({ pets, onDelete }) => {
  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {pets.map((pet, index) => (
        <Pet
          id={pet.id}
          key={index}
          name={pet.name}
          location={pet?.tags?.map((tag) => tag.name).join(", ")}
          onDelete={onDelete}
          image={pet.photoUrls}
        />
      ))}
    </List>
  );
};

export default ListView;
