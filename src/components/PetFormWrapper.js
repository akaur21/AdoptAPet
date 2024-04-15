import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import PetForm from "./PetForm";

const PetFormWrapper = ({ children }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: "40%", maxHeight: 520 }}
        image="https://images.unsplash.com/photo-1569339235754-14228772f415?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Live from space album cover"
      />
      <Box display="flex" flex={1} justifyContent="center">
        {children}
      </Box>
    </Card>
  );
};

export default PetFormWrapper;
