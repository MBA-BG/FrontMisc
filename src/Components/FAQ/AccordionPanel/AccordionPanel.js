import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from "@mui/material";


const AccordionPanel = props => {
    const [expandedState, setExpandedState] = useState(false);
   
     const handleAccordionToggle = () => {
         setExpandedState( prev =>{
             return !expandedState
         })
     };

    
    return(
      <Accordion onChange={()=> handleAccordionToggle()} >
      <AccordionSummary expandIcon={ expandedState? <RemoveIcon/>: <AddIcon />} >
      <Typography>
          Who are the Monsters?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          We are a dedicated team of developers with creative
          thinking and pushing boundaries.
        </Typography>
      </AccordionDetails>

    </Accordion>
  
    )

}

export default AccordionPanel;