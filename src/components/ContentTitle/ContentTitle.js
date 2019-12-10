import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
// import TypeWriter from 'react-typewriter';


const useStyles = makeStyles(theme => ({
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '160px 10px 20px'
  },
  firstLine: { 
    fontSize: 16,
    padding: 10,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 36,
    margin: 'auto',
    color: 'black',
    paddingTop: 20,
    lineHeight: 1.5,
  },
  thirdLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    fontSize: 16,
    paddingTop: 20,
    fontWeight: 300,
    lineHeight: 1.5,
    textAlign: 'center',
    maxWidth: 450
  },
  svgIcon: {
    height: 30,
    width: 30
  }

}));


// const SvgIcon = () => {
//   return (
//   <svg style={{width:20, height:20}} xmlns="http://www.w3.org/2000/svg" class="jumbotron-followup-icon ml-1 jumbotron-link-followup-icon ml-1" viewBox="0 0 40 40"><path d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z" fill="currentColor" fill-rule="evenodd"></path></svg>
//   );
// }

const Home = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.mainTitle}>
        <div className={classes.main}>
          <Typography variant="h6" gutterBottom color="textSecondary" align="center" className={classes.firstLine}>
            {props.context.main}
          </Typography>
          {/* <TypeWriter typing={0.5}> */}
          <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.secondLine}>
            {props.context.title}
          </Typography>
          {/* </TypeWriter> */}
          <Typography variant="h4" gutterBottom color="textSecondary" align="center" className={classes.thirdLine}>
             {props.context.content}
          </Typography>   
        </div>
      </Container>
    </React.Fragment>
  );
};


export default withRouter(Home);