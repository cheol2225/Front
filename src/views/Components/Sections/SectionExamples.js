import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import sitter from "assets/img/sitter.jpg";
import shop from "assets/img/shop.jpg";
import board from "assets/img/board.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={8} sm={8} md={4}>
            <Link to="reservation" className={classes.link}>
              <img
                src={sitter}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                예약페이지
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={8} sm={8} md={4}>
            <Link to="Boardlist" className={classes.link}>
              <img
                src={board}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                커뮤니티
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={8} sm={8} md={4}>
            <Link to="shop" className={classes.link}>
              <img
                src={shop}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                애완동물 용품
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
