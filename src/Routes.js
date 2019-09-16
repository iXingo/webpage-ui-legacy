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
  ResetPasswd as ResetPasswdPage,
  SinglePost as SinglePostPage,
  Friend as FriendPage,
  Home as HomePage
} from './pages';
import { CardPaper as CardPage} from './components';
import { Album as AlbumPage} from './components';
class Routes extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/sign-in"
        />
        <RouteWithLayout
          component={ProductListPage}
          exact
          layout={MainLayout}
          path="/products"
        />
        <RouteWithLayout
          component={CardPage}
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
          component={SinglePostPage}
          exact
          layout={MinimalLayout}
          path="/post/:id"
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
        <Redirect to="/not-found" /> 
      </Switch>
    );
  }
};

export default withRouter(Routes);
