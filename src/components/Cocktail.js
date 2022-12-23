import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const Cocktail = ({ coctail }) => {
  // console.log(coctail);

  return (
    <div>
      {coctail &&
        coctail.map((item) => {
          return (
            <Grid sx={{
              display:"flex",
            }} >
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.strDrinkThumb}
                    alt="green iguana"
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
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </div>
  );
};

export default Cocktail;
