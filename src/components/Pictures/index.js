import React from "react";
import "./styles/index.css";
import { Container } from "@material-ui/core";
import grid from "../HeadSection/images/gridv2.png";

function PictureGrid() {
  return (
    <div
      className="PictureGrid
    "
      style={{ marginBottom: "50px" }}
    >
      <Container fixed>
        <img
          src={grid}
          alt="banana-pics"
          style={{
            width: "100%",
            verticalAlign: "middle",
            marginBottom: "20px",
          }}
        />
      </Container>
    </div>
  );
}

export default PictureGrid;
