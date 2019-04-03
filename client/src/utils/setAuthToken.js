import axios from 'axios';  // using axios because axios-defaults allows you to set default headers
// function for attaching authorization header if token exists
const setAuthToken = token => {
  if (token) {
    // setting default authorization in header to token
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;