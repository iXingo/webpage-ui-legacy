import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles(theme => ({
  list: {
    marginBottom: theme.spacing(2),
  },
}));

const FeaturedList = props => {

  const classes = useStyles();
    return (
      <List className={classes.root}>
          <ListItem >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText>
              Get your apps ready for the latest version of Android! Build new experiences with dark theme and gesture navigation!
            </ListItemText>
            <ListItemSecondaryAction>
            <SendIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider></Divider>
          <ListItem >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText>
              Get your apps ready for the latest version of Android! Build new experiences with dark theme and gesture navigation!
            </ListItemText>
            <ListItemSecondaryAction>
              <SendIcon />
            </ListItemSecondaryAction>
          </ListItem>
      </List>
    );
}


export default FeaturedList;