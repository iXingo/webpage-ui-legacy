import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '10px 10px 10px'
  },
  firstLine: {
    margin: 'auto',
    fontSize: 20,
    paddingTop: 20,
    color: 'black',
    fontWeight: 500,
    lineHeight: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondLine: {
    fontSize: 48,
    margin: 'auto',
    color: 'black',
    paddingTop: 20,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  thirdLine: { 
    fontSize: 16,
    color: 'black',
    fontWeight: 500,
    padding: 10,
    lineHeight: 1.5,
  },
  svgIcon: {
    height: 30,
    width: 30
	},
	content: {
		padding: '20px 20px 0'
	},
	picture: {
		// height: 500,
  },
  grid: {
    padding: 30
  },
  buttonContent: {
    padding: '12px 32px',
    fontSize: 14,
    color: '#1074e7',
    backgroundColor: 'hsla(0,0%,100%,0)',
    borderColor: 'rgba(16,116,231,.5)',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid #1074e7',
    borderRadius: 3,
    transition: '.2s',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center'
  }, 

}));


const PicturePicture = props =>  {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grow in={true}>
        <Grid container justify="center" className={classes.content}>
          <Grid item xs={12} md={4} className={classes.grid}>
            <img className={classes.picture} src={props.context.image1} alt='Xindog APP'/>
            <div className={classes.main}>
              <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.firstLine}>
                {props.context.title1}
              </Typography>
              <Typography paragraph gutterBottom color="inherit" align="center" className={classes.thirdLine}>
                {props.context.subtitle1}
              </Typography>
              <div className={classes.button}>
                <Button className={classes.buttonContent}>
                  那些平凡之中的主角   →
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.grid}>
            <img className={classes.picture} src={props.context.image2} alt='Xindog APP'/>
            <div className={classes.main}>
              <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.firstLine}>
                {props.context.title2}
              </Typography>
              <Typography paragraph gutterBottom color="inherit" align="center" className={classes.thirdLine}>
                {props.context.subtitle2}
              </Typography>
              <div className={classes.button}>
                <Button className={classes.buttonContent}>
                  那些平凡之中的主角   →
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grow>
    </React.Fragment>
  );
};


export default withRouter(PicturePicture);