import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  colors
} from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  likeButton: {},
  likedButton: {
    color: colors.red[600]
  },
  replyButton: {
    marginLeft: 'auto'
  },
  replyIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Reactions = props => {
  const { post, className, ...rest } = props;
  const classes = useStyles();

  const handleReply = () => {
    alert("暂时无法回复, 功能还在开发中!");
  }
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Button
        className={classes.replyButton}
        size="small"
        variant="contained"
        onClick={handleReply}
      >
        <ReplyIcon className={classes.replyIcon}/>
        回复
      </Button>
    </div>
  );
};

Reactions.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default Reactions;
