import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import TypeWriter from 'react-typewriter';
import Slide from '@material-ui/core/Slide';
import {
  ButtonPictureContent,
  CardPicture,
  PictureContentLine,
  PictureItems,
  PicturePicture,
  PictureText,
  PictureTextLink,
  TextPicture,
  TextPictureLink
} from '../../components';


const useStyles = makeStyles(theme => ({
  mainTitle: {
    background: 'url(https://github.githubassets.com/images/modules/site/heroes/simple-codelines.svg), #2b3137',
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '100px 10px 36px'
  },
  website: {
    fontSize: 48,
    color: 'white',
    // padding: 10,
    lineHeight: 1.5,
  },
  firstLine: {
    fontSize: 30,
    color: '#1a73e8',
    // padding: 10,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 16,
    margin: 'auto',
    paddingTop: 20,
    lineHeight: 1.5,
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 14,
    paddingTop: 80,
    lineHeight: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  svgIcon: {
    height: 30,
    width: 30
  }

}));


// const featuredPosts = [
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '演示文章',
//     date: '2019年9月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '这是一篇演示文章',
//     date: '2019年10月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
// ];

// const card1 = {
//     type: ' 汪师傅和他的朋友们',
//     title: '汪师傅的会客厅！',
//     date: '2019年11月15日',
//     description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//     imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//     url: '/friends',
// };

// const card2 = {
//   type: ' 编程小课堂',
//   title: '汪师傅的编程小课堂！',
//   date: '2019年12月15日',
//   description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//   imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//   url: '/friends',
// };

const firstSection = {
  sectionMain: '汪师傅的2020年',
  sectionTitle: '情深深雨蒙蒙，本站开发测试中。',
  sectionContent: '所有内容和功能正在不断变化中，欢迎提供意见和建议。',

  image: 'https://img.ixingo.cn/undraw_new_decade_n4qd.svg',
  textTitle: '上海， 这一年。',
  textContent: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅的2020感叹',
};

const secondSection = {
  sectionMain: '汪师傅这一年',
  sectionTitle: '年年岁岁花相似， 岁岁年年人不同。',
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

const thirdSection = {
  sectionMain: '汪师傅这一年',
  sectionTitle: '2019过去了， 我很想念他',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/wangxin2019.png',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

};

const fourthSection = {
  sectionMain: '工作这一年',
  sectionTitle: '第一个， 完全工作的一年',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/9A7CA4FE-B8C1-4244-AFC6-FFF83AF34619_1_105_c.jpg',
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

const fifthSection = {
  sectionMain: '工作这一年',
  sectionTitle: '小猪佩奇身上纹， 汪欣初当社会人。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/9A7CA4FE-B8C1-4244-AFC6-FFF83AF34619_1_105_c.jpg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '在一行行代码一封封邮',
};

const SvgIcon = () => {
  return (
    <svg style={{width: 20, height: 20}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <path
        d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z"
        fill="currentColor" fillRule="evenodd"/>
    </svg>
  );
};


const Home = props => {

  // const { currentUser } = props;
  const classes = useStyles();

  // if(!currentUser){
  //   return <NotAuth />;
  // }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={800}>
        <Container className={classes.mainTitle}>
          <div className={classes.main}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.website}>
              星狗网
            </Typography>
            <Typography variant="h1" gutterBottom color="primary" align="center" className={classes.firstLine}>
              程序人生的寂静欢喜。
            </Typography>
            <TypeWriter typing={1}>
              <Typography variant="subtitle1" gutterBottom color="inherit" align="center"
                          className={classes.secondLine}>
                车马很慢，书信很远。一个（伪）文艺派程序员，在这个漫长的人生做一些简单的思考。
              </Typography>
            </TypeWriter>
            <Typography variant="h4" gutterBottom color="primary" align="center" className={classes.thirdLine}>
              <SvgIcon/> 与其在别处仰望， 不如在这里并肩。
            </Typography>
          </div>
        </Container>
      </Slide>

      <PictureTextLink context={firstSection} {...props}  />
      <PictureItems context={fourthSection} {...props} />
      <PicturePicture context={secondSection} {...props} />
      <CardPicture context={fourthSection} {...props}  />
      <PictureText context={fifthSection} {...props} />
      <PictureContentLine context={thirdSection} {...props}  />
      <TextPicture context={fourthSection} {...props} />
      <ButtonPictureContent context={fourthSection} {...props}  />
      <TextPictureLink context={fourthSection} {...props}  />

    </React.Fragment>
  );
};


export default withRouter(Home);