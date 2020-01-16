import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../../../../components/CodeBlock";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20
  }
}));

const FriendContent = props => {

  const classes = useStyles();
  const {friend} = props;

  return (
      <div className={classes.root}>
        <ReactMarkdown source={friend.story}
                       renderers={{code: CodeBlock,}}
                       key={friend.id}
        />
      </div>
  );
};

export default FriendContent;