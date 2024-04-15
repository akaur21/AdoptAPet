import styled from "@emotion/styled";
import { Box, OutlinedInput, TextField } from "@mui/material";
import { forwardRef } from "react";

const CustomInput = forwardRef(
  ({ label, value, onChange, ...otherProps }, ref) => {
    const inputProps = {
      ...otherProps,
      sx: {
        fontSize: "16px",
        fontFamily: "var(--font-family)",
        "&::placeholder": {
          color: "#878787",
          opacity: "1",
        },
        backgroundColor: "rgba(255,255,255,0.5)",
      },
    };

    return (
      <TextField
        inputProps={inputProps}
        inputRef={ref}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    );
  }
);

export default CustomInput;
