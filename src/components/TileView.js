import { Box, Grid } from "@mui/material";
import Tile from "./Tile";

const TileView = ({ pets, onDelete }) => {
  console.log({ pets });
  return (
    <Grid container columnSpacing={1} rowSpacing={2}>
      {pets.map((pet, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Tile
            id={pet.id}
            key={index}
            name={pet.name}
            location={pet?.tags?.map((tag) => tag?.name).join(", ")}
            onDelete={onDelete}
            image={pet.photoUrls}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TileView;
