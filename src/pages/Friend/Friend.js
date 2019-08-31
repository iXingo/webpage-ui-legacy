import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendHead from './Components/FriendHead';
import FriendList from './Components/FriendList';

const Friend = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <FriendHead {...props}></FriendHead>
      <FriendList {...props}></FriendList>
    </React.Fragment>
  );
}

export default Friend;
