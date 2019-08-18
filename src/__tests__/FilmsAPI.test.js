import FilmsAPI from '../api/FilmsAPI';
import { SWAPI_FILMS_ENDPOINT } from '../config/ApiConfig';

describe('Films API', () => {
  test('Should return a film', async () => {
    const filmId = '1';
    const filmUrl = `${SWAPI_FILMS_ENDPOINT}${filmId}/`
    const film = await FilmsAPI.getFilmTitleByUrl(filmUrl);

    expect(film.error).toBe(false);
    expect(film.message).toBe('');
    expect(typeof film.data).toBe('string');
  });

  test('Should return an array with 2 films', async () => {
    const filmsArray = [`${SWAPI_FILMS_ENDPOINT}1/`, `${SWAPI_FILMS_ENDPOINT}2/`];
    const filmTitles = await FilmsAPI.getFilmsTitleByUrlArray(filmsArray);

    expect(filmTitles.error).toBe(false);
    expect(filmTitles.message).toBe('');
    expect(Array.isArray(filmTitles.data)).toBe(true);
    expect(filmTitles.data.length).toBe(2);
  });
});