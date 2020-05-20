import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  content: {
    marginTop: theme.spacing(6)
  }
}));

const FAQ = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const faqs = [
    {
      title: '星狗网是用什么技术进行开发的?',
      description:
        '星狗网是一个 Material Design 的 Web 应用。 星狗网后端技术使用Java语言进行开发, 并结合流行的Spring Boot, Spring Security开发框架, 使用Json Web Token进行授权验证, 并基于MySQL, Redis作为数据存储基石完成构建。 ' +
        '星狗网前端采用Javascript语言进行开发, 并结合流行的React框架和Material UI组件, 基于开源项目进行构建。'
    },
    {
      title: '星狗网是如何部署的?',
      description:
        '本网站Web服务器, 数据库, 缓存服务器托管于百度智能云BCC， 静态文件与图片存储使用七牛云进行CDN加速， 短信服务由腾讯云提供支持， DNS域名解析服务由阿里云万网提供， 本站微信公众号服务后台基于新浪云SAE进行构建。'
    },
    {
      title: '本站由谁开发?',
      description:
        '本站由 @程序员汪师傅 进行开发并享有版权。'
    }
  ];

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <Typography
          align="center"
          variant="h3"
        >
          关于星狗网
        </Typography>
        <div className={classes.content}>
          <List disablePadding>
            {faqs.map(faq => (
              <ListItem key={uuid()}>
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText
                  primary={faq.title}
                  primaryTypographyProps={{ variant: 'h5' }}
                  secondary={faq.description}
                  secondaryTypographyProps={{ variant: 'body1' }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

FAQ.propTypes = {
  className: PropTypes.string
};

export default FAQ;
