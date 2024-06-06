import { Box, Button, TextField } from "@mui/material";

export default function SearchField({ text, onSearch }) {
  console.log(text);
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
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
        {/* <Button variant="contained" color="success">
          Search
        </Button> */}
      </Box>
    </div>
  );
}
