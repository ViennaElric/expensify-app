//Challenge//
    //1. create LoginPage component with login button
    //2. add snapshot test for LoginPage
    //3. Show login component at root of app -> /
    //4. Show ExpenseDashboardPage at -> /dashboard

import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);