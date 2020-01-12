import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FriendContent from '../FriendContent';
import FriendHeader from '../FriendHeader';
import {FeaturedCard} from '../../../../components';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // height: theme.spacing(80)
  },
  grid: {
    height: '100%'
  },

  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainGrid: {
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify',
    backgroundColor: '#1a73e8',

  },
  contentGrid: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify',
    backgroundColor: 'paimary',
  },
  friendtime: {
    padding: '15px 0',
  },
  friend: {
    paddingTop: 20
  },
}));

const FriendMain = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.content}>
        <Grid container className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8} className={classes.singlefriend}>
            <FriendHeader friend={props.friend} {...props}></FriendHeader>
          </Grid>

        </Grid>

        <Grid container className={classes.contentGrid}>
          <Grid item xs={12} md={8} className={classes.singlefriend}>
            <Paper>
              <FeaturedCard></FeaturedCard>
            </Paper>
            <FriendContent friend={props.friend} {...props}></FriendContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

FriendMain.propTypes = {
  history: PropTypes.object
};

export default FriendMain;
