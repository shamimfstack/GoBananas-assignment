import { Box, TextField } from "@mui/material";

export default function SearchField({ text, onSearch }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch"},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-search"
          label="Enter text to search"
          type="search"
          variant="standard"
          onChange={onSearch}
        />
      </Box>
    </div>
  );
}
