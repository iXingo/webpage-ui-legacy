import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Link, Typography} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CollectionsIcon from '@material-ui/icons/Collections';
import ChatIcon from '@material-ui/icons/Chat';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DevicesIcon from '@material-ui/icons/Devices';
import DescriptionIcon from '@material-ui/icons/Description';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Button from '@material-ui/core/Button';


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

    // textAlign: 'center'
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

}));

const Agreement = () => {
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
            <Typography variant="h1" className={classes.items}><AssignmentIndIcon color="primary" style={{fontSize: 40}}/>
              星狗网用户协议
            </Typography>
            <Typography variant="h4" className={classes.items}><ChatIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              【首部及导言】
            </Typography>
            <Typography paragraph className={classes.item}>
              欢迎您使用星狗的服务！
              <br/>
              为使用星狗的服务，您应当阅读并遵守《星狗服务协议》（以下简称“本协议”）和《星狗隐私政策》。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制星狗责任的条款、对用户权利进行限制的条款、约定争议解决方式和司法管辖的条款（如第十八条相关约定）等，以及开通或使用某项服务的单独协议或规则。限制、免责条款或者其他涉及您重大权益的条款可能以加粗、加下划线等形式提示您重点注意。
              <br/>
              除非您已充分阅读、完全理解并接受本协议所有条款，否则您无权使用星狗服务。您点击“同意”或“下一步”，或您使用星狗服务，或者以其他任何明示或者默示方式表示接受本协议的，均视为您已阅读并同意签署本协议。本协议即在您与星狗之间产生法律效力，成为对双方均具有约束力的法律文件。
              <br/>
              如果您因年龄、智力等因素而不具有完全民事行为能力，请在法定监护人（以下简称"监护人"）的陪同下阅读和判断是否同意本协议，并特别注意未成年人使用条款。
              <br/>
              如果您是中国大陆地区以外的用户，您订立或履行本协议还需要同时遵守您所属和/或所处国家或地区的法律。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><CollectionsIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              一、【协议的范围】
            </Typography>
            <Typography paragraph className={classes.item}>
              1.1本协议是用户与星狗之间关于其使用星狗的服务所订立的协议。“星狗”是指星狗和/或其相关服务可能存在的运营关联单位/个人(目前为@程序员汪师傅)。“用户”是指星狗的服务的使用人，在本协议中更多地称为“您”。
              <br/>
              1.2星狗的服务是指星狗向用户提供的，包括但不限于即时通讯、网络媒体、互联网增值、互动娱乐、金融支付、广告等产品及服务，具体服务以星狗实际提供的为准（以下简称“本服务”）。
              <br/>
              1.3本协议内容同时包括《星狗隐私政策》（链接地址：http://ixingo.com.cn/privacy),且您在使用星狗某一特定服务时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”）。上述内容一经正式发布，即为本协议不可分割的组成部分，您同样应当遵守。您对前述任何单独协议的接受，即视为您对本协议全部的接受。您对本协议的接受，即视为您对《星狗隐私政策》的接受。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><ContactMailIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              二、【帐号与密码安全】
            </Typography>
            <Typography paragraph className={classes.item}>
              2.1您在使用本服务时可能需要注册一个帐号。关于您使用帐号的具体规则，请仔细阅读并遵守相关单独协议。
              <br/>
              2.2星狗特别提醒您应妥善保管您的帐号和密码。当您使用完毕后，应安全退出。因您保管不善可能导致遭受被盗号或密码失窃，责任由您自行承担。
              <br/>
              2.3为增强用户体验和/或技术便利，本服务的帐号可能包括数字、字母或者其组合，以及手机号码、电子信箱等多种形式。在您注册某一形式的帐号时，星狗可能附赠该帐号的另一表现形式。具体的帐号形式、帐号体系及帐号之间的关联关系等，以星狗实际提供的为准。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><DevicesIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              三、【用户个人信息保护】
            </Typography>
            <Typography paragraph className={classes.item}>
              3.1保护用户个人信息是星狗的一项基本原则。星狗将按照本协议及《星狗隐私政策》（链接地址：http://ixingo.com.cn/privacy）的规定收集、使用、储存和分享您的个人信息。本协议对个人信息保护相关内容未作明确规定的，均应以《星狗隐私政策》的内容为准。
              <br/>
              3.2您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则可能无法使用本服务或在使用过程中受到限制。
              <br/>
              3.3一般情况下，您可根据相关产品规则浏览、修改自己提交的信息，但出于安全性和身份识别（如号码申诉服务等）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。
              <br/>
              3.4星狗将尽可能运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。
              <br/>
              3.5星狗不会将您的个人信息转移或披露给任何第三方，除非：
              <br/>
              （1）相关法律法规或司法机关、行政机关要求。
              <br/>
              （2）为完成合并、分立、收购或资产转让而转移。
              <br/>
              （3）为提供您要求的服务所必需。
              <br/>
              （4）依据《星狗隐私政策》或其他相关协议规则可以转移或披露给任何第三方的情形。
              <br/>
              3.6星狗非常重视对未成年人个人信息的保护。若您不具备完全民事行为能力，在使用星狗的服务前，应事先取得您的监护人的同意。
            </Typography>


            <Typography variant="h4" className={classes.items}><DescriptionIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              四、【使用本服务的方式】
            </Typography>
            <Typography paragraph className={classes.item}>
              4.1本服务仅为您个人非商业性质的使用，除非您与星狗另有约定。
              <br/>
              4.2您依本协议条款所取得的权利不可转让。
              <br/>
              4.3您不得使用任何方式（包括但不限于第三方软件、插件、外挂、系统、设备等）对本服务进行干扰、破坏、修改或施加其他影响。
              <br/>
              4.4您应当通过星狗提供或认可的方式使用本服务，不得通过任何第三方软件、插件、外挂、系统、设备等登录或使用本服务。
              <br/>
              4.5任何人未经星狗授权不得使用任何第三方软件、插件、外挂、系统等查看、获取本服务中所包含的星狗、星狗合作伙伴或用户的任何相关信息、数据等内容，同时，应当严格遵守星狗发布的Robots协议等相关协议规则。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              五、【按现状提供服务】
            </Typography>
            <Typography paragraph className={classes.item}>
              您理解并同意：
              <br/>
              5.1本服务是按照现有技术和条件所能达到的现状提供的。星狗会尽最大努力保障服务的连贯性和安全性，但星狗不能随时预见和防范法律、技术以及其他风险，星狗对此类风险在法律允许的范围内免责，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。
              <br/>
              5.2因经营策略安排或调整等原因,不同地区的用户可使用的具体星狗服务的内容可能会存在差异，具体以星狗实际提供的为准。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              六、【自备设备】
            </Typography>
            <Typography paragraph className={classes.item}>

              6.1您应当理解，您使用本服务需自行准备与相关服务有关的终端设备（如电脑、移动终端和必要的网络接入设备等装置），并承担所需的费用（如电话费、上网费等费用）。
              <br/>

              6.2您理解并同意，您使用本服务时会耗用您的终端设备和带宽等资源。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              七、【广告】
            </Typography>
            <Typography paragraph className={classes.item}>

              7.1您同意星狗可以自行或由第三方通过短信、电子邮件或电子信息等多种方式向您发送、展示广告或其他信息（包括商业与非商业信息），广告或其他信息的具体发送及展示形式、频次及内容等以星狗实际提供为准。
              <br/>

              7.2星狗将依照相关法律法规要求开展广告业务。您同意，对本服务中出现的广告，您应审慎判断其真实性和可靠性，除法律明确规定外，您应对因该广告而实施的行为负责。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              八、【服务费用】
            </Typography>
            <Typography paragraph className={classes.item}>

              8.1星狗的部分服务是以收费方式提供的，如您使用收费服务，请遵守相关的协议。
              <br/>

              8.2星狗可能根据实际需要对收费服务的收费标准、方式进行修改和变更，星狗也可能会对部分免费服务开始收费。前述修改、变更或开始收费前，星狗将在相应服务页面进行通知或公告。如果您不同意上述修改、变更或付费内容，则应停止使用该服务。
              <br/>

              8.3在星狗降低收费服务的收费标准或者将收费服务改为免费服务提供时，星狗保留不对原付费用户提供退费或者费用调整之权利。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              九、【第三方提供的产品或服务】
            </Typography>
            <Typography paragraph className={classes.item}>

              您在星狗平台上使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。星狗和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。

              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十、【基于软件提供服务】
            </Typography>
            <Typography paragraph className={classes.item}>

              若星狗依托“软件”向您提供服务，您还应遵守以下约定：
              <br/>

              10.1您在使用本服务的过程中可能需要下载软件，对于这些软件，星狗给予您一项个人的、不可转让及非排他性的许可。您仅可为使用本服务的目的而使用这些软件。
              <br/>

              10.2为了改善用户体验、保障服务的安全性及产品功能的一致性等目的，星狗可能会对软件进行更新。您应该将相关软件更新到最新版本，否则星狗并不保证软件或服务能正常使用。
              <br/>

              10.3星狗可能为不同的终端设备开发不同的软件版本，您应当根据实际情况选择下载合适的版本进行安装。您可以直接从星狗平台上获取软件，也可以从得到星狗授权的第三方获取。如果您从未经星狗授权的第三方获取软件或与软件名称相同的安装程序，星狗无法保证该软件或服务能够正常使用，并对因此给您造成的损失不予负责。
              <br/>

              10.4除非星狗书面许可，您不得从事下列任一行为：
              <br/>

              （1）删除软件及其副本上关于著作权的信息。
              <br/>

              （2）对软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现软件的源代码。
              <br/>

              （3）对星狗拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等。
              <br/>

              （4）对软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经星狗授权的第三方工具/服务接入软件和相关系统。
              <br/>

              （5）通过修改或伪造软件运行中的指令、数据等任何方式，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的。
              <br/>

              （6）通过非星狗开发、授权的第三方软件、插件、外挂、系统、设备等任何方式，登录或使用星狗软件及服务，或制作、发布、传播非星狗开发、授权的用于登录或使用星狗软件及服务的第三方软件、插件、外挂、系统、设备等。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十一、【知识产权声明】
            </Typography>
            <Typography paragraph className={classes.item}>

              11.1星狗在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表、计算机软件等）的知识产权归星狗所有，用户在使用本服务中所产生内容的知识产权归用户或相关权利人所有，除非您与星狗另有约定。
              <br/>

              11.2除另有特别声明外，星狗提供本服务时所依托软件的著作权、专利权及其他知识产权均归星狗所有。
              <br/>

              11.3上述及其他任何本服务包含的内容的知识产权均受到法律法规保护，未经星狗、用户或相关权利人书面许可，任何人不得以任何形式进行使用或创造相关衍生作品。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十二、【用户违法违规行为】
            </Typography>
            <Typography paragraph className={classes.item}>
              12.1您在使用本服务时须遵守法律法规，不得制作、复制、发布、传播含有下列内容的信息或从事相关行为，也不得为制作、复制、发布、传播含有下列内容的信息或从事相关行为提供便利：
              <br/>

              （1）反对宪法所确定的基本原则的。
              <br/>

              （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的。
              <br/>

              （3）损害国家荣誉和利益的。
              <br/>

              （4）煽动民族仇恨、民族歧视，破坏民族团结的。
              <br/>

              （5）破坏国家宗教政策，宣扬邪教和封建迷信的。
              <br/>

              （6）散布谣言，扰乱社会秩序，破坏社会稳定的。
              <br/>

              （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。
              <br/>

              （8）侮辱或者诽谤他人，侵害他人合法权益的。
              <br/>

              （9）违反法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的。
              <br/>

              （10）相关法律法规或本协议、相关协议、规则等禁止的。
              <br/>

              12.2如果您在使用本服务过程中违反了相关法律法规或本协议约定，相关国家机关或机构可能会对您提起诉讼、罚款或采取其他制裁措施，并要求星狗给予协助。因此给您或者他人造成损害的，您应自行承担全部责任，星狗不承担任何责任。
              <br/>

              12.3如果您违反本协议约定，星狗有权进行独立判断并采取相应措施，包括但不限于通过技术手段删除、屏蔽相关内容或断开链接等。同时，星狗有权视用户的行为性质，采取包括但不限于暂停或终止向您提供服务，限制、中止、冻结或终止您对帐号的使用，追究法律责任等措施。
              <br/>

              12.4您违反本协议约定，导致任何主体损失的，您应当独立承担责任；星狗因此遭受损失的，您也应当一并赔偿。

              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十三、【遵守当地法律监管】
            </Typography>
            <Typography paragraph className={classes.item}>

              13.1您在使用本服务过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。
              <br/>

              13.2您应避免因使用本服务而使星狗违反法律法规或卷入政治和公共事件，否则星狗有权暂停或终止对您的服务。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十四、【用户发送、传播的内容与投诉处理】
            </Typography>
            <Typography paragraph className={classes.item}>

              14.1您通过本服务发送或传播的内容（包括但不限于网页、文字、图片、音频、视频、图表等）均由您自行承担责任。
              <br/>

              14.2您发送或传播的内容应有合法来源，相关内容为您所有或您已获得必要的授权。
              <br/>

              14.3如果您发送或传播的内容违法违规或侵犯他人权利的，星狗有权进行独立判断并采取删除、屏蔽或断开链接等措施。
              <br/>

              14.4如您被他人投诉或您投诉他人，星狗有权将争议中相关方的主体信息、联系方式、投诉相关内容等必要信息提供给相关当事方或相关部门，以便及时解决投诉纠纷，保护各方合法权益。
              <br/>

              14.5您保证对您在投诉处理程序中提供的信息、材料、证据等的真实性、合法性、有效性负责。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十五、【不可抗力及其他免责事由】
            </Typography>
            <Typography paragraph className={classes.item}>

              15.1您理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务受到影响。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，星狗将努力在第一时间与相关单位配合，争取及时进行处理，但是由此给您造成的损失星狗在法律允许的范围内免责。
              <br/>

              15.2在法律允许的范围内，星狗对以下情形导致的服务中断或受阻不承担责任：
              <br/>

              （1）受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏。
              <br/>

              （2）用户或星狗的电脑软件、系统、硬件和通信线路出现故障。
              <br/>

              （3）用户操作不当或用户通过非星狗授权的方式使用本服务。
              <br/>

              （4）程序版本过时、设备的老化和/或其兼容性问题。
              <br/>

              （5）其他星狗无法控制或合理预见的情形。
              <br/>

              15.3您理解并同意，在使用本服务的过程中，可能会遇到网络信息或其他用户行为带来的风险，星狗不对任何信息的真实性、适用性、合法性承担责任，也不对因侵权行为给您造成的损害负责。这些风险包括但不限于：
              <br/>

              （1）来自他人匿名或冒名的含有威胁、诽谤、令人反感或非法内容的信息。
              <br/>

              （2）遭受他人误导、欺骗或其他导致或可能导致的任何心理、生理上的伤害以及经济上的损失。
              <br/>

              （3）其他因网络信息或用户行为引起的风险。
              <br/>

              15.4星狗依据本协议约定获得处理违法违规内容的权利，该权利不构成星狗的义务或承诺，星狗不能保证及时发现违法行为或进行相应处理。
              <br/>

              15.5在任何情况下，您不应轻信借款、索要密码或其他涉及财产的信息。涉及财产操作的，请一定先核实对方身份，并请经常留意星狗有关防范诈骗犯罪的提示。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十六、【协议的生效与变更】
            </Typography>
            <Typography paragraph className={classes.item}>

              16.1您使用本服务即视为您已阅读本协议并接受本协议的约束。
              <br/>

              16.2星狗有权在必要时修改本协议条款。您可以在相关服务页面查阅最新版本的协议条款。
              <br/>

              16.3本协议条款变更后，如果您继续使用星狗提供的软件或服务，即视为您已接受变更后的协议。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              七、【广告】
            </Typography>
            <Typography paragraph className={classes.item}>

              7.1您同意星狗可以自行或由第三方通过短信、电子邮件或电子信息等多种方式向您发送、展示广告或其他信息（包括商业与非商业信息），广告或其他信息的具体发送及展示形式、频次及内容等以星狗实际提供为准。
              <br/>

              7.2星狗将依照相关法律法规要求开展广告业务。您同意，对本服务中出现的广告，您应审慎判断其真实性和可靠性，除法律明确规定外，您应对因该广告而实施的行为负责。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十七、【服务的变更、中断、终止】
            </Typography>
            <Typography paragraph className={classes.item}>

              17.1您理解并同意，星狗基于经营策略的调整，可能会对服务内容进行变更，也可能会中断、中止或终止服务。
              <br/>

              17.2在星狗发生合并、分立、收购、资产转让时，星狗可向第三方转让本服务下相关资产；星狗也可在单方通知您后，将本协议下部分或全部服务及相应的权利义务转交由第三方运营或履行。具体受让主体以星狗通知的为准。
              <br/>

              17.3如发生下列任何一种情形，星狗有权不经通知而中断或终止向您提供服务：
              <br/>

              （1）根据法律法规规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明。
              <br/>

              （2）您违反相关法律法规的规定或违反本协议的约定。
              <br/>

              （3）按照法律法规规定，司法机关或主管部门的要求。
              <br/>

              （4）出于安全的原因或其他必要的情形。
              <br/>

              17.4星狗有权按本协议8.2条的约定进行收费。若您未按时足额付费，星狗有权中断、中止或终止提供服务。
              <br/>

              17.5您有责任自行备份存储在本服务中的数据。如果您的服务被终止，星狗有权从服务器上永久地删除您的数据,法律法规另有规定的除外。服务中止或终止后，星狗没有义务向您提供或返还数据。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              七、【广告】
            </Typography>
            <Typography paragraph className={classes.item}>

              7.1您同意星狗可以自行或由第三方通过短信、电子邮件或电子信息等多种方式向您发送、展示广告或其他信息（包括商业与非商业信息），广告或其他信息的具体发送及展示形式、频次及内容等以星狗实际提供为准。
              <br/>

              7.2星狗将依照相关法律法规要求开展广告业务。您同意，对本服务中出现的广告，您应审慎判断其真实性和可靠性，除法律明确规定外，您应对因该广告而实施的行为负责。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十八、【管辖与法律适用】
            </Typography>
            <Typography paragraph className={classes.item}>

              18.1本协议的成立、生效、履行、解释及纠纷解决等相关事宜，均适用中华人民共和国大陆地区法律（不包括冲突法）。
              <br/>

              18.2本协议签订地为中华人民共和国。
              <br/>

              18.3若您和星狗之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地（即中国）有管辖权的人民法院管辖。
              <br/>

              18.4本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。
              <br/>

              18.5本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。
              <br/>

              18.6若本协议有中文、英文等多个语言版本，相应内容不一致的，均以中文版的内容为准。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十九、【未成年人使用条款】
            </Typography>
            <Typography paragraph className={classes.item}>

              19.1若用户未满18周岁，则为未成年人，应在监护人监护、指导下阅读本协议和使用本服务。
              <br/>

              19.2未成年人用户涉世未深，容易被网络虚像迷惑，且好奇心强，遇事缺乏随机应变的处理能力，很容易被别有用心的人利用而又缺乏自我保护能力。因此，未成年人用户在使用本服务时应注意以下事项，提高安全意识，加强自我保护：
              <br/>

              （1）认清网络世界与现实世界的区别，避免沉迷于网络，影响日常的学习生活。
              <br/>

              （2）填写个人资料时，加强个人保护意识，以免不良分子对个人生活造成骚扰。
              <br/>

              （3）在监护人或老师的指导下，学习正确使用网络。
              <br/>

              （4）避免陌生网友随意会面或参与联谊活动，以免不法分子有机可乘，危及自身安全。
              <br/>

              19.3监护人、学校均应对未成年人使用本服务多做引导。特别是家长应关心子女的成长，注意与子女的沟通，指导子女上网应该注意的安全问题，防患于未然。
              <br/>

              19.4已满18周岁的成年人因任何原因不具备完全民事行为能力的，参照适用本协议之未成年人使用条款之相关约定。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              二十、【其他】
            </Typography>
            <Typography paragraph className={classes.item}>

              20.1如果您对本协议或本服务有意见或建议，可与星狗（站长@程序员汪师傅）微博联系（https://weibo.com/ixingo），我们会给予您必要的帮助。（正文完）
              <br/>
            </Typography>

            <Button variant="contained" fullWidth color="primary" className={classes.button}>
              <Link
                component={RouterLink}
                to="/sign-up"
                variant="h5"
                style={{color: "white"}}
              >
                我已经认真阅读并且同意
              </Link>
            </Button>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Agreement;
