import React from "react";
import "./styles/index.css";
import { Container, Grid } from "@material-ui/core";
import photoGrid from "../HeadSection/images/gridv2.png";
import Framed1 from "../HeadSection/images/Framed1.png";
import Framed2 from "../HeadSection/images/Framed2.png";
import Framed3 from "../HeadSection/images/Framed3.png";

function PictureGrid() {
  return (
    <div
      className="PictureGrid
    "
      style={{ marginBottom: "50px" }}
    >
      <Container maxWidth="lg">
        <img
          src={photoGrid}
          alt="banana-pics"
          style={{
            maxWidth: "100%",
            marginBottom: "20px",
          }}
        />
        <Grid container direction="row">
          <Grid item xs={4}>
            <img src={Framed1} alt="framed1" style={{ maxWidth: "90%" }} />
          </Grid>
          <Grid item xs={4}>
            <img src={Framed2} alt="framed2" style={{ maxWidth: "90%" }} />
          </Grid>
          <Grid item xs={4}>
            <img src={Framed3} alt="framed3" style={{ maxWidth: "90%" }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PictureGrid;
