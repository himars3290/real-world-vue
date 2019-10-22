import axios from 'axios'
import Nprogress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(config => {
  Nprogress.start();
  return config
});

apiClient.interceptors.response.use(response => {
  Nprogress.done();
  return response
});

export default {
  getEvents(perPage, page) {
    console.log(page);
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },

  getEvent(id) {
    return apiClient.get('/events/' + id)
  },

  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
