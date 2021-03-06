import * as React from "react";
import {
  Typography,
  Box,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQsection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Box
        sx={{
          justify: "center",
        }}
      >
        <div style={{ marginBottom: "55px" }}>
          <Typography
            variant="h3"
            align="center"
            className="header"
            style={{ color: "darkred" }}
          >
            Answers
          </Typography>
        </div>
        <Container maxWidth="lg">
          <Accordion
            expanded={expanded === "panel0"}
            onChange={handleChange("panel0")}
            style={{ backgroundColor: "rgb(255,255,255, 0.5)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel0bh-content"
              id="panel0bh-header"
              align="center"
            >
              <Typography
                className="bodyText"
                variant="h6"
                style={{ color: "#041852" }}
              >
                Peggy Anderson
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="bodyText" style={{ color: "#041852" }}>
                Peggy Anderson is an artist/photographer based in New York and
                Paris. Known for embracing ritual and typology, Peggy’s
                signature project and book{" "}
                <Link
                  href="https://www.kehrerverlag.com/en/peggy-anderson-the-morning-dip-978-3-86828-976-3"
                  target="_blank"
                  color="inherit"
                  underline="always"
                  rel="noopener"
                >
                  The Morning Dip
                </Link>{" "}
                was recently exhibited at Abecita Pop Konst & Foto in{" "}
                <Link
                  href="https://www.abecitakonst.se/peggy-anderson-the-morning-dip/"
                  target="_blank"
                  color="inherit"
                  underline="always"
                  rel="noopener"
                >
                  Sweden.
                </Link>{" "}
                <br />
                <br />
                Banana République evolved over the past five years while Peggy
                was living in Paris and it has never before been exhibited.
                Peggy describes the work as encountering “objet trouvé,“ hidden
                signs and meaning found in discarded material on the street. A
                city on the move, people consuming and discarding, the abandoned
                skins morphing & rotting into a hidden language. Who dropped
                these peels? Students, taxi drivers, construction workers,
                retirees walking dogs, children in strollers…maybe they’re a
                secret language spoken in a different time and place, like
                hieroglyphs or messages from the future. This is Peggy’s first
                foray into the NFT space and most likely her last given the
                absurdity of the final concept versus what she imagined for her
                photographs, but hey, we do what we can.
                <br />
                <br />
                For more work by Peggy check out{" "}
                <Link
                  href="http://peggy.andersonnyc.com/"
                  target="_blank"
                  color="inherit"
                  underline="always"
                  rel="noopener"
                >
                  http://peggy.andersonnyc.com/
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={{ backgroundColor: "rgb(255,255,255, 0.5)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              align="center"
            >
              <Typography
                className="bodyText"
                variant="h6"
                style={{ color: "#041852" }}
              >
                En Français?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="bodyText" style={{ color: "#041852" }}>
                La photographe americano-suédoise Peggy Anderson parcourt les
                trottoirs parisiens à la recherche d’objets abandonnés. Chaises,
                bouts de bois, cadres, et…peaux de bananes, abandonnés par des
                enfants, des livreurs, des retraités à la recherche du
                potassium, de l’énergie, de la force. Puis jetées, rejetées.
                <br /> <br />
                Les peaux ainsi abandonnées deviennent une écriture, une
                calligraphie - de vies, de passages, de la ville. Banana
                République, l’œuvre écrit la vie, la ville, l’énergie. La
                banane, consommée, abandonnée. Avoir la banane… puis la jeter.
                Quel symbolique pour ma ville, quel avenir?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            style={{ backgroundColor: "rgb(255,255,255, 0.5)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                className="bodyText"
                variant="h6"
                style={{ color: "#041852" }}
              >
                NFTs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="bodyText" style={{ color: "#041852" }}>
                Each of the 88 NFTs has already been minted on Ethereum, since
                unlike randomized generative art we want you to be able to own
                the piece that speaks to you personally. Each individual
                photograph has never been published elsewhere and never will be;
                each NFT is as rare as each other so there’s no need to try to
                game the system.
                <br /> <br />
                80% of the proceeds of the primary sale will go straight to the
                DAO, with the other 20% going directly to Peggy. Each individual
                NFT has an embedded royalty clause that directs 15% of all
                secondary sales to the DAO and an additional 5% to Peggy. If the
                price seems high it’s important to remember that for all intents
                and purposes you retain access to 80% of what you paid
                immediately as a DAO member.
                <br /> <br />
                Should you decide to relinquish your position in le Directoire
                you may admit pusillanimity and sell your NFT.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            style={{ backgroundColor: "rgb(255,255,255, 0.5)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                className="bodyText"
                variant="h6"
                style={{ color: "#041852" }}
              >
                DAO Governance
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="bodyText" style={{ color: "#041852" }}>
                Each NFT offers access to all discord channels, voting
                mechanisms, and treasury control. For reference,{" "}
                <span className="bold">
                  none of the developers of the project, nor Peggy, will have an
                  NFT or access to the DAO
                </span>{" "}
                - it really is all you.
                <br /> <br />
                Voting will take place using Snapshot, with the only proposal in
                the DAO at inception a vote to determine the voting mechanism -
                meta, eh? Once that vote is concluded the power is truly in your
                hands. All funds will be deposited into a multi-sig Gnosis Safe
                that will require whatever majority is decided in order to
                distribute any funding.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            style={{ backgroundColor: "rgb(255,255,255, 0.5)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                className="bodyText"
                variant="h6"
                style={{ color: "#041852" }}
              >
                Concerns (Alleviated)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="bodyText" style={{ color: "#041852" }}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="What was the inspiration for the project?"
                      secondary="Last October we originally designed a mechanism to disperse the banana stand randomly (a banana split) but soon realized that there was more room for impact with a DAO."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        "How much influence do you (Peggy & co) have on the DAO?"
                      }
                      secondary={
                        "None, really. We have neither voting rights nor power over the funds or proposals - we’re here solely as moderators to make sure everything runs smoothly from the technical side."
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={"How are the funds distributed?"}
                      secondary={
                        "We’ve created an intermediary wallet that is set up to automatically funnel all appropriate percentages of primary and secondary sales to the DAO treasury and Peggy’s wallet."
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Do I have to remain anonymous?"
                      secondary="It’s up to you whether you want to utilize a pseudonym or not."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Who pays the royalties in each secondary sale?"
                      secondary="The seller, because that’s just how it be sometimes."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="What happens if it all goes wrong or gets hacked?"
                      secondary="We meet at the pub for a cheeky pint and hash it out from there."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Can we have some technical details?"
                      secondary={`The NFT are ERC-721. DAO tooling consists includes Snapshot for voting and a Gnosis Safe for treasury management. The Discord utilizes Collab.land for token-gating and the Zodiac module to facilitate poll-voting.`}
                    />
                  </ListItem>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            style={{ backgroundColor: "rgb(255,255,255, 0.5)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography
                className="bodyText"
                variant="h6"
                style={{ color: "#041852" }}
              >
                Extra Reading
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="bodyText" style={{ color: "#041852" }}>
                <Link
                  href="https://www.newyorker.com/culture/infinite-scroll/the-promise-of-daos-the-latest-craze-in-crypto"
                  target="_blank"
                  color="inherit"
                  underline="always"
                  rel="noopener"
                >
                  The Promise of DAOs, the Latest Craze in Crypto
                </Link>
                <br />
                <Link
                  href="https://www.readthegeneralist.com/briefing/dao"
                  target="_blank"
                  color="inherit"
                  underline="always"
                  rel="noopener"
                >
                  DAOs: Absorbing the Internet
                </Link>
                <br />
                <Link
                  href="https://www.daomasters.xyz/resources"
                  target="_blank"
                  color="inherit"
                  underline="always"
                  rel="noopener"
                >
                  DAO Masters Resources
                </Link>
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </div>
  );
}

export default FAQsection;
