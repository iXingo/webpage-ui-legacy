import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
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

import { Reactions, CommentBubble, CommentForm } from './components';
import {Instagram} from "@material-ui/icons";
import {addComment} from "../../util/APIUtils";
import {notification} from "antd";

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
    paddingTop: 0
  },
  message: {
    marginBottom: theme.spacing(2)
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
  commentForm:{
    marginBottom: theme.spacing(2)
  }
}));


const CommentCard = props => {
  const { post, currentUser, className, ...rest } = props;

  console.log(props);
  const classes = useStyles();
  if(!post || !post.comments){
    return <Instagram/>;
  }

  const comment = value => {
    if(!currentUser){
      alert("先登录啊~~~");
      return;
    }
    let commentRequest = {
      postId: post.id,
      content: value
    }
    addComment(commentRequest)
      .then(response => {
          notification.success({
            message: '星狗网 Web App',
            description: "评论成功！",
          });
          console.log(response);
          const newComment =
          {
            "id": 1,
            "content": "我评论",
            "source": "星狗网",
            "status": 1,
            "creationDateTime": null,
            "commenter": {
            "id": 7887167873792143360,
              "username": "shawang",
              "name": "Shawn Wang",
              "sex": null,
              "headUrl": null,
              "isVerified": 0,
              "verifiedContent": null,
              "introduction": null
          },
            "replies": null
          };
          post.comments.concat(newComment);
          value = "";
        }
      ).catch(error => {
      notification.success({
        message: '星狗网 Web App',
        description: "评论失败！" + error.message,
      });
      console.log(error);
    });
  }

  return (
    <div>
      <CommentForm className={classes.commentForm} post={props.post} handleComment={comment}/>
      {post.comments && (
      <div className={classes.comments}>
        {post.comments.map(comment => (
          <Card
            {...rest}
            className={clsx(classes.root, className)}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt="Person"
                  className={classes.avatar}
                  component={RouterLink}
                  src={comment.commenter.headUrl}
                  to="/profile/1/timeline"
                />
              }
              disableTypography
              subheader={
                <div className={classes.subheader}>
                  <AccessTimeIcon className={classes.accessTimeIcon} />
                  <Typography variant="body2">
                    {moment(comment.creationDateTime).fromNow()}
                  </Typography>
                </div>
              }
              title={
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/profile/1/timeline"
                  variant="h6"
                >
                  {comment.commenter.name}
                </Link>
              }
            />
            <CardContent className={classes.content}>
              <Typography
                className={classes.message}
                variant="body1"
              >
                {comment.content}
              </Typography>
              {post.media && (
                <CardActionArea className={classes.mediaArea}>
                  <CardMedia
                    className={classes.media}
                    // image={post.media}
                    img={"https://img.ixingo.cn/wangxin.png"}
                  />
                </CardActionArea>
              )}
              <Reactions
                className={classes.reactions}
                post={post}
              />
              <Divider className={classes.divider} />
              {comment.replies && (
                <div className={classes.comments}>
                  {comment.replies.map(reply => (
                    <CommentBubble
                      reply={reply}
                      key={reply.id}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          ))}
        </div>
      )}
    </div>
  );
};

CommentCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default withRouter(CommentCard);
