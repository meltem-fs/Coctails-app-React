import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Cocktail from "./Cocktail";
import { Grid } from "@mui/material";

const SearchForm = () => {

  const [search, setSearch] = useState("")
  const [coctail, setCoctail] = useState("")
  console.log(search);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;

  const getApi = async()=>{
    const {data} = await axios(url)
    console.log(data.drinks)
    setCoctail(data.drinks)
  }

  useEffect(() => {
   getApi()
  }, [search])
  

 return (
   <Grid>
     <Box
       sx={{
         width: 500,
         maxWidth: "100%",
         padding: "2rem",
         margin: "0 auto",
       }}
     >
       <TextField
         fullWidth
         label="search coctail"
         color="error"
         onChange={(e) => setSearch(e.target.value)}
         value={search}
         id="search"
       />
     </Box>
     <Cocktail coctail={coctail}/>
   </Grid>
 );
};

export default SearchForm;
