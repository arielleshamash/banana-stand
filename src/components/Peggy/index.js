import React from "react";
import { Typography, Link, Container } from "@material-ui/core";

function Peggy() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Container fixed>
        <div style={{ marginBottom: "30px" }}>
          <Typography variant="h3" align="center" className="header">
            Peggy Anderson
          </Typography>
        </div>
        <Typography variant="h6" align="center" className="bodyText">
          Peggy Anderson is an artist/photographer based in New York and Sweden.
          Known for embracing ritual and typology, Peggy’s signature project and
          book The Morning Dip was recently exhibited at Abecita Pop Konst &
          Foto in Sweden.
          <br />
          <br />
          Banana République evolved over the past five years while Peggy was
          living in Paris, and it has never before been exhibited. Peggy
          describes the work as encountering “objet trouvé,“ hidden signs and
          meaning found in discarded material on the street. A city on the move,
          people consuming and discarding, the abandoned skins morphing &
          rotting into a hidden language. Who dropped these peels? Students,
          taxi drivers, construction workers, retirees walking dogs, children in
          strollers…maybe they’re a secret language spoken in a different time
          and place, like hieroglyphs or messages from the future. This is
          Peggy’s first foray into the NFT space and most likely her last given
          the absurdity of the final concept versus what she imagined for her
          photographs, but hey, we do what we can.
          <br />
          <br />
          For more work by Peggy check out{" "}
          <Link href="#">http://peggy.andersonnyc.com</Link>.
        </Typography>
      </Container>
    </div>
  );
}

export default Peggy;
