import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Link } from '@material-ui/core';
import { Link as RouterLink} from 'react-router-dom';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SaveIcon from '@material-ui/icons/Save';
import CollectionsIcon from '@material-ui/icons/Collections';
import ChatIcon from '@material-ui/icons/Chat';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TimelapseIncon from '@material-ui/icons/Timelapse';
import DevicesIcon from '@material-ui/icons/Devices';
import DescriptionIcon from '@material-ui/icons/Description';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Button from '@material-ui/core/Button';
import TypeWriter from 'react-typewriter';




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8)
  },
  content: {
    paddingTop: 0,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'

    // textAlign: 'center'
  },
  button: {
    margin: theme.spacing(4),
  },
  items: {
    display: 'flex',
    flexDirection: 'rows',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={12}
        lg={12}
        xs={12}
        sm={12}
        md={12}
        xl={12}
      >
        <Grid
          item
        >
          <div className={classes.content}>
          <TypeWriter typing={1}>
            <Typography variant="h1" className={classes.items}><AssignmentIndIcon color="primary" style={{ fontSize: 40, paddingBottom: 10}}/>User Agreement</Typography>
            <Typography variant="h3" className={classes.items}><DesktopWindowsIcon color="primary" style={{ fontSize: 25, paddingRight:5 }}/>Who we are </Typography>
            <Typography paragraph className={classes.items}>Our website address is: http://www.wang-xin.cn.</Typography>
            <Typography variant="h2" className={classes.items}><SaveIcon color="primary" style={{ fontSize: 40, paddingBottom: 10, paddingRight:5 }}/>What personal data we collect and why we collect it </Typography>
            <Typography variant="h3" className={classes.items}><ChatIcon color="primary" style={{ fontSize: 25, paddingRight:5 }}/>Comments</Typography>
            <Typography paragraph className={classes.items}>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</Typography>

            <Typography paragraph className={classes.items}>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</Typography>

            <Typography variant="h3" className={classes.items}><CollectionsIcon color="primary" style={{ fontSize: 25, paddingRight:5 }}/>Media</Typography>
            <Typography paragraph className={classes.items}>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</Typography>

            <Typography variant="h4" className={classes.items}><ContactMailIcon color="primary" style={{ fontSize: 25 , paddingRight:5}}/>Contact forms</Typography>
            <Typography variant="h4" className={classes.items}><TimelapseIncon color="primary" style={{ fontSize: 25, paddingRight:5 }}/>Cookies</Typography>
            <Typography paragraph className={classes.items}>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</Typography>

            <Typography paragraph className={classes.items}>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</Typography>

            <Typography paragraph className={classes.items}>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</Typography>

            <Typography paragraph className={classes.items}>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</Typography>

            <Typography variant="h4" className={classes.items}><DevicesIcon color="primary" style={{fontSize : 25, paddingRight:5}}/>Embedded content from other websites</Typography>
            <Typography paragraph className={classes.items}>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</Typography>

            <Typography paragraph className={classes.items}>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.</Typography>

            <Typography variant="h4" className={classes.items}><DescriptionIcon color="primary" style={{fontSize : 25, paddingRight:5}}/>Analytics</Typography>
            <Typography paragraph className={classes.items}>Who we share your data with</Typography>
            <Typography paragraph className={classes.items}>How long we retain your data</Typography>
            <Typography paragraph className={classes.items}>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</Typography>

            <Typography paragraph className={classes.items}>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</Typography>

            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize : 25, paddingRight:5}}/>What rights you have over your data</Typography>
            <Typography paragraph className={classes.items}>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</Typography>

            <Typography variant="h3" className={classes.items}><ImportantDevicesIcon color="primary" style={{fontSize : 25, paddingRight:5}}/>Where we send your data</Typography>
            <Typography paragraph className={classes.items}>Visitor comments may be checked through an automated spam detection service.</Typography>
            <Typography paragraph className={classes.items}>Your contact information</Typography>
            <Typography paragraph className={classes.items}>Additional information</Typography>
            <Typography paragraph className={classes.items}>How we protect your data</Typography>
            <Typography paragraph className={classes.items}>What data breach procedures we have in place</Typography>
            <Typography paragraph className={classes.items}>What third parties we receive data from</Typography>
            <Typography paragraph className={classes.items}>What automated decision making and/or profiling we do with user data</Typography>
            <Typography paragraph className={classes.items}>What automated decision making and/or profiling we do with user data</Typography>
            <Typography paragraph className={classes.items}>Industry regulatory disclosure requirements</Typography>
            </TypeWriter>
            <Button variant="contained" fullWidth color="primary" className={classes.button}>
                <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                    style={{color: "white"}}
                >
                    阅读完毕
                </Link>
            </Button>
          </div>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
