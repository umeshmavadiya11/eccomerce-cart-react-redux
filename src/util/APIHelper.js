import axios from 'axios';

// const BASE_URL= "http://localhost:3001"
const BASE_URL= "https://fakestoreapi.com"


const config = {
    baseUrl: BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  };
  
  
  const base = async param => {

    return await axios({
      method: param.method,
      baseURL: config.baseUrl,
      url: param.url,
      headers: config.headers,
      data: param.data,
    })
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        if (err.response) {
          return Promise.reject(err.response);
        } else {
          return Promise.reject('TIMEOUT');
        }
      });
  };
  
  const request = async (method, url) => {
    return await base({method, url})
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err));
  };
  
  const requestData = async (method, url, data) => {
    return await base({method, url, data})
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err));
  };
  
  export {request, requestData};