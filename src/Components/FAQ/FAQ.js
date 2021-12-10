import { useState, useMemo } from "react";

import AccordionPanel from "./AccordionPanel/AccordionPanel";
import Container from "@mui/material/Container";



const FAQ = (props) => {

  
  const [questionsState, setQuestionsState] = useState([
    "Who are the monsters?",
    "What are your future plans?",
    "What will be the price?",
  ]);

  const [answersState, setAnswersState] = useState([
    "The monsters are a wonderful new group coming to your town in the near future",
    "We will invest in Artists, Game Developers and Creative Content Producers to expand our universe",
    "The Price is yet to be decided by the Monsters",
  ]);

  return (
      <Container maxWidth='md'>
        {questionsState.map((item, i) => {
          return <AccordionPanel question={item} answer={answersState[i]} />;
        })}
      </Container>
  );
};

export default FAQ;
