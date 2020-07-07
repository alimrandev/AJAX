// creating a http library

class Http {
  async get(url) {
    const response = await fetch(url).then((data) => data.json());
    return response;
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((data) => data.json());
    return response;
  }
}
