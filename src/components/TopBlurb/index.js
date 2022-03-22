import React from "react";
import { Typography, Container } from "@material-ui/core";

function TopBlurb() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <Container fixed>
        <div style={{ marginBottom: "40px" }}>
          <Typography
            variant="h3"
            align="center"
            className="header"
            style={{ color: "darkred", lineHeight: "1.8" }}
          >
            Vive la Révolution!
          </Typography>
        </div>
        <Typography
          variant="h6"
          align="center"
          className="bodyText"
          style={{ color: "#041852", lineHeight: "1.4" }}
        >
          The world looks more like a banana republic every day. Peel back the
          skin and you find questionable intentions, a lack of alignment among
          global decision makers, a fundamental disconnect in purpose – makes
          you think anyone else could slice it better.
          <br />
          <br />
          Well, go ahead and try.
          <br />
          <br />
          We’ve minted 88 pieces of esteemed photographer Peggy Anderson’s
          collection <span className="emphasized">Banana République</span> as
          1/1 NFTs. The photographs find beauty in the absurd and banal - Peggy
          captured these photographs across Paris over a span of five years,
          discarded banana peels representing the turmoil of a rejected
          generation thrown on the ground and left to rot on the streets. 80% of
          the NFT primary sale proceeds will slip directly into the banana stand{" "}
          <span className="crossout">because there’s always money in it</span>{" "}
          which will be controlled by all NFT holders (le Directoire).
          <br />
          <br />
          But what are the funds for, exactly? What is the raison d'être? That’s
          up to you to decide. Fund a politician, change a local law, drop the
          cash from a helicopter (not investment advice), film a documentary
          about the whole damn thing, we neither care nor have a say. The limit
          is your imagination…and your ability to convince a group of strangers
          on the internet to agree on something. I’m sure someone will come up
          with <span className="emphasized">something.</span>
        </Typography>
      </Container>
    </div>
  );
}

export default TopBlurb;
