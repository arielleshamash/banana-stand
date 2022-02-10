import React from "react";
import { Typography, Box, Grid, Toolbar, Container } from "@material-ui/core";
import logo from "./images/logo.png";
import stand from "./images/BananaStand.png";

function Head() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <div>
        <Box display="flex" justifyContent="space-around">
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              style={{ width: "15%", margin: "15px" }}
            />
          </Toolbar>{" "}
        </Box>
      </div>
      <Container fixed>
        <Box
          sx={{
            height: "83vh",
            backgroundColor: "rgb(255,255,255, 0.5)",
            marginBottom: "30px",
            justify: "center",
          }}
        >
          <Grid container justify="center" direction="row">
            <Grid item md={6}>
              <img
                src={stand}
                alt="banana-stand"
                style={{
                  width: "70%",
                  verticalAlign: "middle",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
            </Grid>
            <Grid item md={5}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Box mb={4}>
                  <Typography
                    variant="h3"
                    className="bodyText"
                    style={{ color: "#041852" }}
                  >
                    ba·na·na ré·pub·lique
                    <Typography
                      variant="h4"
                      className="bodyText"
                      style={{ color: "darkred", marginTop: "7.5px" }}
                    >
                      [noun]
                    </Typography>
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant="h5"
                      className="bodyText"
                      style={{ color: "#555555" }}
                    >
                      /bəˌnæn.ə rɪˈpʌb.lɪk/ <br />
                    </Typography>
                    <Typography
                      variant="h5"
                      className="bodyText"
                      style={{ color: "#041852" }}
                    >
                      an exploitative government that functions poorly for its
                      citizenry while disproportionately benefiting a corrupt
                      elite group or individual.
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Head;
