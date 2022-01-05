import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import authenticate from '../../Redux/Actions/authenticate';
import { userLogin, loginFailure } from '../../Redux/Actions/login';
import LoginError from './LoginError';

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const auth = useSelector((state) => state.authenticate);

  const [person, setPerson] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://ayecapstonebackend.herokuapp.com/api/v1/login';
    axios
      .post(url, { ...person })
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));

        dispatch(
          userLogin({
            token: response.data.token,
            username: response.data.username,
            id: response.data.id,
          }),
        );
        dispatch(
          authenticate({
            status: true,
            token: response.data.token,
            username: response.data.username,
            id: response.data.id,
          }),
        );
      })
      .catch(() => {
        dispatch(loginFailure('Invalid username or Password. Try again!'));
      });
  };
  const { username, password } = person;
  return (
    <div className="col-4 login">
      <h2 className="text-center mb-4">User Login</h2>
      {login.error && <LoginError error={login.error} />}
      {auth.status && <Navigate to="/" replace />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control mb-4"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary  form-control">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
