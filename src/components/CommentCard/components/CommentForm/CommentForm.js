import React, { useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {
  Avatar, Button,
  Divider,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2),
    marginRight: theme.spacing(2),
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    display: 'none'
  },
  commentButton:{
    marginLeft: 'auto'
  },
  commentIcon: {
    marginRight: theme.spacing(1)
  }
}));

const CommentForm = props => {
  const {post, currentUser, className, handleComment, ...rest} = props;
  const classes = useStyles();
  const [value, setValue] = useState('');
  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handle = (value) => {
    handleComment(value);
    setValue("");
  }
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handle(value);
    }
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        src={currentUser.headUrl}
      />{' '}
      <Paper
        className={classes.paper}
        elevation={1}
      >
        <Input
          className={classes.input}
          disableUnderline
          onChange={handleChange}
          placeholder="据说帅的人已经评论了, 而丑的人还在犹豫!"
          value={value}
          onKeyDown={handleKeyDown}
        />
      </Paper>
      <Tooltip title="评论发射">
        <Button
          className={classes.commentButton}
          size="small"
          variant="contained"
          color={value.length > 0 ? 'primary' : 'default'}
          disabled={value.length <= 0}
          onClick={() => handle(value)}
        >
          <CommentIcon className={classes.commentIcon}/>
          评论
        </Button>
      </Tooltip>
      <Divider className={classes.divider}/>
    </div>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string
};

export default CommentForm;
