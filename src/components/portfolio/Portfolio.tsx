import React, { ReactElement } from "react";
import portfolio from "../../data/portfolio.json";
import PortfolioElement from "./PortfolioElement";
import { Grid } from "@material-ui/core";
import { BrowserView, MobileView } from "react-device-detect";

function getLeft(): number[] {
  let left: number[] = [];
  for (let i = 0; i < portfolio.length; i += 2) {
    left.push(i);
  }
  return left;
}

function getRight(): number[] {
  let right: number[] = [];
  for (let i = 1; i < portfolio.length; i += 2) {
    right.push(i);
  }
  return right;
}

function Portfolio(): ReactElement {
  const [left, setLeft] = React.useState([0]);
  const [right, setRight] = React.useState([1]);
  if (left.length === 1) {
    setLeft(getLeft());
    setRight(getRight());
  }
  return (
    <div>
      <BrowserView>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              {left.map((index) => {
                const value = portfolio[index];
                return (
                  <PortfolioElement
                    key={index}
                    name={value.name}
                    link={value.link}
                    image={value.image}
                    description={value.description}
                    technologies={value.technologies}
                  />
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              {right.map((index) => {
                const value = portfolio[index];
                return (
                  <PortfolioElement
                    key={index}
                    name={value.name}
                    link={value.link}
                    image={value.image}
                    description={value.description}
                    technologies={value.technologies}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </BrowserView>
      <MobileView>
        <Grid container spacing={3}>
          {portfolio.map((value) => {
            return (
              <PortfolioElement
                key={value.name}
                name={value.name}
                link={value.link}
                image={value.image}
                description={value.description}
                technologies={value.technologies}
              />
            );
          })}
        </Grid>
      </MobileView>
    </div>
  );
}

export default Portfolio;
