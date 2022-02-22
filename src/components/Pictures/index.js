import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import photoGrid from "../HeadSection/images/gridv2.png";
import Framed1 from "../HeadSection/images/Framed1.png";
import Framed2 from "../HeadSection/images/Framed2.png";
import Framed3 from "../HeadSection/images/Framed3.png";
import miniGrid from "../HeadSection/images/grid3x3.png";

function PictureGrid() {
  return (
    <div
      className="PictureGrid
    "
      style={{ marginBottom: "80px" }}
    >
      <Container maxWidth="lg">
        <img
          src={photoGrid}
          alt="banana-pics"
          className="big-grid"
          style={{
            maxWidth: "100%",
            marginBottom: "20px",
          }}
        />
        <img
          src={miniGrid}
          alt="banana-pics-mini"
          className="mini-grid"
          style={{
            maxWidth: "100%",
            marginBottom: "20px",
          }}
        />
        <Grid
          container
          direction="row"
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={9} sm={4}>
            <img src={Framed1} alt="framed1" style={{ maxWidth: "90%" }} />
            <Typography
              variant="h6"
              align="center"
              className="header"
              style={{
                color: "darkred",
                lineHeight: "1.8",
                marginBottom: "15px",
                marginTop: "10px",
              }}
            >
              Jean Sylvain Bailly
            </Typography>
          </Grid>
          <Grid item xs={9} sm={4}>
            <img src={Framed2} alt="framed2" style={{ maxWidth: "90%" }} />
            <Typography
              variant="h6"
              align="center"
              className="header"
              style={{
                color: "darkred",
                lineHeight: "1.8",
                marginBottom: "15px",
                marginTop: "10px",
              }}
            >
              Jean-Francois-Auguste Moulin
            </Typography>
          </Grid>
          <Grid item xs={9} sm={4}>
            <img src={Framed3} alt="framed3" style={{ maxWidth: "90%" }} />
            <Typography
              variant="h6"
              align="center"
              className="header"
              style={{
                color: "darkred",
                lineHeight: "1.8",
                marginBottom: "15px",
                marginTop: "10px",
              }}
            >
              Marie Antoinette
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PictureGrid;
