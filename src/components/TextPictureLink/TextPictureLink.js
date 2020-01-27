import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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
    padding: 10,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 48,
    margin: 'auto',
    color: 'black',
    paddingTop: 20,
    lineHeight: 1.5,
  },
  thirdLine: {
    fontSize: 16,
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
  link: {
    padding: 10,
    fontSize: 14,
  },


}));


const TextPictureLink = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <ContentTitle context={props.context}/>
      <Grid container justify="center" alignItems='center' className={classes.content}>
        <Grid item xs={12} md={4}>
          <div className={classes.main}>
            <Typography variant="h6" gutterBottom color="inherit" className={classes.firstLine}>
              {props.context.title}
            </Typography>
            <Typography paragraph gutterBottom color="textSecondary" className={classes.thirdLine}>
              {props.context.content}
            </Typography>
            <Link to={props.context.linkUrl} className={classes.link}>{props.context.linkText} →</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img className={classes.picture} src={props.context.image} alt={props.context.title}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default withRouter(TextPictureLink);