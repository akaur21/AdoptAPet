import styled from "@emotion/styled";
import { Card } from "@mui/material";

const Wrapper = ({ children, ...otherProps }) => {
  const CustomCard = styled(Card)(() => ({
    boxShadow: "0px 0px 12px #aaa",
    padding: "35px 15px 15px 15px",
    borderRadius: "6px",
    backgroundColor: "#faeff0",
  }));

  return <CustomCard {...otherProps}>{children}</CustomCard>;
};

export default Wrapper;
