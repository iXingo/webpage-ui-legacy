import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendHead from './Components/FriendHead';
import FriendList from './Components/FriendList';
// import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import NotAuth from '../NotAuth';

const useStyles = makeStyles(theme => ({
  root:{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
  },
}));

const Friend = props => {

  const classes = useStyles();
  if(!props.isAuthenticated) return <NotAuth />;

  return (
    <div>
      <CssBaseline />
      <FriendHead {...props}/>
      <div className={classes.root}>
        <FriendList {...props}/>
      </div>
    </div>
  );
}

export default Friend;
