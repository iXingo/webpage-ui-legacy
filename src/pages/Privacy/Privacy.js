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
    justifyContent: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

}));

const Privacy = () => {
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
              星狗网隐私政策
            </Typography>
            <Typography variant="h3" className={classes.items}><ChatIcon color="primary"
                                                                         style={{fontSize: 25, paddingRight: 5}}/>
              引言
            </Typography>
            <Typography paragraph className={classes.item}>
              星狗严格遵守法律法规，遵循以下隐私保护原则，为您提供更加安全、可靠的服务：
              <br/>

              1、安全可靠：我们竭尽全力通过合理有效的信息安全技术及管理流程，防止您的信息泄露、损毁、丢失。
              <br/>

              2、自主选择：我们为您提供便利的信息管理选项，以便您做出合适的选择，管理您的个人信息。
              <br/>
              3、保护通信秘密：我们严格遵照法律法规，保护您的通信秘密，为您提供安全的通信服务。
              <br/>
              4、合理必要：为了向您和其他用户提供更好的服务，我们仅收集必要的信息。
              <br/>
              5、清晰透明：我们努力使用简明易懂的表述，向您介绍隐私政策，以便您清晰地了解我们的信息处理方式。
              <br/>
              6、将隐私保护融入产品设计：我们在产品或服务开发的各个环节，综合法律、产品、设计等多方因素，融入隐私保护的理念。
              <br/>

              本《隐私政策》主要向您说明：我们收集哪些信息；我们收集信息的用途；您所享有的权利。
              <br/>

              希望您仔细阅读《隐私政策》（以下简称“本政策”），详细了解我们对信息的收集、使用方式，以便您更好地了解我们的服务并作出适当的选择。
              若您使用星狗服务，即表示您认同我们在本政策中所述内容。除另有约定外，本政策所用术语与《星狗服务协议》中的术语具有相同的涵义。
              如您有问题，请联系我们。
              <br/>

            </Typography>


            <Typography variant="h3" className={classes.items}><CollectionsIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              一、【我们收集的信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们根据合法、正当、必要的原则，仅收集实现产品功能所必要的信息。
              <br/>

              您在使用我们服务时主动提供的信息
              <br/>

              ·您在注册帐户时填写的信息
              <br/>

              例如，您在注册帐户时所填写的昵称、手机号码。
              <br/>

              ·您在使用服务时上传的信息
              <br/>

              例如，您在使用账号服务时，上传的头像、分享的照片。
              <br/>

              ·您通过我们的客服或参加我们举办的活动时所提交的信息
              <br/>

              例如，您参与我们线上活动时填写的调查问卷中可能包含您的姓名、电话、家庭地址等信息。
              <br/>
              我们的部分服务可能需要您提供特定的个人敏感信息来实现特定功能。若您选择不提供该类信息，则可能无法正常使用服务中的特定功能，但不影响您使用服务中的其他功能。若您主动提供您的个人敏感信息，即表示您同意我们按本政策所述目的和方式来处理您的个人敏感信息。
              <br/>
              <br/>

              我们在您使用服务时获取的信息
              <br/>
              <br/>
              ·日志信息。当您使用我们的服务时，我们可能会自动收集相关信息并存储为服务日志信息。
              <br/>
              <br/>
              1)设备信息
              <br/>
              例如，设备型号、操作系统版本、唯一设备标识符、电池、信号强度等信息。
              <br/>
              2)软件信息
              <br/>
              例如，软件的版本号、浏览器类型。为确保操作环境的安全或提供服务所需，我们会收集有关您使用的移动应用和其他软件的信息。
              <br/>
              3)IP地址
              <br/>
              4)服务日志信息
              <br/>
              例如，您在使用我们服务时搜索、查看的信息、服务故障信息、引荐网址等信息。
              <br/>
              5)通讯日志信息
              <br/>
              例如，您在使用我们服务时曾经通讯的账户、通讯时间和时长。
              <br/>
              <br/>
              ·位置信息
              <br/>
              当您使用与位置有关的服务时，我们可能会记录您设备所在的位置信息，以便为您提供相关服务。
              <br/>
              在您使用服务时，我们可能会通过IP地址 、GPS、WLAN（如 WiFi)或基站等途径获取您的地理位置信息；
              <br/>
              您或其他用户在使用服务时提供的信息中可能包含您所在地理位置信息，例如您提供的帐号信息中可能包含的您所在地区信息，您或其他人共享的照片包含的地理标记信息。
              <br/>
              <br/>
              ·其他相关信息
              <br/>
              为了帮助您更好地使用我们的产品或服务，我们会收集相关信息。例如，我们收集的好友列表、群列表信息、声纹特征值信息。为确保您使用我们服务时能与您认识的人进行联系，如您选择开启导入通讯录功能，我们可能对您联系人的姓名和电话号码进行加密，并仅收集加密后的信息。
              <br/>

              其他用户分享的信息中含有您的信息
              <br/>
              例如，其他用户发布的照片或分享的视频中可能包含您的信息。
              <br/>

              <br/>
              从第三方合作伙伴获取的信息
              <br/>
              我们可能会获得您在使用第三方合作伙伴服务时所产生或分享的信息。例如，您使用微信或QQ帐户登录第三方合作伙伴服务时，我们会获得您登录第三方合作伙伴服务的名称、登录时间，方便您进行授权管理。请您仔细阅读第三方合作伙伴服务的用户协议或隐私政策。
              <br/>
            </Typography>

            <Typography variant="h4" className={classes.items}><ContactMailIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              二、【我们如何使用收集的信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们严格遵守法律法规的规定及与用户的约定，将收集的信息用于以下用途。若我们超出以下用途使用您的信息，我们将再次向您进行说明，并征得您的同意。
              <br/>

              向您提供服务
              <br/>
              <br/>

              满足您的个性化需求
              <br/>
              例如，语言设定、位置设定、个性化的帮助服务。
              <br/>
              产品开发和服务优化
              <br/>
              例如，当我们的系统发生故障时，我们会记录和分析系统故障时产生的信息，优化我们的服务。
              <br/>
              <br/>

              安全保障
              <br/>
              例如，我们会将您的信息用于身份验证、安全防范、反诈骗监测、存档备份、客户的安全服务等用途。例如，您下载或安装的安全软件会对恶意程序或病毒进行检测，或为您识别诈骗信息。
              <br/>
              向您推荐您可能感兴趣的广告、资讯等
              <br/>
              评估、改善我们的广告投放和其他促销及推广活动的效果
              <br/>
              <br/>

              管理软件
              <br/>
              例如，进行软件认证、软件升级等。
              <br/>
              邀请您参与有关我们服务的调查
              <br/>
              <br/>

              为了让您有更好的体验、改善我们的服务或经您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某些服务所收集的信息用于我们的其他服务。例如，将您在使用我们某项服务时的信息，用于另一项服务中向您展示个性化的内容或广告、用于用户研究分析与统计等服务。
              <br/>
              为了确保服务的安全，帮助我们更好地了解我们应用程序的运行情况，我们可能记录相关信息，例如，您使用应用程序的频率、故障信息、总体使用情况、性能数据以及应用程序的来源。我们不会将我们存储在分析软件中的信息与您在应用程序中提供的个人身份信息相结合。
              <br/>

            </Typography>

            <Typography variant="h4" className={classes.items}><DevicesIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              三、【我们如何使用cookie及相关技术】
            </Typography>
            <Typography paragraph className={classes.item}>

              我们或我们的第三方合作伙伴，可能通过放置安全的Cookie及相关技术收集您的信息，目的是为您提供更个性化的用户体验和服务。我们会严格要求第三方合作伙伴遵守本政策的相关规定。
              <br/>
              您也可以通过浏览器设置管理Cookie。但请注意，如果停用Cookie，您可能无法享受最佳的服务体验，某些服务也可能无法正常使用。若您希望了解更多Cookie的安全性等信息，可参见《Cookie政策说明》。
              <br/>
            </Typography>


            <Typography variant="h4" className={classes.items}><DescriptionIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              四、【您分享的信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              您可以通过我们的服务与您的好友、家人及其他用户分享您的相关信息。例如，您在微信朋友圈中公开分享的文字和照片。
              <br/>
              请注意，这其中可能包含您的个人身份信息、个人财产信息等敏感信息。请您谨慎考虑披露您的相关个人敏感信息。
              <br/>
              您可通过我们服务中的隐私设置来控制您分享信息的范围，也可通过服务中的设置或我们提供的指引删除您公开分享的信息。但请您注意，这些信息仍可能由其他用户或不受我们控制的非关联第三方独立地保存。
              <br/>
            </Typography>

            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              五、【您如何管理自己的信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              您可以在使用我们服务的过程中，访问、修改和删除您提供的注册信息和其他个人信息，也可按照通知指引与我们联系。您访问、修改和删除个人信息的范围和方式将取决于您使用的具体服务。
              <br/>
              例如，若您在使用地理位置相关服务时，希望停止分享您的地理位置信息，您可通过手机定位关闭功能、软硬件服务商及通讯服务提供商的关闭方式停止分享，建议您仔细阅读相关指引。
              <br/>
              我们将按照本政策所述，仅为实现我们产品或服务的功能，收集、使用您的信息。
              <br/>
              如您发现我们违反法律、行政法规的规定或者双方的约定收集、使用您的个人信息，您可以要求我们删除。
              <br/>
              如您发现我们收集、存储的您的个人信息有错误的，您也可以要求我们更正。
              <br/>
              请通过本政策列明的联系方式与我们联系。
              <br/>
              在您访问、修改和删除相关信息时，我们可能会要求您进行身份验证，以保障帐号的安全。
              <br/>
              请您理解，由于技术所限、法律或监管要求，我们可能无法满足您的所有要求，我们会在合理的期限内答复您的请求。
              <br/>
            </Typography>

            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              六、【我们分享的信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们遵照法律法规的规定，对信息的分享进行严格的限制，例如：
              <br/>
              经您事先同意，我们可能与第三方分享您的个人信息
              <br/>
              仅为实现外部处理的目的，我们可能会与第三方合作伙伴（第三方服务供应商、承包商、代理、广告合作伙伴、应用开发者等，例如，代表我们发出电子邮件或推送通知的通讯服务提供商、为我们提供位置服务的地图服务供应商）（他们可能并非位于您所在的法域）分享您的个人信息，让他们按照我们的说明、隐私政策以及其他相关的保密和安全措施来为我们处理上述信息，并用于以下用途：
              <br/>
              ·向您提供我们的服务；
              <br/>
              ·实现“我们如何使用收集的信息”部分所述目的；
              <br/>
              ·履行我们在《星狗服务协议》或本政策中的义务和行使我们的权利；
              <br/>
              ·理解、维护和改善我们的服务。
              <br/>
              如我们与上述第三方分享您的信息，我们将会采用加密、匿名化处理等手段保障您的信息安全。
              <br/>
              随着我们业务的持续发展，当发生合并、收购、资产转让等交易导致向第三方分享您的个人信息时，我们将通过推送通知、公告等形式告知您相关情形，按照法律法规及不低于本政策所要求的标准继续保护或要求新的管理者继续保护您的个人信息。
              <br/>
              我们会将所收集到的信息用于大数据分析。
              <br/>
              例如，我们将收集到的信息用于分析形成不包含任何个人信息的城市热力图或行业洞察报告。
              <br/>
              我们可能对外公开并与我们的合作伙伴分享经统计加工后不含身份识别内容的信息，用于了解用户如何使用我们服务或让公众了解我们服务的总体使用趋势。
              <br/>
            </Typography>

            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              七、【我们可能基于以下目的披露您的个人信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              遵守适用的法律法规等有关规定；
              <br/>
              遵守法院判决、裁定或其他法律程序的规定；
              <br/>
              遵守相关政府机关或其他法定授权组织的要求；
              <br/>
              我们有理由确信需要遵守法律法规等有关规定；
              <br/>
              为执行相关服务协议或本政策、维护社会公共利益，为保护我们的客户、我们或我们的关联公司、其他用户或雇员的人身财产安全或其他合法权益合理且必要的用途。
              <br/>
            </Typography>

            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              八、【我们可能向您发送的信息】
            </Typography>
            <Typography paragraph className={classes.item}>
              信息推送
              <br/>
              您在使用我们的服务时，我们可能向您发送电子邮件、短信、资讯或推送通知。
              <br/>
              您可以按照我们的相关提示，在设备上选择取消订阅。
              <br/>
              <br/>

              与服务有关的公告
              <br/>
              我们可能在必要时（例如，因系统维护而暂停某一项服务时）向您发出与服务有关的公告。
              <br/>
              您可能无法取消这些与服务有关、性质不属于广告的公告。
              <br/>
            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              九、【存储信息的地点和期限】
            </Typography>
            <Typography paragraph className={classes.item}>
              存储信息的地点
              <br/>
              我们遵守法律法规的规定，将境内收集的用户个人信息存储于境内。
              <br/>
              <br/>

              存储信息的期限
              <br/>
              一般而言，我们仅为实现目的所必需的最短时间保留您的个人信息。但在下列情况下，我们有可能因需符合法律要求，更改个人信息的存储时间：
              <br/>
              ·为遵守适用的法律法规等有关规定；
              <br/>
              ·为遵守法院判决、裁定或其他法律程序的规定；
              <br/>
              ·为遵守相关政府机关或法定授权组织的要求；
              <br/>
              ·我们有理由确信需要遵守法律法规等有关规定；
              <br/>
              ·为执行相关服务协议或本政策、维护社会公共利益，为保护们的客户、我们或我们的关联公司、其他用户或雇员的人身财产安全或其他合法权益所合理必需的用途。
              <br/>
              当我们的产品或服务发生停止运营的情形时，我们将采取例如，推送通知、公告等形式通知您，并在合理的期限内删除或匿名化处理您的个人信息。
              <br/>
            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十、【信息安全】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们为您的信息提供相应的安全保障，以防止信息的丢失、不当使用、未经授权访问或披露。
              <br/>
              我们严格遵守法律法规保护用户的通信秘密。
              <br/>
              我们将在合理的安全水平内使用各种安全保护措施以保障信息的安全。
              <br/>
              例如，我们使用加密技术（例如，TLS、SSL）、匿名化处理等手段来保护您的个人信息。
              <br/>
              我们建立专门的管理制度、流程和组织确保信息安全。
              <br/>
              例如，我们严格限制访问信息的人员范围，要求他们遵守保密义务，并进行审查。
              <br/>
              若发生个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大，并以推送通知、公告等形式告知您。
              <br/>
            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十一、【广告】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们可能使用您的相关信息，在相关网站、应用及其他渠道向您提供与您更加相关的广告。您可以在关于广告页面中了解更多。
              <br/>

            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十二、【未成年人保护】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们非常重视对未成年人个人信息的保护。
              <br/>
              根据相关法律法规的规定，若您是18周岁以下的未成年人，在使用星狗的服务前，应事先取得您的家长或法定监护人的同意。
              <br/>
              如您注册或使用这类产品或服务，根据相关法律法规的规定，若您是14周岁以下的儿童，在使用相关的产品或服务前，应当按照注册、使用流程，事先取得您的家长或法定监护人的同意，并由您的家长或法定监护人帮助您完成产品或服务注册流程，以便您能使用我们提供的产品或服务。
              <br/>

              若您是儿童的监护人，当您在帮助儿童完成产品或服务的注册、使用前，应当仔细阅读本政策、产品具体的隐私保护指引（如有）和《儿童隐私保护声明》，决定是否同意本政策、产品具体的隐私保护指引（如有）和《儿童隐私保护声明》并帮助儿童进行注册、使用，以便儿童能使用我们提供的产品或服务。
              <br/>

              如您对您所监护的儿童的个人信息保护有相关疑问或权利请求时，请通过《儿童隐私保护声明》中的第七部分中披露的联系方式与我们联系。我们会在合理的时间内处理并回复您。
              <br/>
            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十三、【适用范围】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们的所有服务均适用本政策。
              <br/>
              某些服务有其特定的隐私指引/声明，该特定隐私指引/声明更具体地说明我们在该服务中如何处理您的信息。
              <br/>
              如本政策与特定服务的隐私指引/声明有不一致之处，请以该特定隐私指引声明为准。
              <br/>
              请您注意，本政策不适用由其他公司或个人提供的服务。
              <br/>
              例如，您通过使用第三方帐号登录其他公司或个人提供的服务。
              <br/>
              您使用该等第三方服务须受其隐私政策（而非本政策）约束，您需要仔细阅读其政策内容。
              <br/>
            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十四、【联系我们】
            </Typography>
            <Typography paragraph className={classes.item}>
              如您对本政策或其他相关事宜有疑问，
              <br/>
              请通过 https://www.ixingo.com.cn/ 与我们联系。
              <br/>
              您也可根据我们提供的指引，填写相关资料，将您的问题发送至 i.am@shawn.wang
              <br/>
              <br/>

              或寄到如下地址：
              <br/>
              地址：中国上海市浦东新区杨高南路 汪师傅（收）
              <br/>
              我们将尽快审核所涉问题，并在验证您的用户身份后的十五天内予以回复。
              <br/>
            </Typography>


            <Typography variant="h3" className={classes.items}><DoneAllIcon color="primary" style={{fontSize: 25, paddingRight: 5}}/>
              十五、【变更】
            </Typography>
            <Typography paragraph className={classes.item}>
              我们可能适时修订本政策内容。
              <br/>
              如该等变更会导致您在本政策项下权利的实质减损，我们将在变更生效前，通过在页面显著位置提示、向您发送电子邮件等方式通知您。
              <br/>
              在该种情况下，若您继续使用我们的服务，即表示同意受经修订的政策约束。
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

export default Privacy;
