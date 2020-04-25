import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import {Typography} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginRight: 10,
    color: '#1a73e8'
  },
  chip: {
    margin: theme.spacing(1),
  },
  tags: {
    color: 'black',
    fontWeight: 500
  }
}));

const Tag = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LocalOfferOutlinedIcon colorPrimary/>
      <Typography variant="h6" className={classes.tags}>
        {props.tag.name}
      </Typography>
    </div>
  );
};


export default Tag;