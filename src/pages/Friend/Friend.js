import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendHead from './Components/FriendHead';
import FriendList from './Components/FriendList';
// import { mergeClasses } from '@material-ui/styles';
import {makeStyles} from '@material-ui/core/styles';
import NotAuth from '../NotAuth';
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import FriendPage from "./FriendPage";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
}));

const Friend = props => {

  const classes = useStyles();

  const SchoolFriend = {
    sectionMain: '学生时代',
    sectionTitle: '君子淡如水，岁久情愈真。',
    sectionContent: '从学生时代相识的旧友伙伴，久经考验的好友。'
  }

  const SocietyFriend = {
    sectionMain: '工作生涯',
    sectionTitle: '山河不足重，重在遇知已。',
    sectionContent: '初入江湖的新知， 在这山长水远的江湖遇见的同行人。'
  }

  document.title = "汪师傅和他的朋友们 | 看见，好时光";
  if (!props.isAuthenticated) {
    return (<NotAuth next={"/friends"} {...props}/>);
  } else return (
    <div>
      <CssBaseline/>
      <FriendPage/>
      <FriendHead {...props}/>

      <ContentTitle context={SchoolFriend}/>
      <div className={classes.root}>
        <FriendList {...props}/>
      </div>

      <ContentTitle context={SocietyFriend}/>
      <div className={classes.root}>
        <FriendList {...props}/>
      </div>
    </div>
  );
};

export default Friend;
