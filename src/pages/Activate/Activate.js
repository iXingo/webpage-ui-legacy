import React, {Component} from 'react';
import {userActivate} from '../../util/APIUtils';
import ActivatePage from './ActivatePage'

class Activate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: -1,
      message: "",
      data: "",
      isLoading: false
    };
    this.activateUser = this.activateUser.bind(this);
  }


  activateUser(email, activateCode) {
    let promise = userActivate(email, activateCode);
    let {history} = this.props;
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
        .then(response => {
          this.setState({
            code: response.code,
            message: response.message,
            data: response.data,
            isLoading: false
          });
        }).catch(error => {
      this.setState({
        isLoading: false
      });
      history.push("/not-found");
    });

  }

  componentDidMount() {
    const {computedMatch: {params}} = this.props;
    this.activateUser(params.email, params.activateCode);
  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        code: -1,
        message: "",
        data: "",
        isLoading: false
      });
      const {computedMatch: {params}} = this.props;
      this.activateUser(params.email, params.activateCode);
    }
  }

  render() {
    const info = this.state;
    return (
        <div>
          <ActivatePage info={info} {...this.props}/>
        </div>
    );
  }

}


export default Activate;