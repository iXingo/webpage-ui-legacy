import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {ContentTitle} from '../../components';


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
    fontWeight: 300,
    lineHeight: 1.5,
  },
  thirdLine: {
    fontSize: 16,
    fontWeight: 400,
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
  }

}));


const PictureText = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <ContentTitle context={props.context}/>
      <Grid container justify="center" alignItems='center' className={classes.content}>
        <Grid item xs={12} md={4}>
          <div className={classes.main}>
            <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.firstLine}>
              {props.context.title}
            </Typography>
            <Typography paragraph gutterBottom color="textSecondary" align="center" className={classes.thirdLine}>
              {props.context.content}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img className={classes.picture} src={props.context.image} alt={props.context.title}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default withRouter(PictureText);