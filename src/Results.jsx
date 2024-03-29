import Pet from "./Pet";
const Results = ({ pets, handleDelete }) => {
  
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            images={pet.photoUrls}
            location={pet.tags.map(i => i.name).join(", ")}
            key={pet.id}
            deleteCalback={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Results;
