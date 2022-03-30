import React from "react";
import {
  Typography,
  Box,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import logo from "./images/logo.png";
import stand from "./images/BananaStand.png";
import IconButton from "@mui/material/IconButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faDiscord } from "@fortawesome/free-brands-svg-icons";
import TwitterIcon from "@mui/icons-material/Twitter";

library.add(fab, faDiscord);

function Head() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Container maxWidth="lg">
        <Grid container direction="row">
          <Grid item xs={8}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", margin: "15px" }}
              id="main-logo"
            />
          </Grid>
          <Grid
            container
            item
            xs={4}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              aria-label="discord"
              href="https://discord.gg/tDdgDj7Kks"
              target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-discord"
                style={{ color: "#041852", fontSize: 30 }}
              />
            </IconButton>
            <IconButton
              aria-label="twitter"
              href="https://twitter.com/republiqueDAO"
              target="_blank"
            >
              <TwitterIcon style={{ color: "#041852", fontSize: 30 }} />
            </IconButton>
          </Grid>
        </Grid>
        <Box
          component="section"
          justifyContent="center"
          alignItems="center"
          id="banana-stand"
          sx={{
            display: "flex",
            backgroundColor: "rgb(255,255,255, 0.5)",
            marginBottom: "30px",
            justify: "center",
            overflow: "hidden",
          }}
        >
          <Grid container justify="center" direction="row">
            <Grid
              container
              item
              md={6}
              alignItems="center"
              justifyContent="center"
            >
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
                id="banana-title"
              >
                <Box mb={4}>
                  <Typography
                    variant="h3"
                    className="bodyText"
                    style={{ color: "#041852", zIndex: "3" }}
                  >
                    ba·na·na ré·pub·lique
                  </Typography>
                  <Typography
                    variant="h4"
                    className="bodyText"
                    style={{ color: "darkred", marginTop: "7.5px" }}
                  >
                    [noun]
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant="h5"
                      className="bodyText"
                      style={{ color: "#555555" }}
                    >
                      {`/bəˌnæn.ə rɪˈpʌb.lɪk/`}
                      <br />
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
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    color: "darkred",
                    marginTop: "20px",
                    textTransform: "none",
                  }}
                  href="https://rarible.com/collection/0x4f78fce77c0c1502a4b16a61b0ccd199bb8601fc/"
                  target="_blank"
                >
                  <Typography
                    variant="h5"
                    className="bodyText"
                    style={{ color: "darkred" }}
                  >
                    View the collection
                  </Typography>{" "}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Head;
