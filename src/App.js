import {ThemeProvider, createMuiTheme} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh',
  },
})

function App() {

  const theme = createMuiTheme({
    palette:{
      primary:{
        main:'#f44336'
      },
      secondary:{
        main: '#3f51b5'
      }
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} ></div>
    </ThemeProvider>
  );
}

export default App;
