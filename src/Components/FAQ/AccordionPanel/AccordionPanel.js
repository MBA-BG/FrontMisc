import { useState, useMemo } from "react";
import Accordion from "@mui/material/Accordion";

import { AccordionSummary, AccordionDetails } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography } from "@mui/material";

const AccordionPanel = (props) => {

  

  const [expandedState, setExpandedState] = useState(false);

  const handleAccordionToggle = () => {
    setExpandedState((prev) => {
      return !expandedState;
    });
  };

  return (
      
    <Accordion disableGutters onChange={() => handleAccordionToggle()}>
      <AccordionSummary
        expandIcon={expandedState ? <RemoveIcon /> : <AddIcon />}
      >
        <Typography variant="h6" component="p">
          {props.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionPanel;
