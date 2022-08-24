import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://angela-blog-app.herokuapp.com/api/',
})
