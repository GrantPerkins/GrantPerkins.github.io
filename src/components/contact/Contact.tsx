import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, IconButton, Tooltip } from "@material-ui/core";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import pfp from "./pfp.jpg";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: 60,
    height: 60,
    color: "primary",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "7px solid #30476b",
  },
  header: {
    paddingTop: 10,
  },
  card: {
    paddingTop: "10%",
    width: 120,
    display: "flex",
    textAlign: "center",
  },
  fixed: {
    position: "fixed",
  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.fixed}>
      <Card className={classes.card}>
        <Grid
          container
          spacing={2}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Tooltip title={"Me"}>
              <img src={pfp} alt={"me"} className={classes.image} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={"GitHub"}>
              <IconButton href={"https://github.com/GrantPerkins"}>
                <GitHub className={classes.largeIcon} color={"primary"} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={"LinkedIn"}>
              <IconButton
                href={"https://www.linkedin.com/in/grant-perkins-35ba00170/"}
              >
                <LinkedIn className={classes.largeIcon} color={"primary"} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={"Email"}>
              <IconButton href={"mailto:gcperkins@wpi.edu"}>
                <Email className={classes.largeIcon} color={"primary"} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Contact;
