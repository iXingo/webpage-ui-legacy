import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  mainTitle: {
    marginTop: theme.spacing(16)
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


// const featuredPosts = [
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '演示文章',
//     date: '2019年9月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '这是一篇演示文章',
//     date: '2019年10月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
// ];

// const card1 = {
//     type: ' 汪师傅和他的朋友们',
//     title: '汪师傅的会客厅！',
//     date: '2019年11月15日',
//     description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//     imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//     url: '/friends',
// };

// const card2 = {
//   type: ' 编程小课堂',
//   title: '汪师傅的编程小课堂！',
//   date: '2019年12月15日',
//   description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//   imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//   url: '/friends',
// };


const Home = props => {

  // const { currentUser } = props;
  const classes = useStyles();

  // if(!currentUser){
  //   return <NotAuth />;
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.mainTitle}>
        <Typography variant="h1" gutterBottom color="primary" align="center">
          星狗网 ｜ 看见，好时光
        </Typography>
        <Typography variant="h4" gutterBottom color="black" align="center">
          与其在别处仰望， 不如在这里并肩。
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary" align="center">
          A professional kit that comes with ready-to-use Material-UI© components developed with one common goal in mind, help you build faster & beautiful applications. Each component is fully customizable, responsive and easy to integrate.
        </Typography>
      </div>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              新闻网 2011-2019
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              好友 2011-2019
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};


export default withRouter(Home);