import axios from 'axios';
import setToken from '../utils/setToken';
import jwt_decode from 'jwt-decode';

export const register = user => dispatch => {
  axios
    .post('http://localhost:5000/users/register', user)
    .then(res => dispatch({
      type: 'REGISTER_SUCCESS',
    }))
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    );
};

export const login = user => dispatch => {
  axios
    .post('http://localhost:5000/users/auth', user)
    .then(res => {
      const  token  = res.data;
      localStorage.setItem('token', token);
      setToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    );
};


export const setCurrentUser = decoded => {
  return {
    type: 'SET_CURRENT_USER',
    payload: decoded
  };
};


export const logout = () => dispatch => {
  localStorage.removeItem('token');
  setToken(false);
  dispatch(setCurrentUser({}));
};