import ListView from "./ListView";
import TileView from "./TileView";

const Pets = ({ pets, view, onDelete }) => {
  if (view.list) {
    return <ListView pets={pets} onDelete={onDelete} />;
  } else {
    return <TileView pets={pets} onDelete={onDelete} />;
  }
};

export default Pets;
