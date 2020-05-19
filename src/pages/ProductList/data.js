import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Winform程序制作',
    description:
      'Winform是使用Windows窗体程序开发平台, 汪师傅提供基于Winform的小程序开发服务。 应用案例: 某公司年会抽奖平台。',
    imageUrl: '/images/products/product_1.png',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: '微信小程序',
    description:
      '微信小程序是腾讯推出的是一种不需要下载安装即可使用的应用，用户扫一扫或搜一下即可打开应用。 应用案例: 人生九百格微信小程序',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: '网页/网站制作',
    description:
      '汪师傅可提供简易网站制作,以及基于单页面的活动展示网页制作。 应用案例: 本站',
    imageUrl: '/images/products/product_3.png',
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: '视频制作',
    description:
      '汪师傅可以提供视频剪辑制作服务。 应用案例: 上海第二年。 ',
    imageUrl: '/images/products/product_4.png',
    totalDownloads: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: '短信服务',
    description:
      '汪师傅可以提供基于短信的推送通知(无需安装客户端,服务端推送,支持定时推送)。 应用案例: 汪师傅天气短信服务。 ',
    imageUrl: '/images/products/product_5.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: '邮件服务',
    description:
      '汪师傅可以提供基于邮件的推送通知(无需安装客户端,服务端推送,支持定时推送,在一定条件下支持自定义邮件域名)。 应用案例: 汪师傅天气短信服务。',
    imageUrl: '/images/products/product_6.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  }
];
