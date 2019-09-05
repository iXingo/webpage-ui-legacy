import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import './index.css';
import validators from './common/validators';
import Routes from './Routes';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import { notification } from 'antd';


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
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70, 
      duration: 3,
    });    
  }

  loadCurrentUser() {
    let { history } = this.props;
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
      history.push("/index");
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="您已经成功推出登录！") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: '星狗网Web App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: '星狗网Web App',
      description: "恭喜您！您已经成功登录。",
    });
    this.loadCurrentUser();
  }

  render() {
    const { history } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter history={history}>
          <Routes isAuthenticated={this.state.isAuthenticated} 
                  currentUser={this.state.currentUser} 
                  handleLogin={this.handleLogin} 
                  handleLogout={this.handleLogout}
                  loadCurrentUser = {this.loadCurrentUser}
                  {...this.props}/>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;