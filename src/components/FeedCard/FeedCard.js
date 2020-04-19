import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
  Avatar,
  Link,
  Typography,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { Reactions, CommentBubble, CommentForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
  },
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  accessTimeIcon: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    height: 14,
    width: 14,
    marginRight: 6
  },
  content: {
    paddingTop: 0
  },
  message: {
    marginBottom: theme.spacing(2)
  },
  mediaArea: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 400,
    backgroundPosition: 'initial'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const post = {
  "id": "7887168048623316992",
  "title": "我的青春消亡史之《上海一年》",
  "shortUrl": "shanghai-one-year",
  "summary": "站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。",
  "content": "## 上海一年\n\n站在地铁2号线的轨道线前，地铁隧道的来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。\n\n### 初来上海\n\n![UNADJUSTEDNONRAW_thumb_f6f](/images/blog/UNADJUSTEDNONRAW_thumb_f6f.jpg)\n\n- 图1 上海外滩\n\n坐上房租中介大姐的电动车上之后，就开始了上海的租房之旅。走过祖冲之路，穿行牛顿路，徘徊高斯路...一趟趟看完之后，最终在付完据说同学介绍的不收中介费的房产中介小哥中介费之后，总算是在上海安顿下来（为什么从大姐变成小哥，这之间的一些故事有些复杂，就暂时不展开了）。\n\n![UNADJUSTEDNONRAW_thumb_f6d](/images/blog/UNADJUSTEDNONRAW_thumb_f6d.jpg)\n\n- 图2 租住的杨高南路夜景\n\n在原先的三个程序员房客小哥搬去苏州之前，而有没有地方落脚的时候，慷慨的美团大佬浩然和刚哥（欣然）收留了我。至今，虽然只是过去了短短的一年，我仍然怀念那段和浩然和刚哥在一起的时光，以及那时睡在厨房、阳台时心里还惦念刚哥又软又舒服的床的感觉。也是那段时间，每天从2号线的第二站一路坐到2号线的底站，不仅见识了人流的起起落落，也体验了时光的走走停停。倒也算是一段比较有意思的经历。\n\n\n\n![UNADJUSTEDNONRAW_thumb_f6a](/images/blog/UNADJUSTEDNONRAW_thumb_f6a.jpg)\n\n- 图3 二号线拥挤的人潮（地铁故障）\n\n在搬去出租房的那天，是一个天气晴好的下午，货拉拉师傅载着我们从长宁区仙霞路一直到浦东新区的杨高南路，一路上窗外的风吹进来，吹到我已经不在年轻的脸上，我却感受到一周久违的自由。\n\n不知为何，随着年纪的增长，总觉得自己逐渐更加沙雕了起来。其实我真正是想更加放飞自我，但是人在江湖，自己的性格和成长经历仿佛是一种枷锁，将自己牢牢的锁住，也只能老老实实的上学上班，循规蹈矩的生活。\n\n当然，人生需要一些仪式感，初来上海的不久，我独自一人来到了上海外滩，南京东路的那条街依然拥挤，东方明珠依然闪耀。因为这里是上海，这里从来不会缺少观众。外滩的海风（江风？）吹在脸上，伴随着还算晴好的天气，有一种特别的味道，会给人有一种自己也是这繁华都市一员的错觉。我甚至想停留甚至躺下好好感受并停留这美好的时光，直到旁边的保安大叔主动打破了我的幻想，\"礼貌\"的告知我，这里的座椅不能趟只能坐。不管怎样，也算是故地重游，嗯，这里是上海，我来了。\n\n\n\n### 老友相聚\n\n这一年，很多老朋友再次相聚。\n\n#### 帅富婚礼\n\n时隔几年，qian1992，hq119900，Jacob，xiaochenxia，ixingo泰州再相聚。大家都成熟了许多，小帅哥也胖了数十斤，琪叔也不再是那个胖子了，洋洋洋的发型依然那样帅气，帅富还是那么帅那么富。如果时光能够倒流，我还希望在B8-425的那间宿舍里再呆上一阵子，那段青春却又沙雕的日子。最近这几年，时光总是如流水，我也在流水中随波逐流，失去了方向。\n\n![IMG_3376](/images/blog/IMG_3376.jpg)\n\n- 图4 站在最后的高帅富\n\n#### 神哥来沪\n\n再一次见到神哥时，他的脸上又多了几分成熟和自信，优秀洋溢在他年轻的脸上。刚到一会，他就迫不及待躺在床上抓紧学习了起来。如果他学的足够快，时间就会追不上他。\n\n![UNADJUSTEDNONRAW_thumb_f80](/images/blog/UNADJUSTEDNONRAW_thumb_f80.jpg)\n\n- 图5 在BIliBili深度地学习\"深度学习\"的施裕豪\n\n#### 明哥来申\n\n与明明一别已是多年，模糊的记忆再一次清晰起来，想起高中时的点点滴滴，仿佛就在昨日。再一次临行前，明哥握着我的手，不舍地说到：\"时光不老，我们不散。\"（好吧，我承认这段是我戏精脑补的）\n\n![IMG_0622](/images/blog/IMG_0622.jpeg)\n\n- 图6 来上海的明哥\n\n#### 美团大佬\n\n读研时同一个实验室的望尘莫及，无法望其项背的几位美团大佬一起吃饭，我坐在一旁，并试图掩饰我彷徨自卑的目光。从大佬们对我不屑的目光中，我读懂了什么叫做差距。\n\n![UNADJUSTEDNONRAW_thumb_f76](/images/blog/UNADJUSTEDNONRAW_thumb_f76.jpg)\n\n- 图7 两位美团大佬\n\n#### 老夏与潘帅\n\n除了明哥之外，夏也是我的高中同桌之一（回想一下，高中的同桌真多...）。老夏在广东也漂泊了很多年（脑子禁不住响起了那首BGM：人在广东已经漂泊十年…），毕竟是大城市呆过的人，眼睛有着大城市独有的坚毅的气质，我想或许这就是器宇不凡吧。已经是程序员潘同学依然还是那么帅，头发还是那么乌黑浓密有光泽。我们也早已不再年轻，短暂相聚之后，又走上了各自奔波的道路， 这就是生活。\n\n![UNADJUSTEDNONRAW_thumb_f90](/images/blog/UNADJUSTEDNONRAW_thumb_f90.jpg)\n\n- 图8 程序员潘帅和医师老夏\n\n#### 再会兵哥\n\n我和泽兵相识是在江西的德兴铜矿，一个山里的偏远小镇，我们同处一室。时间过的真快，如今的他也工作三年了。三年，弹指一挥间。\n\n#### 王局，丹姐和霄宇\n\n作为伴郎专业户的国家公务人员王菊长（王局长，可恶，又笔误）前往上海莅临考察，还不忘关心一下我，我的眼睛里留下了感激的泪水。时光流逝，王局依然潇洒，还是那个记忆中的当年那个翩翩少年。\n\n#### 长生大佬\n\n和长生大佬的相遇，其实很不经意，也许是命运中的安排，微信朋友圈的定位将我暴露出来，没想到我们在这个陌生的城市却近在咫尺。\n\n#### 超神\n\n超神，当然不仅仅是花露水的牌子，还是一位牛逼的同学与室友。不到一年，超神再一次升职加薪，让人不禁感慨，人与人的差距总是那么大。唯一的希望就是超神的厨艺再精进一点，这样我洗起碗来会更加有劲。\n\n![IMG_2821](/images/blog/IMG_2821.jpeg)\n\n- 图9 沉思中的超神\n\n#### 学妹\n\n为她修过一次电脑，但是因为我的螺丝刀套装遗失，最终，硬盘的盒子的几颗螺丝钉没有拧上。\n\n### 职场生涯\n\n在读了N年书之后，（终于）逃离了象牙塔，正式开始了我的工作生涯。\n\n入职的时候也还好，倒也是比较平顺，因为自从接了Offer之后，在群里已经活跃了快一年，组里有哪些人也有了一些了解。嗯，就这样，很快就开始了我的上班生活。\n\n嗯，从今天起，叫我Shawn。\n\n![IMG_3378](/images/blog/IMG_3378.jpg)\n\n- 图10 入职时的临时工卡和名牌\n\n原先贴在电脑的标签成为了我入职的第一家公司（这句话其实是个病句）。\n\n![UNADJUSTEDNONRAW_thumb_f62](/images/blog/UNADJUSTEDNONRAW_thumb_f62.jpg)\n\n- 图11 第一台笔记本上的NVIDIA标签\n\n公司给我最大的感受就是更加自由和谐的氛围，\"万恶的资本主义\"企业给我一种独特的人性化感受，甚至比读书时感受到更多的自由。其他的就是同事们也很有趣，尤其WGM（Whole Group Meeting）像是一个相声节目，大佬们谈笑风生。\n\n在成长过程中，遇到的优秀的人也越来越多，上海从来不缺优秀的人才，因为这里到处是比你优秀的人。 这其实就是成长的压力，在拥挤的地铁人潮中，你会切身感受到自己的渺小和世界的空旷。但是如果年轻的时候不去大城市，以后也很难有这样的机会了。套用一句窃格瓦拉的名言：\n\n> \"在上海的感觉，比家里面感觉好多了！在家里面一个人很无聊，都没友仔，女仔玩 ，来了上海个个都是人才，说话又好听，我超喜欢在里面。\"\n\n![UNADJUSTEDNONRAW_thumb_f68](/images/blog/UNADJUSTEDNONRAW_thumb_f68.jpg)\n\n- 图12 NVIDIA楼前的信仰之光\n\n每当夜幕降临，NVIDIA信仰的绿光照在我的脸上，这一刻仿佛我仿佛又一次年轻，又一次充满了能量，RTX， it's ON。\n\n![UNADJUSTEDNONRAW_thumb_f86](/images/blog/UNADJUSTEDNONRAW_thumb_f86.jpg)\n\n- 图13 一位不愿透露姓名的Shawn Wang的工位\n\n从8楼的窗外望去，一路的点点星光向远处延展而去，消失在地平线，看着这个城市的灯红酒绿，谁又能看到我眼里的落寞和彷徨呢。（你的戏真多）\n\n![UNADJUSTEDNONRAW_thumb_f69](/images/blog/UNADJUSTEDNONRAW_thumb_f69.jpg)\n\n- 图14 夜深了，NVIDIA窗外的点点灯光\n\n其他的工作生活还算循规蹈矩，但是也有一些特别的活动。\n\n#### All Hands Meeting\n\nAll hands meeting是一种周期性的会议，主要是Facility，HR，IT等部门介绍一下公司的动态的一些事项，但是并非是强制性的，所以这一点还是非常好的。\n\n![UNADJUSTEDNONRAW_thumb_f6e](/images/blog/UNADJUSTEDNONRAW_thumb_f6e.jpg)\n\n- 图15 All Hands Meeting上Ko宣布退休\n\n#### Security Warnning\n\n如果说有什么是NVIDIA职场新人必得的东西，那就是Security Warnning了，每天晚上会有公司保安过来巡查一下，如果你的笔记本忘记上锁，第二天早上你的桌子上就会有这个标签。（可怜的我得了两次）\n\n![UNADJUSTEDNONRAW_thumb_f77](/images/blog/UNADJUSTEDNONRAW_thumb_f77.jpg)\n\n- 图16 FBI Warnning\n\n#### Ice scream Event\n\n也不知道是什么缘由，反正就有这么样一次活动，爆米花和冰激淋外加拔河比赛。\n\n![UNADJUSTEDNONRAW_thumb_f71](/images/blog/UNADJUSTEDNONRAW_thumb_f71.jpg)\n\n- 图17 冰淇淋节\n\n#### Annual Dinner\n\n前几年老黄都会来的Annual Dinner，这一年没有过来，也不知道是什么原因。遗憾的是没有和老黄的合影，RTX也没有发到我的手上。\n\n![UNADJUSTEDNONRAW_thumb_f88](/images/blog/UNADJUSTEDNONRAW_thumb_f89.jpg)\n\n- 图18 没有老黄的年会，想他\n\n当然，年会上新人难免是要表演节目的，但是尴尬的是，好像音响效果不好，后面的人都听不到。\n\n![UNADJUSTEDNONRAW_thumb_f88](/images/blog/UNADJUSTEDNONRAW_thumb_f88.jpg)\n\n- 图19 NVIDIA民谣合唱队合影\n\n#### Team Building\n\nTeam Building有过好几次，主要就是吃。。。\n\n![UNADJUSTEDNONRAW_thumb_f7b](/images/blog/UNADJUSTEDNONRAW_thumb_f7b.jpg)\n\n- 图20 Infrastructure团队\n\n#### Dinner out\n\n公司一般如果有美国同事来上海出差什么的，会有一些Dinner out的晚宴，我也蹭了3-4次。\n\n![UNADJUSTEDNONRAW_thumb_f74](/images/blog/UNADJUSTEDNONRAW_thumb_f74.jpg)\n\n- 图21 \"前\"Manager从美国回来\n\n#### Fireside Chat\n\n![UNADJUSTEDNONRAW_thumb_f7a](/images/blog/UNADJUSTEDNONRAW_thumb_f7a.jpg)\n\n- 图22 EVP（执行副总裁）\"炉边谈话\"，就是说的啥没怎么听懂\n\n#### SHAI 48\n\n\"前\"Manager去美国工作之前的合影，因为微信群里当时一共48个人，所以以SHAI-48团队出道。\n\n![UNADJUSTEDNONRAW_thumb_f73](/images/blog/UNADJUSTEDNONRAW_thumb_f73.jpg)\n\n- 图23 在Manager去美国之前的团队合影\n\n\n\n### 外交建设\n\n来上海有1年了，除了同事之外，还认识了一些有趣的新同学。\n\n#### 硕博相声大会\n\n在硕博相声大会中认识了也很多有趣的同学。\n\n有总是乐观的矿姐，总是求心理试的未来的隋博士，和我斗图的曼青博士，总是问我奇怪问题的袁工程师，安徽老乡程老师，海归李老师，机械转IT的Ray博，真的是老师的郭老师，有独特见解的朱律师…以及老乡徐同学。\n\n#### 网易云音乐\n\n当然，还有一位在网易云音乐的一个书画博主，给我寄送来了一套他的作品，甚是感激。\n\n![UNADJUSTEDNONRAW_thumb_f7e](/images/blog/UNADJUSTEDNONRAW_thumb_f7e.jpg)\n\n- 图24 网易云音乐博主的送来粉丝的礼物\n\n\n\n### 风景\n\n#### 黄山的雪\n\n那是2018年的最后一天，我和浩然来到黄山。路湿地滑，与想象中的雪景不同，到处都是雾，一切都是雪茫茫（白茫茫）的一片，人也还是很多。与13年爬泰山时的泰然自若不同，感觉自己来回攀爬累的要命，不得不服自己不再年轻了。或许是也没什么特别的期许，心里也满是是波澜不惊的感觉，成年的生活已经很难有太多的惊喜，尽管黄山的确比我去过的山要更加惊艳一些，但是更想是一种经历而不是一种旅行了。\n\n回来时已经是2019年了。凌晨的时候，我还正走在上海的街上，街上空无一人，微信发了几条Happy new year的祝福，2018就这样悄无声息的拉下帷幕，再也没有2018了。有的时候，觉得时间就是让人无奈，回想这一年好像啥也没干，虚度光阴的惆怅常在心中涌动。\n\n![UNADJUSTEDNONRAW_thumb_f83](/images/blog/UNADJUSTEDNONRAW_thumb_f83.jpg)\n\n- 图25 黄山雪后迎客松\n\n\n\n#### 东边的海\n\n不知道为什么，曾经对海又一种特殊的向往。\n\n我第一次见到海是7年前，那时觉得许多事情都觉得新鲜有趣，甚至心里觉得有些兴奋。7年后，再一次站在海边，风吹过来，心头也没有一丝一缕的波澜。就像现在的心态，对很多事情变得不悲不喜。年轻时对未来充满着向往，现在只想着好好搬砖，这个世界的奇迹真的很少，只能自己慢慢努力吧。\n\n![UNADJUSTEDNONRAW_thumb_f95](/images/blog/UNADJUSTEDNONRAW_thumb_f95.jpg)\n\n- 图26 东临碣石，以观沧海\n\n#### 苏州的湖\n\n没啥说的，就是去吃螃蟹的（但是其实我对吃螃蟹并不感兴趣）。\n\n![UNADJUSTEDNONRAW_thumb_f7c](/images/blog/UNADJUSTEDNONRAW_thumb_f7c.jpg)\n\n- 图27 阳澄湖日落余晖\n\n### 文学艺术\n\n#### 书法练习\n\n已经很多年没有拿毛笔写字了，写毛笔字是老年人的专属，现在的生活节奏已经很难让年轻人有时间闲下心来去搞这些文艺活动，忙着写代码，忙着赚钱。生活的本质什么，人到底追求啥，真的是一个很难弄懂的问题。\n\n![UNADJUSTEDNONRAW_thumb_f8f](/images/blog/UNADJUSTEDNONRAW_thumb_f8f.jpg)\n\n- 图28 重拾毛笔\n\n#### 草莓音乐\n\n感谢浩然邀请我参加草莓音乐节的活动。\n\n![UNADJUSTEDNONRAW_thumb_f91](/images/blog/UNADJUSTEDNONRAW_thumb_f91.jpg)\n\n- 图29 年轻的心随着音乐躁动起来\n\n#### 当代艺术展\n\n某日，突然文艺之心作祟，骑行去了上海当代艺术博物馆。有的时候真的很羡慕一些文艺工作者，可以通过作品进行自我表达，比我们这些整天面对机器和代码的码农不知道高到哪里去了。想起以前相当一个语文老师的梦想，现在想想有点可笑。生活有时就像摸着石头过河，你不知道前面是什么，只能随波逐流，走一步，是一步。就像一位长者说的那样。\n\n> 一个人的命运啊，当然要靠自我奋斗，但是也要考虑到历史的行程。\n\n![UNADJUSTEDNONRAW_thumb_f8c](/images/blog/UNADJUSTEDNONRAW_thumb_f8c.jpg)\n\n- 图30 当代艺术形式\n\n### 技术交流\n\n#### 携程\n\n去了在携程举办的携程/爱奇艺/美团点评/苏宁大数据技术沙龙。\n\n![UNADJUSTEDNONRAW_thumb_f81](/images/blog/UNADJUSTEDNONRAW_thumb_f81.jpg)\n\n- 图31 携程/爱奇艺/美团点评/苏宁大数据技术沙龙\n\n\n\n#### 爱奇艺\n\n去了爱奇艺创新大厦的上海Site。\n\n![UNADJUSTEDNONRAW_thumb_f82](/images/blog/UNADJUSTEDNONRAW_thumb_f82.jpg)\n\n- 图32 爱奇艺大数据技术与应用\n\n\n\n#### 迅雷\n\n这场其实是浩然邀请我去的，然后我到了之后，他说有事来不了。然后…其实我啥也没听懂。\n\n![UNADJUSTEDNONRAW_thumb_f70](/images/blog/UNADJUSTEDNONRAW_thumb_f70.jpg)\n\n- 图33 迅雷链技术沙龙\n\n#### 科技馆\n\n其实一开始让我去科技馆我是拒绝的。但是是超神的邀请，我没理由不去。但是去了之后，一言难尽，其实适合小学生去（想起读研时大家一起去南京动物园...）。\n\n![UNADJUSTEDNONRAW_thumb_f94](/images/blog/UNADJUSTEDNONRAW_thumb_f94.jpg)\n\n- 图34 Apple II\n\n\n\n### 政治学习\n\n不管在哪，政治学习不能忘啊。自发去了一大会址强行学习了一波。\n\n![UNADJUSTEDNONRAW_thumb_f8a](/images/blog/UNADJUSTEDNONRAW_thumb_f8a.jpg)\n\n- 图35 中共一大会址\n\n\n\n### 插曲\n\n#### 外出打工\n\n摄于合肥高铁南站。有的时候离别会让人感伤。\n\n在江苏求学7年，现在又开始了上海搬砖的日子，其实也不过是这繁华都市的众多打工仔的一员。年轻的时候，还是要到外面的世界看一看。\n\n![UNADJUSTEDNONRAW_thumb_f87](/images/blog/UNADJUSTEDNONRAW_thumb_f87.jpg)\n\n- 图36 手握永和大王网的早餐，开始了又一年的打工旅程\n\n\n\n#### 被喝掉的干燥剂\n\n喝了一个星期的热水，那天倒水的时候，突然发现好像有异物响动，拆开一看原来是一包干燥剂在杯子里。神奇的是，我竟然没死。\n\n![UNADJUSTEDNONRAW_thumb_f78](/images/blog/UNADJUSTEDNONRAW_thumb_f78.jpg)\n\n- 图37 离开干燥剂的第七天，想他\n\n\n\n#### 信仰尺\n\n一把曾经被炒到1000元一把的MADE IN US的硅谷打造的NVIDIA信仰尺，一下子拥有10把，这是怎样的一种满足。\n\n![UNADJUSTEDNONRAW_thumb_f7f](/images/blog/UNADJUSTEDNONRAW_thumb_f7f.jpg)\n\n- 图38 信仰尺\n\n\n\n#### CCF纪念礼品\n\n这是我为数不多的抽奖获得的奖品。\n\n![UNADJUSTEDNONRAW_thumb_f75](/images/blog/UNADJUSTEDNONRAW_thumb_f75.jpg)\n\n- 图39 中国计算机学会问卷抽奖一等奖\n\n#### 药房抓药\n\n现在真的觉得身体一天不如一天，如果有一天我猝死了，希望大家还能偶尔想起我。\n\n![UNADJUSTEDNONRAW_thumb_f93](/images/blog/UNADJUSTEDNONRAW_thumb_f93.jpg)\n\n- 图40 医院取药\n\n#### 海上日出\n\n一年之计在于春，一天之际在于晨。\n\n这是我为数不多的早起的一天。看日出还算一个比较浪漫的过程，但是如果和你一起看的是男生的话，这种浪漫就会大打折扣，不管怎么样，感谢浩然。\n\n![UNADJUSTEDNONRAW_thumb_f96](/images/blog/UNADJUSTEDNONRAW_thumb_f96.jpg)\n\n- 图41 上海海上日出\n\n### 程序人生\n\n#### 操作系统\n\n终于凑齐了三大操作系统，操作系统之争和语言之争一直是程序员津津乐道的话题，那么解决的方案这里有一个：同时拥有它们，搁置争议，共同开发。\n\n![UNADJUSTEDNONRAW_thumb_f72](/images/blog/UNADJUSTEDNONRAW_thumb_f72.jpg)\n\n- 图42 Linux/windows/macOS三大操作系统齐聚\n\n#### 双屏显示器\n\n如果有什么值得我为之努力的，那就是双屏幕显示器和机械键盘齐聚。\n\n![IMG_3382](/images/blog/IMG_3382.jpeg)\n\n- 图43 双屏显示，好嗨哦，感觉人生已经到达了巅峰\n\n#### 沧桑汪师傅\n\n##### 结语\n\n当前，国内外形势正在发生深刻复杂变化，国家发展仍处于重要战略机遇期，前景十分光明，挑战也十分严峻。面对我国经济发展进入新常态等一系列深刻变化，更要坚持稳中求进工作总基调，迎难而上，开拓进取，为中国社会主义现代化取得建设的历史性成就而贡献力量。上海的一年，是个人学习和工作进程中极不平凡的一年。汪师傅更要登高望远、居安思危，勇于变革、勇于创新，永不僵化、永不停滞，攻坚克难，砥砺前行，不忘初心，持续推进，为全面建成小康社会而继续奋斗，为实现人民对美好生活的向往而努力奋斗！\n\n![UNADJUSTEDNONRAW_thumb_f97](/images/blog/UNADJUSTEDNONRAW_thumb_f97.jpg)\n\n-  图44 沧桑汪师傅\n",
  "wordCount": 7388,
  "readTime": 14,
  "picUrl": "http://www.ixingo.cn/images/blog/UNADJUSTEDNONRAW_thumb_f6f.jpg",
  "templateId": 1,
  "source": "iPhone 11 Pro Max",
  "creatorIp": "127.0.0.1",
  "readCount": 3,
  "likeCount": 0,
  "allowComment": true,
  "commentCount": 0,
  "status": 0,
  "visibility": true,
  "createdBy": {
    "id": 7887167873792143360,
    "username": "shawang",
    "name": "Shawn Wang",
    "sex": null,
    "headUrl": "https://img.ixingo.cn/_head.jpg",
    "isVerified": 0,
    "verifiedContent": null,
    "introduction": null
  },
  "catalogId": {
    "id": 1,
    "name": null
  },
  "typeId": {
    "id": 2,
    "name": null
  },
  "creationDateTime": {
    "epochSecond": 1574657613,
    "nano": 0
  },
  "modificationTime": {
    "epochSecond": 1587143681,
    "nano": 611000000
  },
  "expiated": true,
  "modifiedBy": null,
  "tags": [
    {
      "id": 2,
      "name": "生活"
    },
    {
      "id": 1,
      "name": "上海"
    }
  ],
  "comments": [
    {
      "id": 1,
      "content": "第一条评论",
      "source": "星狗网",
      "status": 1,
      "creationDateTime": null,
      "commenter": {
        "id": 7887167873792143360,
        "username": "shawang",
        "name": "Shawn Wang",
        "sex": null,
        "headUrl": "https://img.ixingo.cn/_head.jpg",
        "isVerified": 0,
        "verifiedContent": null,
        "introduction": null
      },
      "replies": null
    },
    {
      "id": 2,
      "content": "第二条评论",
      "source": "星狗网",
      "status": 1,
      "creationDateTime": null,
      "commenter": {
        "id": 7887167873792143360,
        "username": "shawang",
        "name": "Shawn Wang",
        "sex": null,
        "headUrl": null,
        "isVerified": 0,
        "verifiedContent": null,
        "introduction": null
      },
      "replies": null
    }
  ]
};

const FeedCard = props => {
  // const { post, className, ...rest } = props;
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={post.createdBy.headUrl}
            to="/profile/1/timeline"
          />
        }
        disableTypography
        subheader={
          <div className={classes.subheader}>
            <AccessTimeIcon className={classes.accessTimeIcon} />
            <Typography variant="body2">
              {moment("2020-04-19T03:15:54.615Z").fromNow()}
            </Typography>
          </div>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/profile/1/timeline"
            variant="h6"
          >
            {post.createdBy.name}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {post.comments[0].content}
        </Typography>
        {post.media && (
          <CardActionArea className={classes.mediaArea}>
            <CardMedia
              className={classes.media}
              // image={post.media}
              img={"https://img.ixingo.cn/wangxin.png"}
            />
          </CardActionArea>
        )}
        <Reactions
          className={classes.reactions}
          post={post}
        />
        <Divider className={classes.divider} />
        {post.comments && (
          <div className={classes.comments}>
            {post.comments.map(comment => (
              <CommentBubble
                comment={comment}
                key={comment.id}
              />
            ))}
          </div>
        )}
        <Divider className={classes.divider} />
        <CommentForm />
      </CardContent>
    </Card>
  );
};

FeedCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default FeedCard;
