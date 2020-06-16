import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {makeStyles} from '@material-ui/styles';
import {withRouter} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
  Avatar,
  Link,
  Typography,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Reactions, ReplyBubble, CommentForm} from './components';
import {Instagram} from "@material-ui/icons";
import Grow from "@material-ui/core/Grow";
import SignInCard from "../SignInCard";
import Chip from "@material-ui/core/Chip";
import CodeBlock from "../CodeBlock";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
  },
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  accessTimeIcon: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    height: 14,
    width: 14,
    marginRight: 6
  },
  content: {
    paddingTop: theme.spacing(2)
  },
  message: {
    marginBottom: theme.spacing(2),
    color: 'black',
    fontSize: '15px',
  },
  mediaArea: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 400,
    backgroundPosition: 'initial'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  commentForm: {
    marginBottom: theme.spacing(2)
  },
  cardHeader: {
    backgroundColor: '#eee',
  },
  badge: {
    marginLeft: 10
  },
  verified: {
    display: 'inline-block',
    backgroundImage: 'url(https://img.ixingo.cn/icon.png)',
    backgroundRepeat: 'no-repeat',
    width: 14,
    height: 14,
    verticalAlign: -2,
    backgroundPosition: '0 -50px',
    marginLeft: 2,
  },
  veriedIcon : {
    paddingLeft: 5
  },
  caption: {
    padding: 10,
    marginBottom: 20
  },
  comments: {
    marginTop: 30,
    marginBottom: 30
  }

}));

const CommentCard = props => {

  const {post, handleComment, handleDeleteComment, currentUser, className, ...rest} = props;
  const classes = useStyles();

  const VerifiedCommter = () => {
    return (
      <a target="_blank" rel='noreferrer noopener' href="http://www.ixingo.com.cn" className={classes.veriedIcon}>
        <i title="星狗网认证作者" className={classes.verified}>
        </i>
      </a>
    );
  }

  if (!currentUser) {
    return <SignInCard {...props}/>;
  }
  moment.locale();
  if (!post || !post.comments) {
    return <Instagram/>;
  }
  return (
    <div>
      <CommentForm className={classes.commentForm}
                   post={props.post}
                   handleComment={handleComment}
                   handleDeleteComment={handleDeleteComment}
                   currentUser={currentUser}
      />
      <Typography className={classes.caption} variant="caption" style={{color: '#1a73e8'}}>
        评论区现已支持 MARKDOWN 语法.
      </Typography>
      <Typography className={classes.caption} variant="caption">
        * 星狗网对文章评论采用审核和缓存机制, 因此评论的添加和删除操作可能会有延迟.
      </Typography>
      {post.comments && (
        <Grow
          in={true}
          style={{transformOrigin: '0 0 0'}}
          timeout={1000}
        >
          <div className={classes.comments}>
            {post.comments.reverse().map(comment => (
              <Card
                {...rest}
                className={clsx(classes.root, className)}
              >
                <CardHeader
                  className={classes.cardHeader}
                  avatar={
                    <Avatar
                      alt="Person"
                      className={classes.avatar}
                      component={RouterLink}
                      src={comment.commenter.headUrl}
                      to={comment.commenter.id}
                    />
                  }
                  disableTypography
                  subheader={
                    <div className={classes.subheader}>
                      <AccessTimeIcon className={classes.accessTimeIcon}/>
                      <Typography variant="body2">
                        使用 {comment.source} 评论于 {moment(comment.creationDateTime).fromNow()}
                      </Typography>
                    </div>
                  }
                  title={
                    <div>
                      <Link
                        color="textPrimary"
                        component={RouterLink}
                        to="/profile/1/timeline"
                        variant="h6"
                      >
                        {comment.commenter.name}
                      </Link>
                      {post.createdBy.id === comment.commenter.id && (
                        <Chip
                          size="small"
                          avatar={<VerifiedCommter/>}
                          label="本文作者"
                          clickable
                          variant="outlined"
                          color="primary"
                          className={classes.badge}
                        />
                      )}
                    </div>
                  }
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.message}
                    variant="body1"
                  >
                    <ReactMarkdown source={comment.content}
                                   renderers={{code: CodeBlock}}
                                   key={comment.id}
                    />
                  </Typography>
                  {post.media && (
                    <CardActionArea className={classes.mediaArea}>
                      <CardMedia
                        className={classes.media}
                        // image={post.media}
                        img={"https://img.ixingo.cn/_head.png"}
                      />
                    </CardActionArea>
                  )}
                  <Reactions
                    className={classes.reactions}
                    comment={comment}
                    handleDeleteComment={handleDeleteComment}
                  />
                  <Divider className={classes.divider}/>
                  {comment.replies && (
                    <div className={classes.comments}>
                      {comment.replies.map(reply => (
                        <ReplyBubble
                          reply={reply}
                          key={reply.id}
                          comment={comment}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Grow>
      )}
    </div>
  );
};

CommentCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default withRouter(CommentCard);
