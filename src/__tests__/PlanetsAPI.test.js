import PlanetsAPI from '../api/PlanetsAPI';

describe('Planets API', () => {
  test('Should return at least 1 planet', async () => {
    const planetsCount = await PlanetsAPI.getPlanetsCount();

    expect(planetsCount.error).toBe(false);
    expect(planetsCount.message).toBe('');
    expect(planetsCount.data).toBeGreaterThanOrEqual(1);
  });

  test('Should return planet data', async () => {
    const planet = await PlanetsAPI.getPlanetById(1);
    
    expect(planet.error).toBe(false);
    expect(planet.message).toBe('');
    expect(typeof planet.data.name).toBe('string');
    expect(typeof planet.data.population).toBe('string');
    expect(typeof planet.data.terrain).toBe('string');
    expect(Array.isArray(planet.data.films)).toBe(true);
  });
});