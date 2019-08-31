import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Post from '../Post';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import {
  Typography,
} from '@material-ui/core';

import { Verify, Tag } from '../../components';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
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
    textAlign: 'center',
    flexBasis: '540px'
  },
  quoteText: {
    // color: theme.palette.white,
    color : '#3f51b5',
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color : '#3f51b5',
  },
  bio: {
    // color: theme.palette.white
    color : '#3f51b5',
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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
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
    padding: '0 30px',
    textAlign: 'justify'
  },
  title:{
    color : '#3f51b5',
    textAlign: 'center',
    margin: '30px 0'
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
  author:{
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  avatar : {
      display: 'inline-block',
      marginRight: 10
  },
  verified:{
      marginRight: 10
  },
  posttime: {
    padding: '15px 0',
  },
  post:{
      paddingTop: 20
  }
}));

const RestPasswd = props => {

  const { history } = props;

  const classes = useStyles();

  const name = '汪欣';


  const handleBack = () => {
    history.goBack();
  };

  const tags  = [
    {
        "id": 2,
        "name": "Wang Xin"
    },
    {
        "id": 1,
        "name": "Shawn Wang"
    }
  ];   

  return (
    <div className={classes.root}>
        <div className={classes.quote}>
            <div className={classes.quoteInner}>
                <Typography
                className={classes.quoteText}
                variant="h1"
                >
                汪师傅:
                </Typography>
                <Typography
                className={classes.quoteText}
                variant="h1"
                >
                看见，好时光
                </Typography>
                <div className={classes.person}>
                <Typography
                    className={classes.name}
                    variant="body1"
                >
                    &copy; Copyright 2019
                </Typography>
                <Typography
                    className={classes.bio}
                    variant="body2"
                >
                    Designed by Shawn Wang in Pudong New Area
                </Typography>
                </div>
            </div>
        </div>
        <div className={classes.content}>
            <Grid container className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8} className={classes.singlepost}>
                <Typography
                    className={classes.title}
                    variant="h1"
                >
                《我的青春消亡史》之“上海一年”
                </Typography>
                <Typography
                    className={classes.author}
                    variant="h5"
                ><strong>本文作者：</strong>
                <Chip
                    icon={<FaceIcon />}
                    label={name}
                    clickable
                    className={classes.chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                    variant="outlined"
                />
                </Typography>
                
                 <Typography
                    className={classes.author}
                    paragraph
                 ><strong>作者简介：</strong>
                 <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.avatar} />  
                 <strong>  汪欣</strong> <Verify/>&nbsp;&nbsp;南京航空航天大学 软件工程 硕士，现任NVIDIA中国Architect。
                 </Typography>
                <Divider />
                <Typography paragraph gutterBottom className={classes.abstrat}><strong>本文摘要：</strong>
                站在地铁2号线的轨道线前，来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。
                </Typography>
                
                <Typography variant="h6" gutterBottom className={classes.tags}><strong>本文标签：</strong>
                {tags.map(tag => (
                     <Tag tag={tag}></Tag>
                ))}
                </Typography>
                <Typography
                    className={classes.tip}
                    paragraph
                 ><strong>阅读提示：</strong>全文共 <strong>32546</strong> 字，阅读完毕预计需要 <strong>20</strong> 分钟。
                 </Typography>
              <Divider />
                <Typography
                    className={classes.posttime}
                    variant="caption"
                 ><strong>发布时间：</strong>2019年4月23日21分36秒345毫秒
                 </Typography>
                 <Divider />
              {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))} */}
                <div className={classes.post}>
			        <Post {...props}></Post>
                </div>
            </Grid>
            {/* <PostContent></PostContent> */}
            </Grid>
        </div>
    </div>
  );
};

RestPasswd.propTypes = {
  history: PropTypes.object
};

export default withRouter(RestPasswd);
