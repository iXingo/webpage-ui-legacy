import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendHead from './Components/FriendHead';
import FriendList from './Components/FriendList';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
  },
}));

const Friend = props => {

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <FriendHead {...props}></FriendHead>
      <div className={classes.root}>
        <FriendList {...props}></FriendList>
      </div>
    </div>
  );
}

export default Friend;
