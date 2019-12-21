import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import TypeWriter from 'react-typewriter';
import Slide from '@material-ui/core/Slide';
import { ContentTitle,  PicturePicture, PictureText, PictureItems, TextPicture,
  PictureContentLine, ButtonPictureContent, CardPicture, PictureTextLink, TextPictureLink
 } from '../../components';


const useStyles = makeStyles(theme => ({
  mainTitle: {
    background: 'url(https://github.githubassets.com/images/modules/site/heroes/simple-codelines.svg), #2b3137',
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '160px 10px 120px'
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
//     imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '这是一篇演示文章',
//     date: '2019年10月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
// ];

// const card1 = {
//     type: ' 汪师傅和他的朋友们',
//     title: '汪师傅的会客厅！',
//     date: '2019年11月15日',
//     description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//     imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//     url: '/friends',
// };

// const card2 = {
//   type: ' 编程小课堂',
//   title: '汪师傅的编程小课堂！',
//   date: '2019年12月15日',
//   description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//   imgUrl: 'http://localhost:3000/images/img/undraw_special_event_4aj8.svg',
//   url: '/friends',
// };

const firstTitle ={
  
  sectionMain: '汪师傅这一年',
  sectionTitle: '2019过去了， 我很想念他',
	sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。我不断地寻找油腻的师姐在哪里， 额， 不， 是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

	picture: '/images/img/homepage/hello.png',
	textTitle: '上海， 这一年。',
  textContent: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '在一行行代码一封封邮件前开始了沪漂的生活',

  
	titleRight: '上海， 这一年。',
	contentRight: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  '

}

const SvgIcon = () => {
  return (
  <svg style={{width:20, height:20}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z" fill="currentColor" fill-rule="evenodd"></path></svg>
  );
}


const Home = props => {

  // const { currentUser } = props;
  const classes = useStyles();

  // if(!currentUser){
  //   return <NotAuth />;
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={800}>
        <Container className={classes.mainTitle}>
          <div className={classes.main}>
          <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.website}>
              星狗网
            </Typography>
            <Typography variant="h1" gutterBottom color="primary" align="center" className={classes.firstLine}>
              程序人生的寂静欢喜。
            </Typography>
            <TypeWriter typing={0.5}>
            <Typography variant="subtitle1" gutterBottom color="inherit" align="center" className={classes.secondLine}>
              有时候，我在思考，也许孤独是永恒的吧。一个的命运啊， 当然要靠自我的奋斗，还需要考虑到历史的行程。
            </Typography>
            </TypeWriter>
            <Typography variant="h4" gutterBottom color="primary" align="center" className={classes.thirdLine}>
              <SvgIcon /> 与其在别处仰望， 不如在这里并肩。
            </Typography>   
          </div>
      </Container>
      </Slide>



      
      <PictureTextLink context={firstTitle} {...props}  /> 

      <ContentTitle context={firstTitle} />
      <PicturePicture context={firstTitle} {...props} />
      
      <ContentTitle context={firstTitle} />
      <PictureText context={firstTitle} {...props} />

      <ContentTitle context={firstTitle} />
      <TextPicture context={firstTitle} {...props} />

      <ContentTitle context={firstTitle} />
      <PictureItems context={firstTitle} {...props} />

      <ContentTitle context={firstTitle} />
      <PictureContentLine context={firstTitle} {...props}  />

      <ContentTitle context={firstTitle} />
      <ButtonPictureContent context={firstTitle} {...props}  />

      <ContentTitle context={firstTitle} /> 
      <CardPicture context={firstTitle} {...props}  /> 

      <ContentTitle context={firstTitle} /> 
      <TextPictureLink context={firstTitle} {...props}  /> 

    </React.Fragment>
  );
};


export default withRouter(Home);