import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: '개사료',
    price: '100만원',
    description: ['이름', '장소', '가능기간(요일?)', '010-7777-8888'],
    buttonText: '예약하기',
    buttonVariant: 'outlined',
  },
  {
    title: '개사료',
    subheader: '베스트',
    price: '15',
    description: [
      '이름',
      '장소',
      '가능기간(요일?)',
      '010-8888-7777',
    ],
    buttonText: '예약하기',
    buttonVariant: 'contained',
  },
  {
    title: '장난감',
    price: '30',
    description: [
      '이름',
      '장소',
      '가능기간(요일?)',
      '010-5555-8888',
    ],
    buttonText: '예약하기',
    buttonVariant: 'outlined',
  },
  {
    title: '흙',
    price: '30',
    description: [
      '이름',
      '장소',
      '가능기간(요일?)',
      '010-5555-8888',
    ],
    buttonText: '예약하기',
    buttonVariant: 'outlined',
  },
  {
    title: '사람사료',
    price: '30',
    description: [
      '이름',
      '장소',
      '가능기간(요일?)',
      '010-5555-8888',
    ],
    buttonText: '예약하기',
    buttonVariant: 'outlined',
  },
];




export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          상점
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          물건 팔아유 
        </Typography>
      </Container>
      {/* End hero unit */}
      <from>
      <Container maxWidth="lm" component="main">
        <Grid container spacing={10} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.subheader === '베스트' ? <StarIcon />: null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {"금액"}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /원
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    
      </from>
    </React.Fragment>
  );
}
