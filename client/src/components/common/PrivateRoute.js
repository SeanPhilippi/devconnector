import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// renaming component prop to Component so it can render as a React component
// spreading rest which is a new object that was created holding the rest of the props
// being destructured from props
const PrivateRoute = ({component: Component, auth, ...rest}) => (
  <Route 
  {...rest}
  // function that takes props and returns the Component with its props spread
  render={props => 
    // if isAuthenticated, return the Component, else redirect user to login component
    auth.isAuthenticated === true ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/login" />
    )
  }
  />
)

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,

})

export default connect(mapStateToProps)(PrivateRoute);
