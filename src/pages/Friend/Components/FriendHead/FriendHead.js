import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  card: {
    maxWidth: 345,
    margin: 20,
    background: 'transparent',
    boxShadow: 'none',
  },
  media: {
    height: 140,
  },
  avatar: {
    margin: 'auto',
    width: 150,
    height: 150,
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
  name: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#1a73e8',
  },
  button: {
    justifyContent: 'center',
  },
  intro: {
    fontSize: 14,
  },
  appBar: {
    position: 'relative',
  },
  title: {
    paddingTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pro: {
    marginTop: 64,
    // marginBottom: 20,
    fontSize: 54,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 300,
    lineHeight: '50px',
    color: '#1a73e8',
  },

  subpro: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 400,
    color: 'black',
  },
  subtext: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
    fontWeight: 400
  },
  id: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  headImage: {
    height: 400,
    backgroundSize: 'cover',
    backgroundImage: 'url(https://img.ixingo.cn/pic/undraw_having_fun_iais.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
  },
  mainGrid: {
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const FriendHead = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      {/* Hero unit */}
      <Grid container className={classes.mainGrid}>
        <Grid container item xs={12} md={12} className={classes.headImage}/>
        <Grid item xs={10} md={8} className={classes.title}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.pro}>
            汪师傅和他的朋友们
          </Typography>
        </Grid>
        <Grid item xs={10} md={8} className={classes.grid}>
          <Typography variant="h3" align="center" color="textSecondary" paragraph className={classes.subpro}>
            人生得一知己足矣， 斯世当以同怀视之。
          </Typography>
        </Grid>
        <Grid item xs={10} md={8} className={classes.grid}>
          <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.subtext}>
            不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。
            走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。
            现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FriendHead;
