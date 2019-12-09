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
import { ContentTitle, PictureText } from '../../components';


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
  firstLine: { 
    fontSize: 48,
    color: 'white',
    padding: 10,
  },
  secondLine: {
    fontSize: 20,
    margin: 'auto',
    paddingTop: 20,
    lineHeight: 1
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 18,
    color: 'white',
    paddingTop: 80,
    lineHeight: 1
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
const SvgIcon = () => {
  return (
  <svg style={{width:20, height:20}} xmlns="http://www.w3.org/2000/svg" class="jumbotron-followup-icon ml-1 jumbotron-link-followup-icon ml-1" viewBox="0 0 40 40"><path d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z" fill="currentColor" fill-rule="evenodd"></path></svg>
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
      <Container className={classes.mainTitle}>
        <div className={classes.main}>
          <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.firstLine}>
            星狗网：
            看见，好时光
          </Typography>
          <TypeWriter typing={0.5}>
          <Typography variant="subtitle1" gutterBottom color="inherit" align="center" className={classes.secondLine}>
          　　最美丽的月色，总是出自荒芜的山谷。最厚重的文物，总是出自无字的旷野。最可笑的假话，总是振振有词。最可耻的诬陷，总是彬彬有礼。最不洁的目光，总在监察道德。最不通的文人，总在咬文嚼字。最勇猛的将士，总是柔声细语。最无聊的书籍，总是艰涩难读。最兴奋的相晤，总是昔日敌手。最愤恨的切割，总是早年好友。最动听的讲述，总是出自小人之口。最纯粹的孤独，总是属于大师 之门。最低俗 的交情被日夜的酒水浸泡着，越泡越大。最典雅的友谊被矜持的水笔描画着，越描越淡。
          </Typography>
          </TypeWriter>
          <Typography variant="h4" gutterBottom color="inherit" align="center" className={classes.thirdLine}>
            <SvgIcon /> 与其在别处仰望， 不如在这里并肩。
          </Typography>   
        </div>
      </Container>
      <ContentTitle></ContentTitle>
      <PictureText></PictureText>
      {/* <Grid container spacing={4} className={classes.cardGrid}>
              <Grid item xs={3} md={2}>
                <SummaryCard></SummaryCard>
              </Grid>
              <Grid item xs={3} md={2}>
                <SummaryCard></SummaryCard>
              </Grid>
          </Grid> */}
    </React.Fragment>
  );
};


export default withRouter(Home);