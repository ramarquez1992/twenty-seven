const BASE_URL = '/api/';

function authHeader() {
  let token = JSON.parse(localStorage.getItem('token'));

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
  return response.json();
}
