import React, {Component} from 'react';
import {addComment, deleteComment, getPost} from '../../util/APIUtils';
import {PostMain} from './Components';
import {notification} from "antd";


class SinglePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: "",
      isLoading: false
    };
    this.loadPost = this.loadPost.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }


  loadPost(id) {
    let {history} = this.props;
    let promise = getPost(id);
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
        .then(response => {
          this.setState({
            post: response,
            isLoading: false
          });
          if (response.code === 400) {
            history.push("/not-found");
          }
          document.title = this.state.post.title + " | 星狗网";
        }).catch(error => {
      this.setState({
        isLoading: false
      });
      history.push("/not-found");
    });

  }

  handleComment(value) {
    let {currentUser} = this.props;
    if (!currentUser) {
      alert("先登录啊~~~");
      return;
    }
    let commentRequest = {
      postId: this.state.post.id,
      content: value
    }
    addComment(commentRequest)
        .then(response => {
              notification.success({
                message: '星狗网 Web App',
                description: "评论成功！经审核后可见!",
              });
              console.log(response);
              value = "";
              const newComment =
                  {
                    "id": response.commentId,
                    "content": commentRequest.content + "\n【当前评论仅你个人可见, 经程序自动审核后方能他人可见,请稍后刷新查看】",
                    "source": "默认评论框",
                    "status": 1,
                    "creationDateTime": new Date().toUTCString(),
                    "commenter": {
                      "id": currentUser.id,
                      "username": currentUser.username,
                      "name": currentUser.name,
                      "sex": currentUser.sex,
                      "headUrl": currentUser.headUrl,
                      "isVerified": currentUser.isVerified,
                      "verifiedContent": currentUser.verifiedContent,
                      "introduction": currentUser.introduction
                    },
                    "replies": null
                  };
              let postWithNewComment = {};
              postWithNewComment = Object.assign(postWithNewComment, this.state.post);
              postWithNewComment.comments.push(newComment);
              this.setState({
                post: postWithNewComment,
                isLoading: false
              });
            },
        ).catch(error => {
      notification.success({
        message: '星狗网 Web App',
        description: "评论失败！" + error.message,
      });
      console.log(error);
    });
  }

  handleDeleteComment(commentId) {
    let {currentUser} = this.props;
    if (!commentId) {
      alert("当前评论正在审核， 不支持删除操作！");
      return;
    }
    if (!currentUser) {
      alert("先登录啊~~~");
      return;
    }
    deleteComment(commentId)
        .then(response => {
              notification.success({
                message: '星狗网 Web App',
                description: "删除评论成功！在审核后生效， 请稍后刷新后查看！",
              });
              console.log(response);
              let cms = this.state.post.comments;
              let newComments = cms.filter(comment => comment.id !== commentId);
              if (!newComments) {
                newComments = [];
              }
              let newPost = {};
              newPost = Object.assign(newPost, this.state.post);
              newPost.comments = newComments;
              this.setState({
                post: newPost,
                isLoading: false
              });
            },
        ).catch(error => {
      notification.success({
        message: '星狗网 Web App',
        description: "删除评论失败！" + error.message,
      });
      console.log(error);
    });
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.loadCurrentUser();
    }
    const {computedMatch: {params}} = this.props;
    this.loadPost(params.id);

  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        post: "",
        isLoading: false
      });
      const {computedMatch: {params}} = this.props;
      this.loadPost(params.id);
    }
  }

  render() {
    const {post} = this.state;
    return (
        <div>
          <PostMain post={post}
                    handleComment={this.handleComment}
                    handleDeleteComment={this.handleDeleteComment}
                    {...this.props}/>
        </div>
    );
  }

}


export default SinglePost;