import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {Typography} from '@material-ui/core';
import {Verify} from '../../../../components';
import {Instagram} from 'react-content-loader'


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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    paddingTop: 524,
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
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
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
}));


const NewsHeader = props => {

  const classes = useStyles();
  if (!props.news.createdBy) return <Instagram/>;
  return (
    <div>
      <Typography className={classes.author} variant="h5">
        <strong>新闻报道：</strong>
        <Chip
          icon={<FaceIcon/>}
          label={props.news.createdBy.name}
          clickable
          className={classes.chip}
          color="primary"
          deleteIcon={<DoneIcon/>}
          variant="outlined"
        />
      </Typography>
      <Typography variant="h6" className={classes.author}>
        <strong>作者简介：</strong>
        <Avatar alt="报道作者" src={props.news.createdBy.headUrl} className={classes.avatar}/>
        <strong>  {props.news.createdBy.name}</strong> <Verify/>{props.news.createdBy.verifiedContent}
      </Typography>
      <Divider/>
      <Typography variant="h6" gutterBottom className={classes.abstrat}>
        <strong>新闻摘要：</strong>{props.news.summary}
      </Typography>
      <Typography variant="h6" gutterBottom className={classes.tags}>
        <strong>新闻标签：</strong>
        {props.news.tags.map(tag => (
          <div style={{paddingRight: 10}}>
            <Chip label={tag.name} component="a" href="chip" clickable variant="outlined" size={"small"}/>
          </div>
        ))}
      </Typography>
      <Typography variant="h6" className={classes.tip}>
        <strong>阅读提示：</strong>全文共 <strong>{props.news.wordCount}</strong> 字，阅读完毕预计需要 <strong>{props.news.readTime}</strong> 分钟。
      </Typography>
      <Divider style={{margin: "5px 0"}}/>
      <Typography variant="caption" className={classes.posttime}>
        报道者<strong style={{color: '#1a73e8'}}>{props.news.createdBy.name}</strong>使用<strong
        style={{color: '#1a73e8'}}>{props.news.source}</strong>发表于格林威治时间<strong
        style={{color: '#1a73e8'}}>{props.news.creationDateTime}</strong>。
      </Typography>
      <Divider style={{margin: "5px 0"}}/>
    </div>
  );

};

export default NewsHeader;