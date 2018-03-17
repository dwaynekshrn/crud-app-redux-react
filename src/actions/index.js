import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=SHINOBI'

export const fetchPosts = () => {
const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return { type: FETCH_POSTS, payload: req}
}

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}posts${API_KEY}`, values)
  .then(() => callback());
  return {type: CREATE_POST, payload: request}
}

export const fetchPost = id => {
    const req = axios.get(`${ROOT_URL}posts/${id}${API_KEY}`)
    return {type: FETCH_POST, payload: req}
}

export const deletePost = (id, callback) => {
   const req = axios.delete(`${ROOT_URL}posts/${id}${API_KEY}`)
   .then(() => callback());
   return {type: DELETE_POST, payload: id}

}