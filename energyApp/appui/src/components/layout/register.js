import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      passconfirm: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      if (this.state.password == this.state.passconfirm) {
      axios.post("http://localhost:8080/users", {
          name: this.state.name,
          username: this.state.username,
          password: this.state.password
      })
      .then(response => console.log(response));
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your account 
              </p>
              <form>
              <div className="form-group">
                  <input
                    type="name"
                    className="form-control form-control-lg"
                    placeholder="name Address"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="username"
                    className="form-control form-control-lg"
                    placeholder="username Address"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
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
                    type="passconfirm"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="passconfirm"
                    value={this.state.passconfirm}
                    onChange={this.onChange}
                  />
                </div>
                <button type="button" className="btn btn-info btn-block mt-4" onClick = {this.handleClick}>
                    Register 
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;