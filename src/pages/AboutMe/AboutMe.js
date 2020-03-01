import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
// import Grid from '@material-ui/core/Grid';
import {MediaSection, PictureText, TextPicture} from '../../components';
import {Container} from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // height: theme.spacing(80)
  },
  grid: {
    height: '100%'
  },

  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainGrid: {
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify',
    backgroundColor: '#1a73e8',

  },
  contentGrid: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify',
    backgroundColor: 'paimary',
  },
  friendtime: {
    padding: '15px 0',
  },
  friend: {
    paddingTop: 20
  },
}));


const year2011 = {
  sectionMain: '汪师傅在二零一一',
  sectionTitle: '2011，初入校园。',
  sectionContent: '2011年，年轻青涩的汪师傅走出家乡，走向校园。',

  image: 'https://img.ixingo.cn/wangxin-2011.JPG',
  title: '2011年的汪师傅',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: 'https://img.ixingo.cn/feeling_proud_qne1.svg',
  linkText: '汪师傅',
};

const year2012 = {
  sectionMain: '汪师傅在二零一二',
  sectionTitle: '2012，初见成熟。',
  sectionContent: '2012年，初见成熟。',

  image: 'https://img.ixingo.cn/wangxin-2011.JPG',
  title: '2012年的汪师傅',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: 'https://img.ixingo.cn/feeling_proud_qne1.svg',
  linkText: '汪师傅',
};

const year2013 = {
  sectionMain: '汪师傅在二零一三',
  sectionTitle: '2013年，初见成熟。',
  sectionContent: '2013年，初见成熟。',

  image: 'https://img.ixingo.cn/wangxin-2011.JPG',
  title: '2012年的汪师傅',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: 'https://img.ixingo.cn/feeling_proud_qne1.svg',
  linkText: '汪师傅',
};

const AboutMe = props => {

  const classes = useStyles();

  document.title = "关于程序员汪师傅 | 星狗网， 看见好时光";


  return (
    <div className={classes.root}>

      <MediaSection {...props}/>

      <Container>
        <img src={"https://img.ixingo.cn/wang-xin-1.png"} style={{width: '100%', paddingTop: 40}} alt={'wangxin'}/>
        <img src={"https://img.ixingo.cn/wang-xin-2.png"} style={{width: '100%', paddingTop: 20}} alt={'wangxin'}/>
        <img src={"https://img.ixingo.cn/wang-xin-3.png"} style={{width: '100%', paddingTop: 20}} alt={'wangxin'}/>
      </Container>

      <TextPicture context={year2011} {...props} />
      <PictureText context={year2012} {...props} />
      <TextPicture context={year2013} {...props} />

    </div>
  );
};

AboutMe.propTypes = {
  history: PropTypes.object
};

export default AboutMe;