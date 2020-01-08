import React, { Component } from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import {
  SignUp as SignUpPage,
  SignIn as SignInPage,
  NotFound as NotFoundPage,
  NotAuth as NotAuthPage,
  Agreement as AgreementPage,
  ProductList as ProductListPage,
  Project as ProjectPage,
  ResetPasswd as ResetPasswdPage,
  SinglePost as SinglePostPage,
  Friend as FriendPage,
  SingleFriend as SingleFriendPage,
  About as AboutPage,
  News as NewsPage,
  Home as HomePage,
  Activate as ActivatePage

} from './pages';
import { Album as AlbumPage} from './components';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/index"
        />
        <RouteWithLayout
          component={ProductListPage}
          exact
          layout={MainLayout}
          path="/products"
          {...this.props}
        />
        <RouteWithLayout
          component={ProjectPage}
          exact
          layout={MainLayout}
          path="/projects"
          {...this.props}
        />
        <RouteWithLayout
          component={AlbumPage}
          exact
          layout={MainLayout}
          path="/album"
          {...this.props}
        />
        <RouteWithLayout
          component={HomePage}
          exact
          layout={MainLayout}
          path="/index"
          {...this.props}
        />
        <RouteWithLayout
          component={SignUpPage}
          exact
          layout={MainLayout}
          path="/sign-up"
          {...this.props}
        />
        <RouteWithLayout
          component={SignInPage}
          exact
          layout={MainLayout}
          path="/sign-in"
          {...this.props}
        />
        <RouteWithLayout
          component={NewsPage}
          exact
          layout={MainLayout}
          path="/news"
          {...this.props}
        />
        <RouteWithLayout
          component={SinglePostPage}
          exact
          layout={MinimalLayout}
          path="/post/:id"
          {...this.props}
        />
        <RouteWithLayout
          component={SingleFriendPage}
          exact
          layout={MinimalLayout}
          path="/friend/:id"
          {...this.props}
        />
        <RouteWithLayout
          component={NotFoundPage}
          exact
          layout={MainLayout}
          path="/not-found"
          {...this.props}
        />
        <RouteWithLayout
          component={ResetPasswdPage}
          exact
          layout={MinimalLayout}
          path="/reset-passwd"
          {...this.props}
        />
        <RouteWithLayout
          component={AgreementPage}
          exact
          layout={MinimalLayout}
          path="/user-agreement"
          {...this.props}
        />
        <RouteWithLayout
          component={FriendPage}
          exact
          layout={MainLayout}
          path="/friends"
          {...this.props}
        />
        <RouteWithLayout
          component={NotAuthPage}
          exact
          layout={MainLayout}
          path="/please-login"
          {...this.props}
        />
        <RouteWithLayout
          component={AboutPage}
          exact
          layout={MainLayout}
          path="/about"
          {...this.props}
        />
        <RouteWithLayout
          component={ActivatePage}
          exact
          layout={MinimalLayout}
          path="/activate"
          {...this.props}
        />
        <Redirect to="/not-found" /> 
      </Switch>
    );
  }
};

export default withRouter(Routes);
