import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { withRouter } from 'react-router-dom';
import { MarqueeText, FeaturedList, FeaturedCard, FeaturedCardReversed, FeaturedContent, 
  SummaryCard, Carousel, Subscribe, PostCard
}  from '../../components';
import NotAuth from '../NotAuth';




const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: '#1a73e8'
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(2),
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
  tips : {
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


  footer: {
    backgroundColor: "#1a73e8",
    color: theme.palette.primary,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  '科技',
  '生活',
  '前端',
  '后端',
  '算法',
  '好友',
  '职场',
  '兴趣',
  '新闻',
  '见闻',
];

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const featuredPosts = [
  {
    title: '演示文章',
    date: '2019年8月15日',
    description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
  },
  {
    title: '这是一篇演示文章',
    date: '2019年8月15日',
    description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
  },
];


const Home = props => {

  const classes = useStyles();

  if(!props.isAuthenticated) return <NotAuth />;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          {/* <Button size="small">订阅</Button> */}
          <Subscribe />
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            星狗网
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            搜索
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
        <main>
          <MarqueeText></MarqueeText>
          {/* Main featured post */}
          <Carousel></Carousel>
          
          
          <Paper className={classes.list}>
            <FeaturedCard></FeaturedCard>
          </Paper>

          <Paper className={classes.list}>
            <FeaturedCardReversed></FeaturedCardReversed>
          </Paper>

          <Paper className={classes.list}>
            <FeaturedList></FeaturedList>
          </Paper>

          <div className={classes.list}>
            <FeaturedContent></FeaturedContent>
          </div>
          

          {/* End main featured post */}
          <PostCard />
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h4" style={{color:'#1a73e8'}}>{post.title}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          <div className={classes.tips}>
                            <DateRangeIcon className={classes.icon} />{post.date}
                          </div>
                        </Typography>
                        <Typography variant="subtitle1" paragraph>{post.description}</Typography>
                        <Typography variant="subtitle1" color="primary">查看全文...</Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End hero unit */}
          <Grid container spacing={4} className={classes.cardGrids}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.cards}>
                  <CardMedia
                    className={classes.cardMedias}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContents}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} className={classes.cardGrid}>
              <Grid item xs={12} md={6}>
                <SummaryCard></SummaryCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <SummaryCard></SummaryCard>
              </Grid>
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom >
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
};


export default withRouter(Home);