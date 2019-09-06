import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {Typography} from '@material-ui/core';
import { Verify, Tag } from '../../../../components';
import { Instagram } from 'react-content-loader'


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


const PostHeader = props => {

    const { history, post } = props;
    const { createdBy } = props.post;
    const classes = useStyles();

    if(!props.post.createdBy) return <Instagram />;
    return (
        <div>
                <Typography className={classes.title} variant="h1">
                      {props.post.title}
                </Typography>
                <Typography className={classes.author} variant="h5">
                      <strong>本文作者：</strong>
                  <Chip
                      icon={<FaceIcon />}
                      label={props.post.createdBy.name}
                      clickable
                      className={classes.chip}
                      color="primary"
                      deleteIcon={<DoneIcon />}
                      variant="outlined"
                  />
                </Typography>
                  
                <Typography className={classes.author} paragraph>
                      <strong>作者简介：</strong>
                      <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.avatar} />  
                      <strong>  {props.post.createdBy.name}</strong> <Verify/>{props.post.createdBy.verifiedContent}
                </Typography>
                <Divider />
                <Typography paragraph gutterBottom className={classes.abstrat}><strong>本文摘要：</strong>
                  {props.post.summary}
                </Typography> 
                <Typography variant="h6" gutterBottom className={classes.tags}><strong>本文标签：</strong>
                  {props.post.tags.map(tag => (
                      <Tag tag={tag}></Tag>
                  ))}
                </Typography>
                <Typography className={classes.tip} paragraph>
                  <strong>阅读提示：</strong>全文共 <strong>{props.post.wordCount}</strong> 字，阅读完毕预计需要 <strong>{props.post.readTime}</strong> 分钟。
                </Typography>
                <Divider />
                <Typography className={classes.posttime}variant="caption">
                  <strong>发布时间：</strong>{props.post.creationDateTime}
                </Typography>
            <Divider />
        </div>
    );

}

export default PostHeader;