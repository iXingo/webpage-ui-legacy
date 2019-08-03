import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 360,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const CardPaper = props => {
  const { className, size, color, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.cardGrid} >
        <Grid item key={2019} xs={10} md={10}>
        <CardActionArea component="a" href="#">
            
            <Card className={classes.card}>
            <Hidden xsDown>
                <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
                />
            </Hidden>
            <div className={classes.cardDetails}>
                <CardContent>
                <Typography component="h2" variant="h5">
                    标题
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    日期
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    描述
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    继续阅读
                </Typography>
                </CardContent>
            </div>
            </Card>
        </CardActionArea>
        </Grid>
    </Grid>
  );
};



export default CardPaper;
