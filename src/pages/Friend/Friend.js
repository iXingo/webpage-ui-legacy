import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendHead from './Components/FriendHead';
import FriendList from './Components/FriendList';
// import { mergeClasses } from '@material-ui/styles';
import {makeStyles} from '@material-ui/core/styles';
import NotAuth from '../NotAuth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
}));

const Friend = props => {

  const classes = useStyles();
  document.title = "汪师傅和他的朋友们 | 看见，好时光";
  if (!props.isAuthenticated) return <NotAuth/>;

  return (
    <div>
      <CssBaseline/>
      <FriendHead {...props}/>
      <div className={classes.root}>
        <FriendList {...props}/>
      </div>
    </div>
  );
};

export default Friend;
