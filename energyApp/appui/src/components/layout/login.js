import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {Redirect} from "react-router";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      axios.post("http://localhost:8080/users/session/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.setState({redirect:true});
      })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(user);
  }

  render() {
    const {redirect} = this.state;
    if (redirect) {
      return <Redirect to = "/dashboard"/>;
    }
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your account. 
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Username"
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
                <button type="button" className="btn btn-info btn-block mt-4" onClick = {this.handleClick}>
                    Login
                </button>
              </form>
              <div className = "row">
                <div className = "col">
                    <Link to = "/register">
                        Don't have an account? Sign up
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
