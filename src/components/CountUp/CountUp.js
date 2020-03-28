import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timer from "react-compound-timer";

const useStyles = makeStyles(theme => ({
  root: {
    color : 'white',
    fontSize: 20,
    padding: 5,
    fontWeight: 500,
  }
}));


const CountUp = props => {
  const classes = useStyles();
  const getCurrentTime = () => {
    return Math.round(new Date().getTime());
  };
  return (
    <div className={classes.root}>
      <Timer
        initialTime={getCurrentTime() - 743011200000}
        direction="forward"
      >
        {() => (
          <React.Fragment>
            <Timer.Days /> 天，
            <Timer.Hours /> 小时，
            <Timer.Minutes /> 分钟，
            <Timer.Seconds /> 秒。
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
};


export default CountUp;