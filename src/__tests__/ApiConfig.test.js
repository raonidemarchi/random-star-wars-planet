import { SWAPI_URL, SWAPI_PLANETS_ENDPOINT, SWAPI_FILMS_ENDPOINT } from '../config/ApiConfig';

describe('API config variables', () => {
  test('Should have SWAPI url', () => {
    expect(typeof SWAPI_URL).toBe('string');
    expect(SWAPI_URL.length).toBeGreaterThan(0);
  });

  test('Should have planets endpoint described', () => {
    expect(typeof SWAPI_PLANETS_ENDPOINT).toBe('string');
    expect(SWAPI_PLANETS_ENDPOINT.length).toBeGreaterThan(0);
  });

  test('Should have films endpoint described', () => {
    expect(typeof SWAPI_FILMS_ENDPOINT).toBe('string');
    expect(SWAPI_FILMS_ENDPOINT.length).toBeGreaterThan(0);
  });
});