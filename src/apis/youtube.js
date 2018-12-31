import axios from 'axios';

//added 'type' parameter to only return videos
// this removes channel or playlist which 
// provide no videoid and hence error

const API_KEY = process.env.REACT_APP_API_KEY_YT;

export default  axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY
}
});