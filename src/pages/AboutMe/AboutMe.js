import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
// import Grid from '@material-ui/core/Grid';
import {
  BigImage,
  ButtonPictureContent,
  CardPicture,
  MediaSection,
  PictureContentLine,
  PictureItems,
  PicturePicture,
  PictureText,
  PictureTextLink, TextPicture
} from '../../components';
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


const contributionSection = {
  sectionMain: '星狗网正在开发测试中',
  sectionTitle: '小楼昨夜又东风，  本站开发测试中。',
  sectionContent: '所有内容和功能正在不断变化中，欢迎提供意见和建议。',

  image: 'https://img.ixingo.cn/undraw_new_decade_n4qd.svg',
  textTitle: '星狗网的前世与今生',
  textContent: '2013年的暑期，我注册了第一个域名"wangxin.ml"(因为.ml与.cf是免费注册的域名服务)，并且在主机屋（免费使用的网站托管服务）使用Wordpress（一个基于PHP开发的全球流行的建站程序）搭建了星狗网的第一个版本',
  linkUrl: '',
  linkText: '更多关于星狗网的故事',
};


const newsSection = {
  sectionMain: '一个平凡人的新闻',
  sectionTitle: '东风未肯入东门，  看看今天啥新闻。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_steps_ngvm.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅的好友',
  contentOne: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  titleTwo: '汪师傅',
  contentTwo: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  titleThree: '汪师傅的好友',
  contentThree: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

};

const blogSection = {
  sectionMain: '一年又一年',
  sectionTitle: '年年岁岁花相似，  岁岁年年人不同。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  imageLeft: 'https://img.ixingo.cn/wangxin2019.png',
  titleLeft: '上海， 这一年。',
  contentLeft: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkTextLeft: '和汪师傅一起展望新年',

  imageRight: 'https://img.ixingo.cn/masterwang2019.png',
  titleRight: '上海， 这一年。',
  contentRight: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkTextRight: '和汪师傅一起回顾2019',
};

const workSection = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '忽如一夜春风来， ',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_dev_productivity_umsq.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',
};

const friendSection = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '今时不与旧日同，  陈年好友情更浓。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/wangxin2019.png',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

};

const selfSection = {
  sectionMain: '我们终将成为社会人',
  sectionTitle: '小猪佩奇身上纹，  汪欣也成社会人。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/peiqi.png',
  title: '社会人，汪师傅。',
  content: '汪欣（Shawn Wang），汪师傅，男，汉族，安徽六安人，2018年4月参加工作，是一名程序员，研究生，党员；现就职于NVIDIA中国，从事软件研发工作。\n' +
    '简单概括一下汪师傅的生平就是：生于安徽，求学江苏，搬砖上海。',
  linkUrl: '',
  linkText: '关于社会人汪师傅',
};


const sixth = {
  sectionMain: '加油，汪师傅',
  sectionTitle: '问君能有几多愁，   今年汪欣要加油。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/feeling_proud_qne1.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',

};

const programmerSection = {
  sectionMain: '一些有趣简单的代码程序',
  sectionTitle: '皎皎空中孤月轮，   汪欣教你学编程。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_code_review_l1q9.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',

};


const studySection = {
  sectionMain: '学习新知识',
  sectionTitle: '夜半无人私语时，   一起研究线程池。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_hacker_mind_6y85.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',

};


const AboutMe = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MediaSection {...props}/>
      <Container>
        <img src={"https://img.ixingo.cn/wang-xin-1.png"} style={{width: '100%', paddingTop: 40}}  alt={'wangxin'}/>
        <img src={"https://img.ixingo.cn/wang-xin-2.png"} style={{width: '100%', paddingTop: 20}}  alt={'wangxin'}/>
        <img src={"https://img.ixingo.cn/wang-xin-3.png"} style={{width: '100%', paddingTop: 20}}  alt={'wangxin'}/>
      </Container>

      <PictureTextLink context={contributionSection} {...props}  />
      <PictureItems context={newsSection} {...props} />
      <PicturePicture context={blogSection} {...props} />
      <CardPicture context={workSection} {...props}  />
      <PictureText context={selfSection} {...props} />
      <PictureContentLine context={friendSection} {...props}  />
      <TextPicture context={sixth} {...props} />
      <ButtonPictureContent context={programmerSection} {...props}  />
      <PictureTextLink context={studySection} {...props}  />
      <BigImage context={contributionSection} {...props}  />
    </div>
  );
};

AboutMe.propTypes = {
  history: PropTypes.object
};

export default AboutMe;