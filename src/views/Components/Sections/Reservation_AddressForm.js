import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import sitters from "assets/img/sitters.jpg";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '70%',
    maxHeight: '70%',
  },
}));

export default function AddressForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        예약자 확인
      </Typography>
      <Grid container spacing={3}>
      <img className={classes.img} alt="complex" src={sitters}/>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="이름"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nikname"
            name="n_name"
            label="닉네임"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={8} >
          <TextField
            required
            id="address"
            name="address"
            
            label="주소"
            fullWidth
            autoComplete="shipping address-line1"
          />
         <Button>주소검색</Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="나머지 주소"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="index"
            name="city"
            label="성별"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="age"
            name="age"
            label="나이"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="content"
            name="content"
            label="할말있음 하세요"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="당신의 장기를 팔아도 되겠습니까?"
          />
           <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="혹시 애완동물을 제 이름으로 등록해도 될까요?"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="이제부터 제 가족입니다 동의하시죠?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}