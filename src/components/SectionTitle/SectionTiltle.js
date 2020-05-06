import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import {ContentTitle} from '../../components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 0px',
    backgroundColor: '#07304c',
  },
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '10px 10px 10px',
  },
  firstLine: {
    margin: 'auto',
    fontSize: 20,
    paddingTop: 20,
    color: 'white',
    fontWeight: 500,
    lineHeight: 1.5,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  secondLine: {
    fontSize: 48,
    margin: 'auto',
    color: 'white',
    paddingTop: 20,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  thirdLine: {
    fontSize: 16,
    fontWeight: 400,
    padding: '20px 0',
    lineHeight: 1.5,
    color: 'white',
  },
  svgIcon: {
    height: 30,
    width: 30
  },
  content: {
    padding: '20px 20px 0'
  },
  picture: {
    height: 300,
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


const SectionTitle = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <div className={classes.root}>
        <Grid container justify="center" alignItems='center' className={classes.content}>
          <Grid item xs={12} md={5}>
            <div className={classes.main}>
              <Typography variant="h6" gutterBottom color="inherit" align="left" className={classes.firstLine}>
                {props.context.title}
              </Typography>
              <Typography paragraph gutterBottom color="textSecondary" align="left" className={classes.thirdLine}>
                {props.context.content}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <img className={classes.picture} src={props.context.image} alt='Xindog APP'/>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};


export default withRouter(SectionTitle);