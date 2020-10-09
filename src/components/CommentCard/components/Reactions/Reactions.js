import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Button, colors} from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  likeButton: {},
  likedButton: {
    color: colors.red[600]
  },
  deleteButton: {
    marginLeft: 'auto'
  },
  replyButton: {
    marginLeft: 20
  },
  replyIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Reactions = props => {
  const {comment, handleDeleteComment, className, ...rest} = props;
  const classes = useStyles();

  const handleReply = () => {
    alert("暂时无法回复, 功能还在开发中!");
  };

  const handleDelete = commentId => {
    handleDeleteComment(commentId)
  };


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Button
        className={classes.replyButton}
        variant="outlined"
        onClick={() => handleReply()}
      >
        <ReplyIcon className={classes.replyIcon}/>回复
      </Button>

      <Button
        className={classes.deleteButton}
        variant="outlinedPrimary"
        onClick={() => handleDelete(comment.id)}
      >
        <DeleteOutlineIcon className={classes.replyIcon}/>删除评论
      </Button>
    </div>
  );
};

Reactions.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default Reactions;
