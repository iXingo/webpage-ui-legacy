import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Card, CardActions, CardContent, Divider, Grid, Typography} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Link from "@material-ui/core/Link";
// import Button from "@material-ui/core/Button";
// import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '25px auto',
    // border: `1px solid ${theme.palette.divider}`,
    // borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  description: {
    height: 64,
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.main,
    marginRight: theme.spacing(1)
  }
}));

const ServiceCard = props => {
  const {className, product, ...rest} = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img alt="Product" className={classes.image} src={product.imageUrl}/>
        </div>
        <Typography align="center" gutterBottom variant="h4">
          {product.title}
        </Typography>
        <Typography align="center" variant="body1" className={classes.description} >
          {product.description}
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <Typography display="inline" variant="body2">
              <Link component="a" href={product.url} target="_blank" style={{paddingRight: 5}}>
                查看详情 →
              </Link>
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            {/*<GetAppIcon className={classes.statsIcon}/>*/}
            <VerifiedUserIcon className={classes.statsIcon}/>
            <Typography display="inline" variant="body2">
              Powered By {product.serviceProvider}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ServiceCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ServiceCard;
