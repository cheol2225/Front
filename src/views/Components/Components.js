import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import login from "assets/img/login.jpg";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="HOUR PAT"
        src="/"
        rightLinks={<HeaderLinks />}
        fixed
        color="red"
        changeColorOnScroll={{
          height: 500,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>혼자 두지 마세요.</h1>
                <h3 className={classes.subtitle}>
                  당신이 오기만을 기다립니다.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionBasics />*/}
        {/*<SectionNavbars />*/}
        {/*<SectionTabs />*/}
        <SectionPills />
        {/*<SectionNotifications />*/}
        {/*<SectionTypography />*/}
        {/*<SectionJavascript />*/}
        <SectionCarousel />
        <SectionCompletedExamples />
        {/*<SectionLogin />*/}
        <GridItem xs={8} sm={8} md={4}>
            <Link to="login-page" className={classes.link}>
              <img
                src={login}
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
                login page
              </Button>
            </Link>
          </GridItem>
        <SectionExamples />
        {/*<SectionDownload />*/}
      </div>
      <Footer />
    </div>
  );
}
