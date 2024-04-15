import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  capitalize,
} from "@mui/material";
import { deletePet } from "../controllers/deletePet";
import { useNavigate } from "react-router-dom";

const Tile = ({ id, name, location, onDelete, image }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-pet/" + id);
  };

  const handleDelete = async (id) => {
    const res = await deletePet(id);
    onDelete();
  };

  const handleCardClick = () => {
    navigate(`/pet-detail/${id}`);
  };

  return (
    <Card sx={{ maxWidth: { xs: "100vw", sm: 345 } }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          sx={{ height: 140 }}
          image={image && image.length ? image[0] : "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name ? capitalize(name) : ""}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={handleEdit}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pen-to-square"
            className="svg-inline--fa fa-pen-to-square "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            color="#2196f3"
            style={{ height: "18px" }}
          >
            <path
              fill="currentColor"
              d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
            ></path>
          </svg>
        </Button>
        <Button size="small" onClick={handleDelete.bind(null, id)}>
          {" "}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash-can"
            className="svg-inline--fa fa-trash-can "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            color="#2196f3"
            style={{ height: "18px" }}
          >
            <path
              fill="currentColor"
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
            ></path>
          </svg>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tile;
