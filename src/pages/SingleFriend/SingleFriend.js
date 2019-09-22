import React, { Component } from 'react';
import { getFriend } from '../../util/APIUtils';
import { FriendMain } from './Components';

class SingleFriend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friend: "",
      isLoading: false
    };
    this.loadFriend = this.loadFriend.bind(this);
  }


  loadFriend(id) {
    let promise = getFriend(id);
    let { history } = this.props;
    if(!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise            
    .then(response => {
      this.setState({
          friend: response,
          isLoading: false
      });
      if(response.code === 400){
          history.push("/not-found"); 
      }
      document.title = this.state.friend.title + " | 星狗网";
    }).catch(error => {
      this.setState({
          isLoading: false
      });
      history.push("/not-found"); 
    });  
      
  }

  componentDidMount() {
    if(!this.props.isAuthenticated){
      this.props.loadCurrentUser();
    }
    const { computedMatch: { params } } = this.props;
    this.loadFriend(params.id);
    
  }

  componentDidUpdate(nextProps) {
    if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
          friend: "",
          isLoading: false
      });    
      const { computedMatch: { params } } = this.props;
      this.loadFriend(params.id);
    }
  }

  render() {
    const {friend} = this.state;
    return (
      <div>
        <FriendMain friend={friend} {...this.props}></FriendMain>
      </div> 
    );
  }
            
}



export default SingleFriend;