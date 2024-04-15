import { Link as ReactLink } from "react-router-dom";
import { Button, Link, styled } from "@mui/material";

const CustomButton = ({ children, variant, as, href, ...otherProps }) => {
  const PrimaryButton = styled(Button)(() => ({
    backgroundColor: "#ad343e",
    padding: "5px 25px",
    color: "white",
    fontSize: "18px",
    fontWeight: "400",
    border: "#333 1px solid",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "none",
    height: "40px",
    fontFamily: "inherit",
    "&:hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
  }));

  const SecondaryButton = styled(Button)(() => ({
    width: "100%",
    backgroundColor: "#2cd202",
    padding: "5px 10px",
    border: "1px solid #135702",
    borderRadius: "5px",
    color: "#333",
  }));

  const PrimaryLink = styled(Link)(() => ({
    backgroundColor: "#ad343e",
    padding: "5px 25px",
    fontSize: "18px",
    fontWeight: "400",
    border: "#333 1px solid",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "none",
    textDecoration: "none",
    fontFamily: "inherit",
    "&:hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
    "&:hover > a > svg": {
      color: "white",
    },
  }));

  // const LightButtonLink = styled(Link)(() => ({
  //   backgroundColor: "transparent",
  //   fontSize: "18px",
  //   fontWeight: "400",
  //   border: 0,
  //   borderRadius: "5px",
  //   cursor: "pointer",
  //   textTransform: "none",
  //   height: "40px",
  //   fontFamily: "inherit",
  // }));

  const LightButton = styled(Button)(() => ({
    backgroundColor: "transparent",
    fontSize: "18px",
    fontWeight: "400",
    border: 0,
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "none",
    height: "40px",
    fontFamily: "inherit",
  }));

  if (variant === "primary") {
    if (as === "a") {
      return (
        <PrimaryLink component="span" {...otherProps}>
          <ReactLink
            style={{ color: "white", textDecoration: "none" }}
            to={href}
          >
            {children}
          </ReactLink>
        </PrimaryLink>
      );
    }
    return <PrimaryButton {...otherProps}>{children}</PrimaryButton>;
  } else if (variant === "light") {
    if (as === "a") {
      return (
        <LightButton component="span" {...otherProps}>
          <ReactLink style={{ textDecoration: "none" }} to={href}>
            {children}
          </ReactLink>
        </LightButton>
      );
    } else {
      return <LightButton {...otherProps}>{children}</LightButton>;
    }
  } else {
    return <SecondaryButton {...otherProps}>{children}</SecondaryButton>;
  }
};

export default CustomButton;
