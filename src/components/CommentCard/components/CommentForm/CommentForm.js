import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {
  Avatar,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
// import {addComment} from "../../../../util/APIUtils";
// import {notification} from "antd";
// import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
// import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2)
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
  }
}));

const CommentForm = props => {
  const {post, className, handleComment, ...rest} = props;
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');

  const sender = {
    avatar: 'https://img.ixingo.cn/_head.jpg'
  };

  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
    console.log(event.target.value);
  };

  // const handleComment = (value) => {
  //   if (!post) {
  //     notification.success({
  //       message: '星狗网 Web App',
  //       description: "评论失败！",
  //     });
  //   }
  //   let commentRequest = {
  //     postId: post.id,
  //     content: value
  //   }
  //   console.log(value);
  //   console.log(commentRequest);
  // };

  // const handleAttach = () => {
  //   fileInputRef.current.click();
  //   alert(fileInputRef.current);
  // };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        src={sender.avatar}
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
        />
      </Paper>
      <Tooltip title="发射">
        <IconButton color={value.length > 0 ? 'primary' : 'default'} disabled={value.length <= 0}
                    onClick={() => handleComment(value)}>
          <CommentIcon/>
        </IconButton>
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
