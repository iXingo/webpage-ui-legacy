import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import validate from 'validate.js';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import './index.css';
import validators from './common/validators';
import Routes from './Routes';
import {getCurrentUser} from './util/APIUtils';
import {ACCESS_TOKEN} from './constants';
import {notification} from 'antd';
import {ScrollToTop} from './common'


validate.validators = {
  ...validate.validators,
  ...validators
};

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 4,
    });
  }

  loadCurrentUser() {
    // const {history} = this.props;
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
        notification.success({
          message: '星狗网 Web App',
          description: "欢迎回来！恭喜您！您已经成功登录！",
        });
        // history.push('/index');
      }).catch(error => {
        this.setState({
          isLoading: false,
        });
        console.log(error);
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "您已经成功退出登录！") {
    if (!this.state.currentUser) {
      notification[notificationType]({
        message: '星狗网 Web App',
        description: "您还未登录, 请您先登录!",
      });
      return;
    }

    notification[notificationType]({
      message: '星狗网 Web App',
      description: description + "下次再见！【" + this.state.currentUser.name + "】同学~",
    });
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);


  }

  handleLogin(next) {
    this.loadCurrentUser(next);
  }

  render() {
    document.title = "星狗网 | 看见，好时光";
    return (
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Routes isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loadCurrentUser={this.loadCurrentUser}
                  {...this.props}/>
        </ScrollToTop>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);