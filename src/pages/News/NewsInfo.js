import React, {Component} from 'react';
import {getAllNews} from '../../util/APIUtils';
import News from "./News";
import {Instagram} from "react-content-loader";
import {ContentLoading} from "../../components";

class NewsInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: false
    };
    this.loadNewsList = this.loadNewsList.bind(this);
  }


  loadNewsList() {
    let promise = getAllNews();
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
      .then(response => {
        const news = this.state.news.slice();
        this.setState({
          news: news.concat(response),
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
    this.loadNewsList();
  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        news: [],
        isLoading: false
      });
      this.loadNewsList();
    }
  }


  render() {
    if (!this.state.news) {
      return (
        <div>
          <Instagram/>
          <ContentLoading/>
        </div>
      );
    }
    return (
      <News cards={this.state.news}/>
    );
  }

}


export default NewsInfo;