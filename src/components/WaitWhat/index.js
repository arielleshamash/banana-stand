import React from "react";
import { Typography, Container, Link } from "@material-ui/core";

function WaitWhat() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <Container fixed>
        <div style={{ marginBottom: "30px" }}>
          <Typography
            variant="h3"
            align="center"
            className="header"
            style={{ color: "darkred" }}
          >
            Wait…what?
          </Typography>
        </div>
        <Typography
          variant="h6"
          align="center"
          className="bodyText"
          style={{ color: "#041852", lineHeight: "1.4" }}
        >
          So check it out. Each individual NFT confers access to the République
          through an airdropped access token. Each access token, called an
          Assignat, represents one share of the treasury and one vote in all DAO
          proposals. When an NFT is resold a portion of the sale will return to
          the DAO and the new owner will also be airdropped an access token.
          Previous DAO access is <span className="bold">not</span> revoked,
          however - every day both the treasury and member count will grow,
          capping at 1789 in honor of the Bastille and whatnot.{" "}
          <span className="emphasized">Vive la révolution!</span>
          <br />
          <br />
          We’re building a collective in the open, allowing anyone and everyone
          to witness the growth that occurs when you bring human beings together
          with proportionate authority but no set objective. The growth will be
          organic and without any predictable direction as every new member who
          joins has as much say as those before them.
          <br />
          <br />
          Will it fall apart in a matter of days? Somewhat likely. Will it go on
          to change the world? Less likely. When the late Chinese premier Zhou
          Enlai <span className="emphasized">(1898-1976)</span> was asked about
          the influence of the French Revolution, he is reputed to have said:{" "}
          <span className="bold">'Too early to say.'</span> We’ll most
          definitely be taking a page from his book.
          <br />
          <br />
          The original 88 NFT purchases will be accompanied by a {""}
          <span className="bold">
            (real-life, physical, actual, not-in-the-metaverse,
            framable-on-the-wall-above-your-bed)
          </span>{" "}
          print of the Banana République collection in its entirety; given
          you’re all over the world and whatnot it will take a few months to
          ship them so stay tuned. Don’t own an NFT? Tune into our{" "}
          <Link
            href="https://discord.gg/tDdgDj7Kks"
            target="_blank"
            color="inherit"
            underline="always"
            rel="noopener"
          >
            Discord
          </Link>{" "}
          or follow us on{" "}
          <Link
            href="https://twitter.com/republiqueDAO"
            target="_blank"
            color="inherit"
            underline="always"
            rel="noopener"
          >
            Twitter
          </Link>{" "}
          and watch the madness from the sidelines.
        </Typography>
      </Container>
    </div>
  );
}

export default WaitWhat;
