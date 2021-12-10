import { useState, useMemo } from "react";

import AccordionPanel from "./AccordionPanel/AccordionPanel";
import Container from "@mui/material/Container";
import { useTheme, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const FAQ = (props) => {
  const darkTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
        background: {
          default: "#222222",
        },
      },
    })
  );

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
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      <Container>
        {questionsState.map((item, i) => {
          return <AccordionPanel question={item} answer={answersState[i]} />;
        })}
      </Container>
    </ThemeProvider>
  );
};

export default FAQ;
