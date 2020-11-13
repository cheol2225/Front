import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: '민규', desc: '프론트', price: '99만원' },
  { name: '종욱', desc: '빅데이터', price: '15만원' },
  { name: '수연', desc: '백엔드', price: '30만원' },
  { name: '영찬', desc: '귀염둥이', price: '1만원' },
  { name: '배송비', desc: '', price: '한 300만원쯤' },
];
const sitters = [
  { name: '이름', detail: 'name' },
  { name: '연락처', detail: 'Mr John Smith' },
  { name: '계좌정보', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: '주소', detail: '04/2024' },
];
const addresses = [
  { name: '이름', detail: 'Visa' },
  { name: '연락처', detail: 'Mr John Smith' },
  { name: '동물정보', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: '장기자랑', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        결제내역
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            1012031023012억
          </Typography>
        </ListItem>
      </List>
      <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            예약자
          </Typography>
          <Grid container>
            {addresses.map((address) => (
              <React.Fragment key={address.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{address.name}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={5}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            사용자
          </Typography>
          <Grid container>
            {sitters.map((sitter) => (
              <React.Fragment key={sitter.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{sitter.name}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
    
    </React.Fragment>
  );
}