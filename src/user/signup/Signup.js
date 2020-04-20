import React, {Component} from 'react';
import {checkEmailAvailability, checkUsernameAvailability, signup} from '../../util/APIUtils';
import './Signup.css';
import {Link} from 'react-router-dom';
import {
  EMAIL_MAX_LENGTH,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH
} from '../../constants';

import {Button, Form, Input, notification} from 'antd';

const FormItem = Form.Item;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: ''
      },
      username: {
        value: ''
      },
      email: {
        value: ''
      },
      password: {
        value: ''
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
    this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
    this.isFormInvalid = this.isFormInvalid.bind(this);
  }

  handleInputChange(event, validationFun) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: {
        value: inputValue,
        ...validationFun(inputValue)
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const signupRequest = {
      name: this.state.name.value,
      email: this.state.email.value,
      username: this.state.username.value,
      password: this.state.password.value
    };
    signup(signupRequest)
      .then(response => {
        notification.success({
          message: 'Polling App',
          description: "Thank you! You're successfully registered. Please Login to continue!",
        });
        this.props.history.push("/login");
      }).catch(error => {
      notification.error({
        message: 'Polling App',
        description: error.message || 'Sorry! Something went wrong. Please try again!'
      });
    });
  }

  isFormInvalid() {
    return !(this.state.name.validateStatus === 'success' &&
      this.state.username.validateStatus === 'success' &&
      this.state.email.validateStatus === 'success' &&
      this.state.password.validateStatus === 'success'
    );
  }

  render() {
    return (
      <div className="signup-container">
        <h1 className="page-title">Sign Up</h1>
        <div className="signup-content">
          <Form onSubmit={this.handleSubmit} className="signup-form">
            <FormItem
              label="Full Name"
              validateStatus={this.state.name.validateStatus}
              help={this.state.name.errorMsg}>
              <Input
                size="large"
                name="name"
                autoComplete="off"
                placeholder="您的全名"
                value={this.state.name.value}
                onChange={(event) => this.handleInputChange(event, this.validateName)}/>
            </FormItem>
            <FormItem label="Username"
                      hasFeedback
                      validateStatus={this.state.username.validateStatus}
                      help={this.state.username.errorMsg}>
              <Input
                size="large"
                name="username"
                autoComplete="off"
                placeholder="一个独特的名字"
                value={this.state.username.value}
                onBlur={this.validateUsernameAvailability}
                onChange={(event) => this.handleInputChange(event, this.validateUsername)}/>
            </FormItem>
            <FormItem
              label="Email"
              hasFeedback
              validateStatus={this.state.email.validateStatus}
              help={this.state.email.errorMsg}>
              <Input
                size="large"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="您的邮箱"
                value={this.state.email.value}
                onBlur={this.validateEmailAvailability}
                onChange={(event) => this.handleInputChange(event, this.validateEmail)}/>
            </FormItem>
            <FormItem
              label="Password"
              validateStatus={this.state.password.validateStatus}
              help={this.state.password.errorMsg}>
              <Input
                size="large"
                name="password"
                type="password"
                autoComplete="off"
                placeholder="密码在6-20个字符之间"
                value={this.state.password.value}
                onChange={(event) => this.handleInputChange(event, this.validatePassword)}/>
            </FormItem>
            <FormItem>
              <Button type="primary"
                      htmlType="submit"
                      size="large"
                      className="signup-form-button"
                      disabled={this.isFormInvalid()}>Sign up</Button>
              Already registed? <Link to="/login">Login now!</Link>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }

  // Validation Functions

  validateName = (name) => {
    if (name.length < NAME_MIN_LENGTH) {
      return {
        validateStatus: 'error',
        errorMsg: `名字太短了, (至少需要 ${NAME_MIN_LENGTH} 个字符~)`
      }
    } else if (name.length > NAME_MAX_LENGTH) {
      return {
        validationStatus: 'error',
        errorMsg: `名字太短了, (至少需要 ${NAME_MAX_LENGTH} 个字符~)`
      }
    } else {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
  };

  validateEmail = (email) => {
    if (!email) {
      return {
        validateStatus: 'error',
        errorMsg: '邮箱不能为空'
      }
    }

    const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
    if (!EMAIL_REGEX.test(email)) {
      return {
        validateStatus: 'error',
        errorMsg: '邮箱格式不正确'
      }
    }

    if (email.length > EMAIL_MAX_LENGTH) {
      return {
        validateStatus: 'error',
        errorMsg: `名字太长了, (最多只能 ${EMAIL_MAX_LENGTH} 个字符~)`
      }
    }

    return {
      validateStatus: null,
      errorMsg: null
    }
  };

  validateUsername = (username) => {
    if (username.length < USERNAME_MIN_LENGTH) {
      return {
        validateStatus: 'error',
        errorMsg: `用户名太短了, (至少需要 ${USERNAME_MIN_LENGTH} 个字符~)`
      }
    } else if (username.length > USERNAME_MAX_LENGTH) {
      return {
        validationStatus: 'error',
        errorMsg: `用户名太长了, (最多只能 ${USERNAME_MAX_LENGTH} 个字符~)`
      }
    } else {
      return {
        validateStatus: null,
        errorMsg: null
      }
    }
  };

  validateUsernameAvailability() {
    // First check for client side errors in username
    const usernameValue = this.state.username.value;
    const usernameValidation = this.validateUsername(usernameValue);

    if (usernameValidation.validateStatus === 'error') {
      this.setState({
        username: {
          value: usernameValue,
          ...usernameValidation
        }
      });
      return;
    }

    this.setState({
      username: {
        value: usernameValue,
        validateStatus: 'validating',
        errorMsg: null
      }
    });

    checkUsernameAvailability(usernameValue)
      .then(response => {
        if (response.available) {
          this.setState({
            username: {
              value: usernameValue,
              validateStatus: 'success',
              errorMsg: null
            }
          });
        } else {
          this.setState({
            username: {
              value: usernameValue,
              validateStatus: 'error',
              errorMsg: '用户名已经被占用!'
            }
          });
        }
      }).catch(error => {
      // Marking validateStatus as success, Form will be recchecked at server
      this.setState({
        username: {
          value: usernameValue,
          validateStatus: 'success',
          errorMsg: null
        }
      });
    });
  }

  validateEmailAvailability() {
    // First check for client side errors in email
    const emailValue = this.state.email.value;
    const emailValidation = this.validateEmail(emailValue);

    if (emailValidation.validateStatus === 'error') {
      this.setState({
        email: {
          value: emailValue,
          ...emailValidation
        }
      });
      return;
    }

    this.setState({
      email: {
        value: emailValue,
        validateStatus: 'validating',
        errorMsg: null
      }
    });

    checkEmailAvailability(emailValue)
      .then(response => {
        if (response.available) {
          this.setState({
            email: {
              value: emailValue,
              validateStatus: 'success',
              errorMsg: null
            }
          });
        } else {
          this.setState({
            email: {
              value: emailValue,
              validateStatus: 'error',
              errorMsg: '邮箱已经被占用!'
            }
          });
        }
      }).catch(error => {
      // Marking validateStatus as success, Form will be recchecked at server
      this.setState({
        email: {
          value: emailValue,
          validateStatus: 'success',
          errorMsg: null
        }
      });
    });
  }

  validatePassword = (password) => {
    if (password.length < PASSWORD_MIN_LENGTH) {
      return {
        validateStatus: 'error',
        errorMsg: `密码太短了, (至少需要 ${PASSWORD_MIN_LENGTH} 个字符~)`
      }
    } else if (password.length > PASSWORD_MAX_LENGTH) {
      return {
        validationStatus: 'error',
        errorMsg: `密码太长了, (最多只能 ${PASSWORD_MAX_LENGTH} 个字符~)`
      }
    } else {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
  }

}

export default Signup;