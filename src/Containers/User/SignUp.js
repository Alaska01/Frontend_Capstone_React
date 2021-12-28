/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import authenticate from '../../Redux/Actions/authenticate';

import { userSignup, SignupFailure } from '../../Redux/Actions/signup';

const SignUp = () => {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup);

  const [person, setPerson] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001/api/v1/signup';
    axios
      .post(url, { user: person })
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));
        dispatch(
          userSignup({
            token: response.data.token,
            username: response.data.username,
          }),
        );
      })
      .catch(() => {
        dispatch(
          SignupFailure(
            'Username must be longer than 4 and password longer than 8. Try again!',
          ),
        );
      });

    if (person.username && person.password && person.password_confirmation) {
      dispatch(
        userSignup({
          ...person,
        }),
      );
    }
  };

  if (signup.user.token) {
    const { user } = signup;
    dispatch(
      authenticate({
        status: true,
        token: user.token,
        username: user.username,
      }),
    );
  }
  const { username, password, password_confirmation } = person;
  return (
    <div className="col-4 login">
      <h2 className="text-center  mb-3">User SignUp</h2>
      {signup.user.token && <Navigate to="/houses" replace />}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password "
            value={password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary form-control">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
