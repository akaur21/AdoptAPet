import { Box, Paper, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import Pets from "./Pets";

// const pets = [
//   {
//     id: "1",
//     category: "Dog",
//     name: "Doggy",
//   },
//   {
//     id: "2",
//     category: "Dog",
//     name: "Doggy",
//   },
//   {
//     id: "3",
//     category: "Dog",
//     name: "Doggy",
//   },
// ];

const Results = ({ pets, isLoading, view, onDelete }) => {
  let content;
  if (!isLoading) {
    content = <Pets pets={pets} view={view} onDelete={onDelete} />;
  } else {
    content = <Typography as="h2">Loading...</Typography>;
  }

  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        boxShadow: view.tiles ? "none" : "",
      }}
    >
      {content}
    </Paper>
  );
};

export default Results;
