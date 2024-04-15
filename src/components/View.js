import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const View = ({ value, onChange }) => {
  return (
    <Box display="flex" justifyContent="flex-end" bgcolor="transparent">
      <FormControl>
        <InputLabel id="demo-simple-select-label">View</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value="list">List</MenuItem>
          <MenuItem value="tiles">Tiles</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default View;
