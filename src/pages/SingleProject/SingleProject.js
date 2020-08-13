import React, {Component} from 'react';
import {addComment, deleteComment, getProject} from '../../util/APIUtils';
// import {ProjectMain} from './Components';
import {notification} from "antd";


class SingleProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: "",
      isLoading: false
    };
    this.loadProject = this.loadProject.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }


  loadProject(id) {
    let {history} = this.props;
    let promise = getProject(id);
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
      .then(response => {
        this.setState({
          project: response,
          isLoading: false
        });
        if (response.code === 400) {
          history.push("/not-found");
        }
        document.title = this.state.project.title + " | 星狗网";
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
      projectId: this.state.project.id,
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
          let projectWithNewComment = {};
          projectWithNewComment = Object.assign(projectWithNewComment, this.state.project);
          projectWithNewComment.comments.push(newComment);
          this.setState({
            project: projectWithNewComment,
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
          let cms = this.state.project.comments;
          let newComments = cms.filter(comment => comment.id !== commentId);
          if (!newComments) {
            newComments = [];
          }
          let newProject = {};
          newProject = Object.assign(newProject, this.state.project);
          newProject.comments = newComments;
          this.setState({
            project: newProject,
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
    this.loadProject(params.id);

  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        project: "",
        isLoading: false
      });
      const {computedMatch: {params}} = this.props;
      this.loadProject(params.id);
    }
  }

  render() {
    const {project} = this.state;
    return (
      <div>
        {/*<ProjectMain project={project}*/}
        {/*          handleComment={this.handleComment}*/}
        {/*          handleDeleteComment={this.handleDeleteComment}*/}
        {/*          {...this.props}/>*/}
      </div>
    );
  }

}


export default SingleProject;