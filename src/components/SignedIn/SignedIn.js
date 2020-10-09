import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {ContentTitle} from '../../components';
import SignInCard from "../SignInCard/SignInCard";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles(theme => ({

  avatar: {
    display: 'inline-block',
  },
  user: {
    marginTop: 100,
    marginBottom: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

}));


const SignedIn = props => {

  const classes = useStyles();
  const {currentUser} = props;

  if (!currentUser) {
    return (
      <React.Fragment>
        <CssBaseline/>
        <ContentTitle context={props.context} {...props} />
        <SignInCard {...props}/>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom color="inherit" align="center" className={classes.user}>
          欢迎您，亲爱的 <Avatar alt={currentUser.name} src={currentUser.headUrl}
                          className={classes.avatar}/>{currentUser.name}, 请尽请浏览！
        </Typography>
      </React.Fragment>
    );
  }
};


export default withRouter(SignedIn);