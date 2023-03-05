const axios = require('axios');
const fs = require('fs');

const downloadVideo = (url, filename) => {
  axios({
    url: url,
    method: 'GET',
    responseType: 'stream'
  }).then(response => {
    response.data.pipe(fs.createWriteStream(filename));
  });
}

const videoUrl = 'https://example.com/video.mp4';
const filename = 'my-video.mp4';

downloadVideo(videoUrl, filename);
