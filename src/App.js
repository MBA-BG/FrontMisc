import {useMemo} from 'react';

import FAQ from "./Components/FAQ/FAQ";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {

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



  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
       <CssBaseline/>
      <FAQ />
      
    </div>
    </ThemeProvider>
  );
}

export default App;
