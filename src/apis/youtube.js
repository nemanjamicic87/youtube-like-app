import axios from 'axios';

const KEY = 'AIzaSyBlk5jlsXWqTmSp2UdZT_KnCIZx8of22Sg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    key: KEY
  }
});
