import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import image from "assets/img/cat.jpg";
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
    background: '#FDF5E6',
    width: '370px',
    height: '680px',
    position: 'relative',
    right: '100px',
    top: '100px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'flex-end',
  },

  titleBox: {
      background: '#FFE0C6',
      position: 'relative',
      zIndex: '1',
      top: '-220px',
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
             <h2>우리 아기 특이사항!!!</h2>
         </div>
     <form className={classes.root} noValidate autoComplete="off">
     <div className={classes.box}>
      <div className={classes.root}>
        <div className="D-sitterRegister-container">
          <TextField
            id="outlined-password-input"
            label="아기 이름"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="아기 나이"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="반려동물 종류 ex)강아지, 고양이, 그 외"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="반려동물 품종 ex)진돗개, 페르시안, 그 외"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
         <TextField
            id="outlined-password-input"
            label="성별(수컷 or 암컷)"
            type="text"
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
        
        </div>
        </div>
        </div>
        
      </form>
    </div>
    </>
  );
}