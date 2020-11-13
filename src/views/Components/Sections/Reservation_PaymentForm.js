import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        일정 확인
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="시작날" label="시작일" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="종료날"
            label="종료일"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField required id="size" label="동물크기" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField required id="number" label="동물 수" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="견종"
            label="견종"
            helperText="동물 종을 입력해 주세요"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="place" label="지낼장소" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="일정확인했죠 안했으면 10년정도 부탁드려요"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="101마리 달마시안도 가능한가요?"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="장소는 당신의 마음속입니다."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}