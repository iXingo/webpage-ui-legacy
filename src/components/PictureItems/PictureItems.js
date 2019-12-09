import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
// import Container from '@material-ui/core/Container';



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
    fontSize: 16,
    color: 'black',
    fontWeight: 300,
    padding: 10,
  },
  secondLine: {
    fontSize: 48,
    margin: 'auto',
    color: 'black',
    paddingTop: 20,
    fontWeight: 300,
    lineHeight: 1
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 20,
    paddingTop: 20,
    color: 'black',
    fontWeight: 300,
    lineHeight: 1
  },
  svgIcon: {
    height: 30,
    width: 30
	},
	content: {
		padding: '20px 20px 0'
	},
	picture: {
    height: '100%',
    padding: 15
  },
  items:{
    height: '100%',
    padding: 15,
    justifyContent: 'center'
  }

}));


const PictureItems = props =>  {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
			<Grid container justify="center" className={classes.content}>
				<Grid item xs={12} md={4} >
					<img className={classes.picture} src={props.context.image} alt='Xindog APP'/>
				</Grid>
				<Grid item xs={12} md={4} >
          <div className={classes.items}>
            <Paper>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.thirdLine}>
                  {props.context.title1}
                </Typography>
                <Typography paragraph gutterBottom color="inherit" align="center" className={classes.firstLine}>
                  {props.context.content1}
                </Typography>
              </div>
            </Paper>
            <Paper>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.thirdLine}>
                  {props.context.title2}
                </Typography>
                <Typography paragraph gutterBottom color="inherit" align="center" className={classes.firstLine}>
                  {props.context.content2}
                </Typography>
              </div>
            </Paper>
            <Paper>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.thirdLine}>
                  {props.context.title3}
                </Typography>
                <Typography paragraph gutterBottom color="inherit" align="center" className={classes.firstLine}>
                  {props.context.content3}
                </Typography>
              </div>
            </Paper>
          </div>
				</Grid>
			</Grid>
    </React.Fragment>
  );
};


export default withRouter(PictureItems);