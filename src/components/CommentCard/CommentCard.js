import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import 'moment/locale/zh-cn';
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

import { Reactions, ReplyBubble, CommentForm } from './components';
import {Instagram} from "@material-ui/icons";
import Grow from "@material-ui/core/Grow";

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
  const { post, handleComment, currentUser, className, ...rest } = props;
  moment.locale();
  console.log(moment.locale("zh-cn"));
  console.log(props);
  const classes = useStyles();
  if(!post || !post.comments){
    return <Instagram/>;
  }
  return (
    <div>
      <CommentForm className={classes.commentForm}
                   post={props.post}
                   handleComment={handleComment}
                   currentUser={currentUser}
      />
      {post.comments && (
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          timeout={1000}
        >
          <div className={classes.comments}>
            {post.comments.reverse().map(comment => (
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
                      to={comment.commenter.id}
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
                        img={"https://img.ixingo.cn/_head.png"}
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
