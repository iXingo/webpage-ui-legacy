import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withRouter} from 'react-router-dom';
import {ContentTitle} from '../../components';


// const useStyles = makeStyles(theme => ({
//   mainTitle: {
//     width: '100%',
//     maxWidth: '100%',
//     color: 'hsla(0,0%,100%,.6)',
//   },
//   main: {
//     padding: '10px 10px 10px'
//   },
//   firstLine: {
//     margin: 'auto',
//     fontSize: 20,
//     paddingTop: 20,
//     color: 'black',
//     fontWeight: 500,
//     lineHeight: 1.5,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   secondLine: {
//     fontSize: 48,
//     margin: 'auto',
//     color: 'black',
//     paddingTop: 20,
//     fontWeight: 300,
//     lineHeight: 1.5,
//   },
//   thirdLine: {
//     fontSize: 16,
//     fontWeight: 400,
//     padding: 10,
//     lineHeight: 1.5,
//   },
//   svgIcon: {
//     height: 30,
//     width: 30
//   },
//   content: {
//     padding: '20px 20px 0'
//   },
//   picture: {
//     // height: 500,
//   },
//   buttonContent: {
//     padding: '12px 32px',
//     fontSize: 14,
//     color: '#1074e7',
//     backgroundColor: 'hsla(0,0%,100%,0)',
//     borderColor: 'rgba(16,116,231,.5)',
//     whiteSpace: 'nowrap',
//     verticalAlign: 'middle',
//     cursor: 'pointer',
//     border: '1px solid #1074e7',
//     borderRadius: 3,
//     transition: '.2s',
//   },
//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: '0 auto',
//     textAlign: 'center'
//   },
//
//
// }));


const BigImage = props => {

  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <ContentTitle context={props.context}/>
      <img src={"https://img.ixingo.cn/wang-xin-alone.png"} style={{width: '100%', paddingTop: 40}}  alt={'wangxin'}/>
    </React.Fragment>
  );
};


export default withRouter(BigImage);