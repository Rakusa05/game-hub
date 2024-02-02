import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '22762e17e2e04b9d8349f381ba8beb02'
  }
})