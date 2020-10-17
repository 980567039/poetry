import axios from '../utils/interactive';

// get
const getTodayPoetry = _ => axios.get('/toDayPoetry', _);

// post
const postAny = _ => axios.post('/api', _);

export {
  getTodayPoetry,
  postAny
};
