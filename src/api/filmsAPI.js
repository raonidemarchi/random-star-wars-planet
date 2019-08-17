import axios from 'axios';

const response = {
  error: false,
  message: '',
  data: {}
};

let apiResponse = {};

const getFilmTitleByUrl = (url) => new Promise(
  async resolve => {
    try {
      apiResponse = await axios.get(url);
      response.data = apiResponse.data.title;
    } catch (error) {
      response.error = true;
      response.message = error.toString();
    }

    resolve(response);
  }
);

export {
  getFilmTitleByUrl
}