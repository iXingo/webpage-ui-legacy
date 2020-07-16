import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import NewsContent from "../NewsContent";
import {Typography} from "@material-ui/core";
import {Instagram} from "react-content-loader";
import moment from 'moment';
import 'moment/locale/zh-cn';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default.white,
    padding: 20,
    // height: theme.spacing(80)
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
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/blog/UNADJUSTEDNONRAW_thumb_f6f.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    paddingTop: 500,
    textAlign: 'center',
    flexBasis: 540,
  },
  quoteText: {
    // color: theme.palette.white,
    color: '#1a73e8',
    fontWeight: 300
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
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  mainGrid: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify'
  },
  title: {
    fontSize: 22,
    lineHeight: 1.4,
    marginBottom: 14,
  },
  field: {
    width: '70%'
  },
  abstrat: {
    margin: '20px 0',
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  author: {
    color: 'rgba(0,0,0,0.3)',
     fontWeight: 500,
    marginBottom: 20
  },
  avatar: {
    display: 'inline-block',
    marginRight: 10
  },
  verified: {
    marginRight: 10
  },
  posttime: {
    padding: '15px 0',
  },
  post: {
    paddingTop: 20
  },
  copyright: {
    backgroundColor: '#1a73e8',
    color: 'white',
    fontSize: 12,
  },
  newsImage: {
    flexGrow: 0,
    maxWidth: '66.666667%',
    flexBasis: '66.666667%',
    textAlign: 'center'
  },
  newsTitle: {
    marginTop: 20,
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      maxWidth: 980
    }
  },
  authorInfo: {
    padding: '10px 0',
    fontSize: 12
  },
  summary: {
    marginTop: 10,
    padding: 10,
    maxWidth: '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: 'rgb(246, 246, 246)',
    boxSizing: 'border-box !important',
    overflowWrap: 'break-word !important',
  }
}));

const NewsMain = props => {

  const classes = useStyles();

  moment.locale();

  if (!props.news.createdBy) return <Instagram/>;
  return (
    <div className={classes.root}>
      <div className={classes.newsTitle}>
        <Typography className={classes.title} >
          {props.news.title}
        </Typography>
        <Typography className={classes.author} >
          {props.news.createdBy.name} <a style={{color: '#576b95', padding: '0 8px'}}>星狗网</a> {moment(props.news.creationDateTime).format('LLLL')}
        </Typography>
        <img src={props.news.picUrl} alt={props.news.title}/>
        <Typography className={classes.authorInfo} >
          作者 ｜ {props.news.createdBy.name} ｜ {props.news.createdBy.verifiedContent}
        </Typography>
        <Typography className={classes.summary} >
          <strong>导读:</strong> {props.news.summary}
        </Typography>
      </div>

      <div className={classes.content}>
        <Grid container className={classes.mainGrid}>
          {/* Main content */}

          {/*<Grid item xs={12} md={8} className={classes.singleNews}>*/}
          {/*  <NewsHeader post={props.news} {...props}/>*/}
          {/*</Grid>*/}
          <Grid item xs={12} md={8} className={classes.singleNews}>
            <NewsContent post={props.news} {...props}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

NewsMain.propTypes = {
  history: PropTypes.object
};

export default NewsMain;
