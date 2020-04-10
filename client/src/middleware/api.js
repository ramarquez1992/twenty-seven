import store from '../app/store';
import {localLogout} from "../components/auth/authSlice";

const BASE_URL = '/api/';

function authHeader() {
  const token = store.getState().auth.token;

  if (token) {
    return {'Authorization': 'Bearer ' + token.id_token};
  } else {
    return {};
  }
}

export async function callApi(endpoint, method, body) {
  const requestOptions = {
    method: method,
    headers: authHeader(),
    body: body ? JSON.stringify(body) : null
  };

  const response = await fetch(BASE_URL + endpoint, requestOptions);
  return response.status < 400 ? response.json() : localLogout();
}
