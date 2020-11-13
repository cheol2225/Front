import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Header from "components/Header/Header.js";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Suchsitter_Navibar from "../Components/Sections/Suchsitter_Navibar.js";
import AppBar from '@material-ui/core/AppBar';
import HeaderLinks from "components/Header/HeaderLinks.js";

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },

  
  root: {
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root2: {
    width: 500,
  },
  CssBaseline:{
    marginTop: 100,
  },
  Container:{
    marginTop: 500,
  }

}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
   

  return (
    
      <React.Fragment>
      <Header position="relative"
        brand="HOUR PAT"
        src="/"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
    <CssBaseline />
            
            <Container maxWidth="lm" component="main" Align="center" className={classes.heroContent} >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                시터 찾기
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                시터 검색 페이지 
            </Typography>

            
            </Container>
            <Suchsitter_Navibar/>
            
            <Container maxWidth="lm" align="center" className={classes.heroContent} >
            <Grid container spacing={10} >
                <Grid xs={12} sm={12} md={4}>
                <from>
            <Card className={classes.root} >
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="시터 1"
                subheader="날짜 2020.11.12~ 2020.12.20"
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="본인사진"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                자기를 표현하는 문구 하나 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>설명</Typography>
                <Typography paragraph>
                    나는 잘안먹습니다.
                </Typography>
                <Typography paragraph>
                   특징 : 
                   개를 개같이 잘돌봅니다.
                </Typography>
                <Typography paragraph>
                   특기 : 
                   개랑 개처럼 잘놉니다.
                </Typography>
                <Typography>
                   언제든 연락주세요
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            </from>
            </Grid>
            </Grid>     
      </Container>
     

    </React.Fragment>
    
  );
}

