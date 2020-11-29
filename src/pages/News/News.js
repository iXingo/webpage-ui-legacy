import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import {BigMediaCard, Carousel, ContentTitle, Subscribe} from '../../components';
import {Instagram} from "react-content-loader";


const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
  },
  toolbarTitle: {
    flex: 1,
    color: '#1a73e8',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  icon: {
    fontSize: 20,
    textAlign: 'center',
  },
  tips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardGrids: {
    // paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  cards: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedias: {
    paddingTop: '56.25%', // 16:9
  },
  cardContents: {
    flexGrow: 1,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  newTitle: {
    color: '#1a73e8',
  },
  footer: {
    backgroundColor: "#1a73e8",
    color: theme.palette.primary,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));


// const cards = [1, 2, 3];

const techSection = {
  sectionMain: '技术新闻',
  sectionTitle: '技术新潮流',
  sectionContent: '那帮大佬又搞出什么玩意儿了，我真的学不动了。'
}

const lifeSection = {
  sectionMain: '生活新闻',
  sectionTitle: '生活新风尚',
  sectionContent: '最近有啥好玩的，有啥好看的，有啥新东西。'
}

const friendSection = {
  sectionMain: '好友',
  sectionTitle: '好友新动向',
  sectionContent: '这些优秀的年轻人们又闹出了什么新花样。'
}


const workSection = {
  sectionMain: '工作',
  sectionTitle: '工作新动态',
  sectionContent: '作为一名社畜，工作以及公司又有啥新动静。'
}

const News = props => {

  const classes = useStyles();
  const {cards} = props;
  document.title = "星狗新闻，小人物的大新闻 | 星狗网， 看见好时光";
  if (cards.length === 0) {
    return (
      <Instagram/>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          {/* <Button size="small">订阅</Button> */}
          <Subscribe/>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src="https://img.ixingo.cn/news.png" alt="星狗新闻" style={{height: 60, width: 200}}/>
          </Typography>

          <Button variant="outlined" size="small">
            搜索
          </Button>
        </Toolbar>
        <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.newTitle}>
          星狗新闻 ｜ 小人物的大新闻
        </Typography>
        <main>

          <Carousel/>

          <ContentTitle context={techSection}/>
          <Grid container spacing={4} className={classes.cardGrids}>
            {cards[0].map(card => (
              <BigMediaCard post={card} {...props}/>
            ))}
          </Grid>

          <ContentTitle context={lifeSection}/>
          <Grid container spacing={4} className={classes.cardGrids}>
            {cards[1].map(card => (
              <BigMediaCard post={card} {...props}/>
            ))}
          </Grid>

          <ContentTitle context={friendSection}/>
          <Grid container spacing={4} className={classes.cardGrids}>
            {cards[2].map(card => (
              <BigMediaCard post={card} {...props}/>
            ))}
          </Grid>

          <ContentTitle context={workSection}/>
          <Grid container spacing={4} className={classes.cardGrids}>
            {cards[3].map(card => (
              <BigMediaCard post={card} {...props}/>
            ))}
          </Grid>

        </main>
      </Container>
    </React.Fragment>
  );
};


export default withRouter(News);