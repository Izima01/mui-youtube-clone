import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: '',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '20',
    order: 'relevance'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getYoutubeAPIData = (query) => {
    const apiOptions = {
        ...options, params: {
            ...options.params,
            q: query
        }
    };

    return axios.request(apiOptions);
};