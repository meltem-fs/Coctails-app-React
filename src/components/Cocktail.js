import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const Cocktail = ({ coctail }) => {
  // console.log(coctail);

  const navigate =  useNavigate()

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap:"wrap",
        gap:"3rem",
        justifyContent: "center",
        margin:"2rem",
        borderRadius:"22px"
      }}
    >
      {coctail &&
        coctail.map((item) => {
          return (
            <Grid>
              <Card sx={{ width: 300,
              height:365,
              display: "flex",
              flexDirection:"column",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
              }}>
                <CardActionArea>
                  <CardMedia
                  sx={{
                    padding:"0.1rem",
                    borderRadius:"5px"
                  }}
                    component="img"
                    height="180"
                    image={item.strDrinkThumb}
                    alt="coctail"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.strDrink}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.strGlass}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      {item.strAlcoholic}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={()=> navigate("/detail",item={item})} size="large"  color="primary">
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Cocktail;
