import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import MainFeaturedPost from '../Components/Sections/EventMainFeaturedPost';
import FeaturedPost from '../Components/Sections/EventFeaturedPost';
import Main from '../Components/Sections/EventMain';

import Event from "assets/img/login.jpg";


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: '이벤트 페이지 입니다.',
  description:
    "뭐라도 건질게 있지 않을까요 ? ",
  image: {Event},
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: '첫번째 이벤트',
    date: '2020.12',
    description:
      '꽁자는없다요.',
    image: '',
    imageText: 'Image Text',
    
  },
  {
    title: '두번째다요',
    date: '2020.11~12',
    description:
      '너를 용서해주마.',
    image: '',
    imageText: 'Image Text',
  },
  {
    title: '세번째다요',
    date: '2020.11~12',
    description:
      '밥을달라.',
    image: '',
    imageText: 'Image Text',
  },
  {
    title: '네번째다요',
    date: '2020.11~12',
    description:
      '고기가좋다.',
    image: '',
    imageText: 'Image Text',
  },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
       
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="뭐라도 설명 해봐유!!" />
           
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}