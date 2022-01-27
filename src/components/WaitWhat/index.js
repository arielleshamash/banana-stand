import React from "react";
import { Typography, Container } from "@material-ui/core";

function WaitWhat() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Container fixed>
        <div style={{ marginBottom: "30px" }}>
          <Typography variant="h3" align="center">
            Wait…what?
          </Typography>
        </div>
        <Typography variant="h6" align="center">
          So check it out. Each individual NFT confers access to the République
          through an airdropped access token. Each access token represents one
          vote in all DAO proposals. When an NFT is resold the new owner will
          also be airdropped an access token, while the previous DAO access is
          not revoked - every day both the treasury and member count will grow,
          capping at 1789 participants in honor of the Bastille and whatnot.
          Vive la révolution!
          <br />
          <br />
          We’re building a collective in the open, allowing anyone and everyone
          to witness the growth that occurs when you bring human beings together
          with proportionate authority but no set objective. The growth will be
          organic, without any predictable direction, as every new member who
          joins has as much say as those before them.
          <br />
          <br />
          Could it fall apart in a matter of days? Somewhat likely. Could it go
          on to change the world? Less likely. Who knows, only time will tell.
          When the late Chinese premier Zhou Enlai (1898-1976) was asked about
          the influence of the French Revolution, he is reputed to have said:
          'Too early to say.' We’ll most definitely be taking a page from his
          book.
          <br />
          <br />
          Don’t own an NFT? Tune into the Discord and watch the madness from the
          sidelines.
        </Typography>
      </Container>
    </div>
  );
}

export default WaitWhat;
