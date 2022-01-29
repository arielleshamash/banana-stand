import * as React from "react";
import {
  Typography,
  Box,
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
          margin: "150px",
          justify: "center",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <Typography variant="h3" align="center" className="header">
            Frequently Asked Questions
          </Typography>
        </div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            align="center"
          >
            <Typography className="bodyText" variant="h6">
              En français?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="bodyText">
              La photographe americano-suédoise Peggy Anderson parcourt les
              trottoirs parisiens à la recherche d’objets abandonnés. Chaises,
              bouts de bois, cadres, et…peaux de bananes, abandonnés par des
              enfants, des livreurs, des retraités à la recherche du potassium,
              de l’énergie, de la force. Puis jetées, rejetées. <br /> <br />
              Les peaux ainsi abandonnées deviennent une écriture, une
              calligraphie - de vies, de passages, de la ville. Banana
              République, l’œuvre écrit la vie, la ville, l’énergie. La banane,
              consommée, abandonnée. Avoir la banane… puis la jeter. Quel
              symbolique pour ma ville, quel avenir?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className="bodyText" variant="h6">
              NFTs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="bodyText">
              Each of the 88 NFTs has already been minted, since unlike
              randomized generative art we want you to be able to own the piece
              that speaks to you personally. Each individual photograph has
              never been published elsewhere and never will be; each NFT is as
              rare as each other so there’s no need to try to game the system.{" "}
              <br /> <br />
              88% of the proceeds of the primary sale will go straight to the
              DAO, with the other 25% going directly to Peggy. Each individual
              NFT has an embedded royalty clause that directs 15% of all
              secondary sales to the DAO and an additional 5% to Peggy. If the
              price seems high, it’s important to remember that for all intents
              and purposes you retain access to 88% of the value immediately as
              a DAO member. <br /> <br />
              Ownership of an NFT at any point confers you access to the DAO and
              the experience therein; even if you sell your NFT you’ll maintain
              DAO access, so really what you do with your banana is up to you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className="bodyText" variant="h6">
              DAO Governance
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Typography>
              Tools used <br />
              Airdrop <br />
              Rage quit or nah <br />
              Treasury control <br />
              Access tokens can be sold, with 10% of each sale going to dev
              resources <br />
              The only proposal in the DAO at inception will be a vote to
              determine the voting mechanism - meta, eh?
            </Typography> */}
            <Typography className="bodyText">
              <List>
                <ListItem>
                  <ListItemText primary="Tools used" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Airdrop" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Rage quit or nah" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Treasury control" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Access tokens can be sold, with 10% of each sale going to dev resources" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="The only proposal in the DAO at inception will be a vote to determine the voting mechanism - meta, eh?" />
                </ListItem>
              </List>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className="bodyText" variant="h6">
              Concerns (Alleviated)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
                  secondary="None, really. We have neither voting rights nor power over the funds or proposals - we’re here solely as moderators to make sure everything runs smoothly from the technical side."
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
                  primary="How will we prevent shenanigans?"
                  secondary="In order to receive a DAO access token through a secondary sale the NFT must be sold for a higher value than its previous purchase price."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="What happens if it all goes wrong or gets hacked?"
                  secondary="We meet at the pub for a cheeky pint and hash it out from there."
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className="bodyText" variant="h6">
              Technical Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="bodyText">
              NFTs minted on Polygon and moved to ETH, with the gas fees baked
              in already. <br />
              IPFS? <br />
              Look at this intricate map I drew
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className="bodyText" variant="h6">
              Extra Reading
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="bodyText">
              <Link href="#">
                https://www.readthegeneralist.com/briefing/dao{" "}
              </Link>
              - Long-read on DAOs Packy
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default FAQsection;
