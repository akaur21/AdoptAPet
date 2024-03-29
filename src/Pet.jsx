import { Link, useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons"
const Pet = ({ name, animal, images, location, id, deleteCalback, editCallback }) => {
  const navigate = useNavigate();
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images?.length) {
    hero = images[0];
  }
  return (
    <div className="pet-wrapper">
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h1>
          {animal} - {location}
        </h1>
      </div>
    </Link>
    <button className="edit-button" onClick={(e) => { e.stopPropagation(); navigate(`/edit-pet/${id}`)}}>
      <FontAwesomeIcon icon={faEdit} color="white" />
    </button>
      <button className="delete-button" onClick={(e) => { e.stopPropagation(); deleteCalback(id)}}>
      <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Pet;
