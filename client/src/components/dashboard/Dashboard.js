import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profileActions';

import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';

const Dashboard = props => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state =< ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);