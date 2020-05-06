import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import HeaderUnit from '../../components/HeaderUnit';
// import AlignItemsList from '../../components/AlignItemsList';
// import Container from '@material-ui/core/Container';
// import PostCard from '../../components/PostCard';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
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
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
    width: '60%',
    height: 300,
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  section: {
    margin: '0 auto',
    padding: theme.spacing(3),
    maxWidth: 900,
    height: '100%',
    width: "100%",
  },
  read: {
    paddingTop: theme.spacing(10)
  },
  root: {
    backgroundColor: theme.palette.background.default,
    // height: '600'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://img.ixingo.cn/sign-up.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px',
    padding: theme.spacing(8)
  },
  quoteText: {
    // color: theme.palette.white,
    color: '#1a73e8',
    fontWeight: 500
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color: '#1a73e8',
  },
  bio: {
    // color: theme.palette.white
    color: '#1a73e8',
  },
  contentContainer: {},
  content: {
    // height: '35vh',
    display: 'flex',
    flexDirection: 'column'
  },
}));


const projects = [
  {
    "name": "合影计划",
    "description": "相见时难别亦难。此计划的目的是珍惜每一次相聚的时光，与汪师傅一起合影，一起留下相聚的难忘瞬间。",
    "pictureUrl": "https://img.ixingo.cn/undraw_photo_session_clqr.svg",
    "involveUrl": ""
  },
  {
    "name": "好友列传",
    "description": "加入该计划您将被收录到本站'好友'频道。'好友'频道旨在收录并记录汪师傅所在好友的相关信息。",
    "pictureUrl": "https://img.ixingo.cn/undraw_team_ih79.svg",
    "involveUrl": ""
  },
  {
    "name": "一声问候",
    "description": "加入该计划后您的邮件地址或者短信将在固定周期内（通常是一天）收到汪师傅的问候信息（目前是您当前所在位置的天气报告，后期将会根据实际情况提供更好的问候信息）",
    "pictureUrl": "https://img.ixingo.cn/undraw_weather_notification_4sbo.svg",
    "involveUrl": ""
  },
  {
    "name": "好友相聚",
    "description": "现在就预约和汪师傅一起聚餐喝茶，老友相聚。（汪师傅现在坐标上海， 当你出差或旅行时可以参加该计划，您将会收到汪师傅在上海的住址和联系信息。）",
    "pictureUrl": "https://img.ixingo.cn/undraw_special_event_4aj8.svg",
    "involveUrl": ""
  }
];

const Project = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.quote}>
          <div className={classes.quoteInner}>
            <Typography className={classes.quoteText} variant="h1">汪师傅:</Typography>
            <Typography className={classes.quoteText} variant="h1">看见，好时光</Typography>
            <div className={classes.person}>
              <Typography className={classes.name} variant="body1">&copy;Copyright 2020</Typography>
              <Typography className={classes.bio} variant="body2">Designed by Shawn Wang in Pudong New
                Area.</Typography>
            </div>
          </div>
        </div>
        {projects.map(project => (
          <HeaderUnit project={project} {...props} />
        ))
        }
      </div>
      {/*<Container maxWidth="lg" className={classes.container}>*/}
      {/*  <PostCard/>*/}
      {/*  <div className={classes.section}>*/}
      {/*    <AlignItemsList/>*/}
      {/*    <AlignItemsList/>*/}
      {/*    <AlignItemsList/>*/}
      {/*  </div>*/}
      {/*</Container>*/}
    </React.Fragment>
  );
};


export default Project;
