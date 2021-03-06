import axios from 'axios';
import { SWAPI_PLANETS_ENDPOINT } from '../config/ApiConfig';

const getPlanetsCount = () => new Promise(async resolve => {
  const response = {
    error: false,
    message: '',
    data: 0
  };
  let apiResponse = {};

  try {
    apiResponse = await axios.get(`${SWAPI_PLANETS_ENDPOINT}`);
    response.data = apiResponse.data.count;
  } catch (error) {
    response.error = true;
    response.message = error.toString();
  }

  resolve(response);
});

const getPlanetById = (id = 0) => new Promise(async resolve => {
  const response = {
    error: false,
    message: '',
    data: {}
  };
  let apiResponse = {};

  try {
    apiResponse = await axios.get(`${SWAPI_PLANETS_ENDPOINT}${id}/`);
    response.data = apiResponse.data;
  } catch (error) {
    response.error = true;
    response.message = error.toString();
  }

  resolve(response);
});

const PlanetsAPI = {
  getPlanetsCount,
  getPlanetById
};

export default PlanetsAPI;
