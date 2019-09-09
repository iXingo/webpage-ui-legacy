import Marquee from 'react-marquee';
import React from 'react';

const useStyles = makeStyles(theme => ({
    marque: {
        fontSize: 18,
        color: '#3f51b5',
        height: theme.spacing(3),
    }
  }));

const MarqueeText = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    return (
        <div className={classes.marque}>
          <Marquee  loop={true} hoverToStop={true} text="this is a very very very very very very very very very very very very very very very very long text this is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long textthis is a very very very very very very very very very very very very very very very very long text" />
        </div>
    );
}
export default MarqueeText;