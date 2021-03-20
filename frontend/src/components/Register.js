import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from '../auth/AuthContext'

const Register = (props) => {
    const authContext=useContext(AuthContext)
    const {registeruser} =authContext;
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    username:""
  });
  const history=useHistory();
  const { name, email, password ,username} = user;
  const onChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit=(e)=>{
     e.preventDefault();
     registeruser(user,history)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm-4 ml-5 mt-5">
          <h3>Register as new User</h3>
          <div className="form-group">
            <label>Name :</label>
            <input
              className="form-control"
              type="text"
              name="name"
              required
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>UserName :</label>
            <input
              className="form-control"
              type="text"
              name="username"
              required
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input
              className="form-control"
              type="email"
              name="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>password :</label>
            <input
              className="form-control"
              type="password"
              name="password"
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <input className="btn btn-success" type="submit" value="Register" />
        </div>
      </div>
    </form>
  );
};

export default Register;
