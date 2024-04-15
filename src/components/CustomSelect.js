import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomSelect = ({ label, options, value, onChange }) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="item-select-label">{label}</InputLabel>
        <Select
          labelId="category-select-label"
          label={label}
          value={value}
          sx={{
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
