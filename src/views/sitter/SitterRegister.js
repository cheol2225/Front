import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import image from "assets/img/dog.jpeg";
import { title } from 'assets/jss/material-kit-react';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },

  back: {
    backgroundImage: "url(" + image + ")",
    backgoundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '85vh',
    width: '100%',
  },
  
  box: {
    background: '#AADBFF',
    width: '370px',
    height: '600px',
    position: 'relative',
    right: '100px',
    top: '100px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'flex-end',
  },

  titleBox: {
      background: '	#1E96FF',
      position: 'relative',
      zIndex: '1',
      top: '-190px',
      right: '-230px',
      width: '360px',
      height: '100px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

  }

}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
      <>
     <div className={classes.back} image={require("assets/img/bg4.jpg")}>
         <div className={classes.titleBox}>
             <h2>펫시터가 되어죠!!!</h2>
         </div>
     <form className={classes.root} noValidate autoComplete="off">
     <div className={classes.box}>
      <div className={classes.root}>
        <div className="D-sitterRegister-container">
          <TextField
            id="outlined-password-input"
            label="지원자 성명"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
         <TextField
            id="outlined-password-input"
            label="성별(남성 or 여성)"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            type="date"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="연락처 ex)01x-xxxx-xxxxx"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="E-mail"
            type="email"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="거주지 주소 ex)서울시 강북구 돈암동"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="반려동물 ex)강아지, 고양이, 그외"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        </div>
        </div>
        
      </form>
    </div>
    </>
  );
}