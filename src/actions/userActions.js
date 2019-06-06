import axios from "axios";
import {
  CREATE_USER,
  GET_USERS,
  GET_USER,
  GET_ERRORS,
  UPDATE_USER,
  DELETE_USER
} from "./dataTypes";

// CREATE USER
export const addUser = userData => dispatch => {
    axios
      .post("https://intense-inlet-82778.herokuapp.com/api/users", userData)
      .then(res =>
        dispatch({
          type: CREATE_USER,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// UPDATE USER
export const updateUser = userData => dispatch => {
  axios
    .put("https://intense-inlet-82778.herokuapp.com/api/users", userData)
    .then(res =>
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// GET USERS
export const getUsers = () => dispatch => {
  axios
    .get("https://intense-inlet-82778.herokuapp.com/api/users")
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USERS,
        payload: null
      })
    );
};



// GET USER
export const getUser = id => dispatch => {
  axios
    .get(`https://intense-inlet-82778.herokuapp.com/api/users/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER,
        payload: null
      })
    );
};

// DELETE USER
export const deleteUser = id => dispatch => {
  axios
    .delete(`https://intense-inlet-82778.herokuapp.com/api/users/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_USER,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
