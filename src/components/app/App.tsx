import React from "react";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Portfolio from "../portfolio/Portfolio";
import { CssBaseline, Typography } from "@material-ui/core";
import Contact from "../contact/Contact";

const theme = createTheme({
  palette: {
    background: {
      default: "#30476b",
    },
    text: {
      primary: "#30476b",
    },
    primary: {
      main: "#30476b",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2%",
  },
  title: {
    display: "inline-flex",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 17,
  },
  portfolio: {
    float: "left",
    width: "calc(100% - 142px)",
  },
  contact: {
    float: "right",
    width: 120,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Typography
          className={classes.title}
          variant={"h2"}
          color={"secondary"}
        >
          Grant Perkins' Portfolio
        </Typography>
        <div style={{ width: "100%" }}>
          <div className={classes.portfolio}>
            <Portfolio />
          </div>
        </div>
        <div className={classes.contact}>
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
