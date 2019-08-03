import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';



import {
  // Dashboard as DashboardView,
  // ProductList as ProductListView,
  // UserList as UserListView,
  // Typography as TypographyView,
  // Icons as IconsView,
  // Account as AccountView,
  // Settings as SettingsView,
  SignUp as SignUpPage,
  SignIn as SignInPage,
  NotFound as NotFoundPage,
  Agreement as AgreementPage,
  Blog as BlogPage
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
        {/* <RouteWithLayout
          component={DashboardView}
          exact
          layout={MainLayout}
          path="/dashboard"
        />
        <RouteWithLayout
          component={UserListView}
          exact
          layout={MainLayout}
          path="/users"
        />
        <RouteWithLayout
          component={ProductListView}
          exact
          layout={MainLayout}
          path="/products"
        />
        <RouteWithLayout
          component={TypographyView}
          exact
          layout={MainLayout}
          path="/typography"
        />
        <RouteWithLayout
          component={IconsView}
          exact
          layout={MainLayout}
          path="/icons"
        />
        <RouteWithLayout
          component={AccountView}
          exact
          layout={MainLayout}
          path="/account"
        />
        <RouteWithLayout
          component={SettingsView}
          exact
          layout={MainLayout}
          path="/settings"
        /> */
        <RouteWithLayout
          component={CardPage}
          exact
          layout={MainLayout}
          path="/card"
          {...this.props}
        />}
        <RouteWithLayout
          component={AlbumPage}
          exact
          layout={MainLayout}
          path="/album"
          {...this.props}
        />}
        <RouteWithLayout
          component={BlogPage}
          exact
          layout={MainLayout}
          path="/blog"
          {...this.props}
        />}
        <RouteWithLayout
          component={SignUpPage}
          exact
          layout={MainLayout}
          path="/sign-up"
          {...this.props}
        />}
        <RouteWithLayout
          component={SignInPage}
          exact
          layout={MainLayout}
          path="/sign-in"
          {...this.props}
        />
        { <RouteWithLayout
          component={NotFoundPage}
          exact
          layout={MainLayout}
          path="/not-found"
          {...this.props}
        />}
                { <RouteWithLayout
          component={AgreementPage}
          exact
          layout={MainLayout}
          path="/user-agreement"
          {...this.props}
        />}
        <Redirect to="/not-found" /> 
      </Switch>
    );
  }
};

export default Routes;
