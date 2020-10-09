import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

import axios from '../../../../util/axios';
import {GeneralSettings, ProfileDetails} from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const General = props => {
  const {className, ...rest} = props;

  const classes = useStyles();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchProfile = () => {
      axios.get('/api/account/profile').then(response => {
        if (mounted) {
          setProfile(response.data.profile);
        }
      });
    };

    fetchProfile();

    return () => {
      mounted = false;
    };
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <ProfileDetails profile={profile}/>
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <GeneralSettings profile={profile}/>
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string
};

export default General;
