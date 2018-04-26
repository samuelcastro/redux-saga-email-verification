const API_KEY = 'at_NN5xwxsKJFP4Agk0db1j1FjvgOtpv';
const API = 'https://emailverification.whoisxmlapi.com/api/v1?';

// NOTE
// This api request needs CORS enabled, since this is just a frontend
// solution, make sure you have this chrome extension installed to by pass it:
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

const validateEmail = (email: string) => {
  const url = `${API}apiKey=${API_KEY}&emailAddress=${email}`
  const method = 'GET';

  const request = new Request(url, {method});

  return fetch(request)
    .then(response => {
      return response.json().then(json => ({ json, response }));
    });
}

export default validateEmail;
