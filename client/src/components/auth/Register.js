import React, { Component } from 'react'

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  }

  onChange = e => {
    // e.target.name accesses the name prop of the inputs (e.target)
    // the [] is accessing that key in state since the e.target.name values match
    // the state object keys
    console.log('event: ', e);
    console.log('event target: ', e.target);
    console.log('event target name: ', e.target.name);
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                Sign Up
              </h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form action="create-profile.html">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Name" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Email Address" 
                    name="email" 
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <small classNameName="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    placeholder="Password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    placeholder="Confirm Password" 
                    name="password2" 
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
