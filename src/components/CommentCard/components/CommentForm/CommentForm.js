import React, {useRef, useState} from 'react';
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
import ReplyIcon from "@material-ui/icons/Reply";

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
  const fileInputRef = useRef(null);
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
          placeholder="留下评论再走... 帅的人已经评论了, 而丑的人还在犹豫!"
          value={value}
        />
      </Paper>
      <Tooltip title="发射">
        <Button
          className={classes.commentButton}
          size="small"
          variant="contained"
          color={value.length > 0 ? 'primary' : 'default'}
          disabled={value.length <= 0}
          onClick={() => handle(value)}
        >
          <ReplyIcon className={classes.commentIcon}/>
          评论
        </Button>
      </Tooltip>

      <Divider className={classes.divider}/>
      <input
        className={classes.fileInput}
        ref={fileInputRef}
        type="file"
      />
    </div>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string
};

export default CommentForm;
