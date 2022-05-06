import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  element: {
    padding: 3,
  },
  bullet: {
    height: 5,
    paddingBottom: 1,
  },
  title: {
    textDecoration: "underline",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));
type PortfolioElementProps = {
  name: string;
  link: string;
  image: string;
  description: string;
  technologies: string[];
};

function PortfolioElement(props: PortfolioElementProps) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Card className={classes.element}>
        <a href={props.link} className={classes.title}>
          <CardHeader
            title={
              <Typography variant={"h4"} color={"primary"}>
                {props.name}
              </Typography>
            }
          />
          <CardMedia
            className={classes.media}
            image={
              "https://raw.githubusercontent.com/GrantPerkins/portfolio/master/src/data/images/" +
              props.image
            }
            title="image for project"
          />
        </a>
        <Typography variant={"body1"}>{props.description}</Typography>
        <Typography variant={"h5"}>Technologies</Typography>
        <Grid container>
          {props.technologies.map((value) => {
            return (
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={2}>
                    <FiberManualRecordIcon className={classes.bullet} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant={"body2"}>{value}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </Grid>
  );
}

export default PortfolioElement;
