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
  NotFound as NotFoundPage
} from './pages';

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
          component={SignInPage}
          exact
          layout={MinimalLayout}
          path="/sign-up"
          {...this.props}
        />}
        <RouteWithLayout
          component={SignInPage}
          exact
          layout={MinimalLayout}
          path="/sign-in"
          {...this.props}
        />
        { <RouteWithLayout
          component={NotFoundPage}
          exact
          layout={MinimalLayout}
          path="/not-found"
          {...this.props}
        />}
        <Redirect to="/not-found" /> 
      </Switch>
    );
  }
};

export default Routes;
