import axios from 'axios';

const getFilmTitleByUrl = (url = '') => new Promise(async resolve => {
  const response = {
    error: false,
    message: '',
    data: {}
  };
  let apiResponse = {};
  
  try {
    apiResponse = await axios.get(url);
    response.data = apiResponse.data.title;
  } catch (error) {
    response.error = true;
    response.message = error.toString();
  }

  resolve(response);
})

const getFilmsTitleByUrlArray = (urlArray = []) => new Promise(async resolve => {
  const response = {
    error: false,
    message: '',
    data: []
  };
  let apiResponse = {};

  if (urlArray.length === 0) {
    return resolve(response);
  }

  apiResponse = await Promise.all(
    urlArray.map(film => getFilmTitleByUrl(film))
  );

  response.data = apiResponse.map(response => response.data);

  resolve(response);
});

const FilmsAPI = {
  getFilmTitleByUrl,
  getFilmsTitleByUrlArray
};

export default FilmsAPI;
