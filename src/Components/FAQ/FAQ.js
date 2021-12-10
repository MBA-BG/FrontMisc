import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

const FAQ = (props) => {
        const [expandedState, setExpandedState] = useState(false);
  return (
      <div>
    <Accordion>
      <AccordionSummary expandIcon={<AddIcon />}>
        <Typography variant="h6" component="p">
          Who are the Monsters?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>We are the monsters. We are all Monsters</Typography>
      </AccordionDetails>
        </Accordion>

        <Accordion>
      <AccordionSummary expandIcon={<AddIcon />}>
        <Typography variant="h6" component="p">
          How do we operate?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          We are a dedicated team of developers looking forward to creative
          thinking and pushing boundaries
        </Typography>
      </AccordionDetails>

    </Accordion>
    </div>
  );
};

export default FAQ;
