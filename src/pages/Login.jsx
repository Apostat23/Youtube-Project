import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sessionLogin, sessionLogout } from '../store/services/sessionService';
import { loginApi } from '../store/services/loginService';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.session);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sessionLogin({ username, password }));
  };
  const userHandler = (username) => {
    setUsername(username.target.value);
  };
  const passwordHandler = (password) => {
    setPassword(password.target.value);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);
  const checkAuthUser = () => {
    if (user) {
      navigate('/');
    }
    return false;
  };

  return (
    <>
      {checkAuthUser()}
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={userHandler} type="text" name="username" />
        </label>
        <label>
          Password:
          <input onChange={passwordHandler} type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

Login.propTypes = {};

export default Login;
