import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from '../../components';
import {
  Header,
  FAQ,
  PluginsSupport,
  SourceFiles,
  UserFlows
} from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const About = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="关于星狗网 | 星狗网, 看见好时光"
    >
      <Header />
      <UserFlows />
      <PluginsSupport />
      <SourceFiles />
      <FAQ />
    </Page>
  );
};

export default About;
