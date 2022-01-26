import React from "react";
import { Typography, Box, Grid, Toolbar, Container } from "@material-ui/core";
import logo from "./images/BRLogo.png";
import stand from "./images/BananaStand.png";

function Head() {
  return (
    <div>
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
            height: "90vh",
            width: "90vw",
            backgroundColor: "white",
            marginBottom: "30px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6}>
              <img
                src={stand}
                alt="banana-stand"
                style={{
                  width: "70%",
                  verticalAlign: "middle",
                  marginTop: "25px",
                }}
              />
            </Grid>
            <Grid item md={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Box mb={4}>
                  <Typography variant="h3">
                    Banana republic
                    <Typography variant="h4" color="red">
                      [noun]
                    </Typography>
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography color="blue">
                      /bəˌnæn.ə rɪˈpʌb.lɪk/ <br />
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
