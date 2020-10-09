import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      height: '100%',
      fontSize: 21,
    },
    height: '100%',
  }
}));


const BigImage = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <img src={"https://img.ixingo.cn/wang-xin-alone.png"} alt={'wangxin'} className={classes.root}/>
    </React.Fragment>
  );
};


export default withRouter(BigImage);