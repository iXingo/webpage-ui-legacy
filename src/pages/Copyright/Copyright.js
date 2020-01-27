import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Typography} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CollectionsIcon from '@material-ui/icons/Collections';
import ChatIcon from '@material-ui/icons/Chat';
import ContactMailIcon from '@material-ui/icons/ContactMail';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  content: {
    paddingTop: 0,
    margin: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  button: {
    marginTop: theme.spacing(4),
  },
  items: {
    display: 'flex',
    flexDirection: 'rows',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  footer: {
    textAlign: 'center',
    color: '#1a73e8',
  }

}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
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
            <Typography variant="h1" className={classes.items}><AssignmentIndIcon color="primary"
                                                                                  style={{fontSize: 40}}/>
              版权保护投诉指引
            </Typography>
            <Typography variant="h4" className={classes.items}><ChatIcon color="primary"
                                                                         style={{fontSize: 25, paddingRight: 5}}/>
              【首部及导言】
            </Typography>
            <Typography paragraph className={classes.item}>
              星狗为用户提供丰富的互联网信息服务，包括信息存储空间、搜索及链接等服务。为保护版权人（著作权人）的合法权利，根据我国相关法律法规的规定，星狗将通过以下途径保护信息存储空间服务中展示的、搜索及链接服务中被存储的、被搜索的或者被链接的作品的著作权：
              <br/>
              “作品”是指受《中华人民共和国著作权法》保护的文学、艺术和自然科学、社会科学、工程技术等作品。
              <br/>
              “权利人”是指作品的版权人（著作权人）或者经版权人（著作权人）合法授权而享有作品相关权利的自然人、法人或者其他组织。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><CollectionsIcon color="primary" style={{
              fontSize: 25,
              paddingRight: 5
            }}/>
              一、【通知程序】
            </Typography>
            <Typography paragraph className={classes.item}>
              权利人认为星狗所提供的信息存储空间服务中展示的、搜索及链接服务中被存储的、被搜索的或者被链接的作品侵犯了其相关作品版权，可向星狗提交书面通知，要求星狗删除该涉嫌侵权作品，或者断开该涉嫌侵权作品的链接。通知需权利人亲笔签名，权利人为单位的，则需加盖单位公章。
              <br/>
              通知应当包含下列内容：
              <br/>
              （一） 权利人的姓名（名称）、联系方式、地址、营业执照（单位）、身份证（个人）、相关授权证明等证明权利人主体身份的材料；
              <br/>
              （二） 要求删除或者断开链接的涉嫌侵权作品的准确名称和网络地址；
              <br/>
              （三） 认为构成侵权的初步证明材料；
              <br/>
              1. 权利人的权属证明材料：包括但不限于相关有权机构颁发的版权证书、作品首次公开发表或发行日期证明材料、创作手稿、经权威机构签发的作品创作时间戳、作品备案证书等能证明权利人拥有相关权利的有效权属证明材料等。
              <br/>
              2. 被投诉方的行为构成侵权的证明材料：包括但不限于被投诉方的行为构成对权利人的版权造成侵犯的有效证明材料等。
              <br/>
              （通知的格式可参考附件一）
              <br/>
              权利人应保证通知书中的陈述和提供的相关材料皆是真实、有效和合法的，并保证承担由此产生的全部法律责任。
              <br/>
              星狗收到权利人的通知后，将删除涉嫌侵权的作品或者断开涉嫌侵权作品的链接，并同时将通知书转送涉嫌侵权作品的提供者。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><ContactMailIcon color="primary" style={{
              fontSize: 25,
              paddingRight: 5
            }}/>
              二、【反通知程序】
            </Typography>
            <Typography paragraph className={classes.item}>
              涉嫌侵权作品提供者(反通知人）收到星狗转送的通知书后，认为其提供的作品并未侵犯他人权利的，可向星狗提交书面反通知，要求恢复被删除的作品或被断开的作品链接。反通知需反通知人亲笔签名，反通知人为单位的，则需加盖单位公章。反通知应当包含下列内容：
              <br/>
              （一） 反通知人的姓名（名称）、联系方式、地址、营业执照（单位）、身份证（个人）、相关授权证明等证明反通知人主体身份的材料；
              <br/>
              （二） 要求恢复被删除的作品，或者被断开链接的作品的准确名称和网络地址；
              <br/>
              （三）
              认为不构成侵权的初步证明材料，包括但不限于相关有权机构颁发的对作品享有版权的权属证明、作品首次公开发表或发行日期证明材料、创作手稿、经权威机构签发的作品创作时间戳、作品备案证书等能证明作品提供者拥有相关权利的有效权属证明材料。
              <br/>
              （反通知的格式可参考附件一）
              <br/>
              反通知人应保证反通知中的陈述和提供的相关材料皆是真实、有效和合法的，并保证承担由此产生的全部法律责任。
              <br/>
              星狗收到反通知人的反通知后，将恢复被删除的作品或者被断开的作品链接，同时将反通知人的反通知转送权利人。星狗对恢复被删除作品，或者被断开作品链接的行为不承担任何法律责任。
              <br/>

              权利人不得再通知星狗删除该作品或者断开该作品的链接。
              <br/>
            </Typography>

            <Typography variant="body1" className={classes.footer}>
              <a href={"https://mat1.gtimg.com/www/pdf/2007080103.pdf"}
                 style={{color: '#1a73e8', textDecoration: 'underline'}}>《要求删除或断开链接侵权网络内容的通知》【PDF file】</a>
            </Typography>
            <Typography variant="body1" className={classes.footer}>
              <a href={"https://mat1.gtimg.com/www/pdf/2007080102.pdf"}
                 style={{color: '#1a73e8', textDecoration: 'underline'}}>《要求恢复被删除或断开链接的网络内容的说明》【PDF file】</a>
            </Typography>
            <Typography variant="body1" className={classes.footer}>
              <a href={"https://mat1.gtimg.com/www/pdf/2007080101.pdf"}
                 style={{color: '#1a73e8', textDecoration: 'underline'}}>《要求删除或断开链接侵权网络内容的通知》填写说明【PDF file】</a>
            </Typography>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Copyright;
