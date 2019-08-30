import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const Tag = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar alt="Natacha" src="/images/avatars/000_.png" />}
        label={props.tag.name}
        className={classes.chip}
        color="primary"
      />
    </div>
  );
}


export default Tag;