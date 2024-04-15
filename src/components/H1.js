import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const H1 = ({ children }) => {
  return (
    <Typography
      sx={{
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontWeight: 400,
        fontSize: "30px",
        width: "200px",
        color: "#333",
      }}
      variant="h1"
    >
      {children}
    </Typography>
  );
};

export default H1;
