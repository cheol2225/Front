/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Home, SettingsInputComponent } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="Suchsitter" className={classes.list}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            예약하러가기
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="Important_Notices" className={classes.list}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            공지사항
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="Shop" className={classes.list}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            상점
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="Boardlist" className={classes.list}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            커뮤니티
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="Event" className={classes.list}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            이벤트
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="SitterRegister" className={classes.list}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            시터 등록
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/Register" className={classes.dropdownLink}>
              회원가입
            </Link>,
            <Link to="/login-page" className={classes.dropdownLink}>
              로그인
            </Link>,
            <Link to="/PetRegister" className={classes.dropdownLink}>
              펫 등록
            </Link>,
            <Link to="/Reservation" className={classes.dropdownLink}>
            예약하기
            </Link>,
            <Link to="/Help" className={classes.dropdownLink}>
              도움말
            </Link>
          ]}
        />
      </ListItem>
     
      
    </List>
  );
}
