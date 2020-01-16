import React, {Component} from 'react';
import {getAllFriends} from '../../../../util/APIUtils';
import FriendContent from '../FriendContent';

class FriendList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      page: 0,
      size: 10,
      totalElements: 0,
      totalPages: 0,
      last: true,
      isLoading: false
    };
    this.loadFriendList = this.loadFriendList.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }


  loadFriendList() {
    let promise = getAllFriends();
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
        .then(response => {
          const friends = this.state.friends.slice();
          this.setState({
            friends: friends.concat(response),
            page: response.page,
            size: response.size,
            totalElements: response.totalElements,
            totalPages: response.totalPages,
            last: response.last,
            isLoading: false
          })
        }).catch(error => {
      this.setState({
        isLoading: false
      })
    });
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.loadCurrentUser();
    }
    this.loadFriendList();
  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        friends: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0,
        last: true,
        isLoading: false
      });
      this.loadFriendList();
    }
  }

  handleLoadMore() {
    this.loadFriendList();
  }

  render() {
    return (
        this.state.friends.map(friend => (
            <FriendContent friend={friend} {...this.props}/>
        ))
    );
  }

}


export default FriendList;