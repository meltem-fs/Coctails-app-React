import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchForm = () => {
 return (
   <Box
     sx={{
       width: 500,
       maxWidth: "100%",
       padding:"2rem",
       margin:"0 auto"
     }}
   >
     <TextField fullWidth label="search coctail" id="fullWidth" color="error"/>
   </Box>
 );
};

export default SearchForm;
