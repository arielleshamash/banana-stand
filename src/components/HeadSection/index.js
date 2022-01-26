import React from "react";
import { Typography, Box, Grid, Toolbar } from "@material-ui/core";
import logo from "./images/BRLogo.png";
import stand from "./images/BananaStand.png";

function Head() {
  return (
    <div>
      <div>
        <Box display="flex" justifyContent="flex-start" className="row">
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              style={{ width: "15%", marginBottom: "20px" }}
            />
          </Toolbar>{" "}
        </Box>
      </div>
      <Box display="flex" justifyContent="center" className="row">
        <div>
          <Box justifyContent="space-between" className="row">
            <Grid item md={6}>
              <img src={stand} alt="banana-stand" style={{ width: "75%" }} />
            </Grid>
            <Grid item xs={12} md={5}>
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
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Head;
