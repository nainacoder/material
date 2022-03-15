import React from "react";
import { Paper } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { AccessTime } from "@mui/icons-material"
import Rating from '@mui/material/Rating';
import {createTheme,ThemeProvider} from "@mui/material"
import "../App.css";

const theme = createTheme({
  components:{
    MuiTypography:{
      variants:[
        {
          props:{
            variant:"body2"
          },
          style:{
            fontSize:11,
          }
        },
        {
          props:{
            variant:"body3",
          },
          style:{
            fontSize:9,
          }
        }
      ]
    }
  }
})




const TourCard = ({tour}) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img
          // src="https://media.istockphoto.com/photos/niagara-falls-autumn-landscape-picture-id1275716095?b=1&k=20&m=1275716095&s=170667a&w=0&h=AQq-vWGz7MxYFB_WfzlPJ28PJUHd3RAxlBS1Y_oSGZ0="
          src={tour.image}
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {/* Immerse into the falls */}
            {tour.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{width:12.5}}/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {/* 5 hours */}
              {tour.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              
          <Rating name="half-rating-read" defaultValue={tour.rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" component="p" marginLeft={0.5}>
          {tour.rating}
          </Typography>
          <Typography variant="body3" component="p" marginLeft={1.5}>
({tour.numberOfReviews} reviews)
          </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>From C ${tour.price}</Typography>
              </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
