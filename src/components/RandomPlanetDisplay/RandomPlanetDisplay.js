import React, { useState, useEffect, useCallback } from 'react';
import Card, { CardTitle, CardBody, CardFooter } from '../Card/Card';
import Button from '../Button/Button';
import styles from './RandomPlanetDisplay.module.scss';
import { formatNumber } from '../../helper';

function RandomPlanetDisplay() {
  const [planetsCount, setPlanetsCount] = useState(0);
  const [planet, setPlanet] = useState({});
  const [featuredFilms, setFeaturedFilms] = useState([]);
  // const [loadingPlanets, setLoadingPlanets] = useState(true);

  const fetchPlanetsCount = async () => {
    const response = await fetch('https://swapi.co/api/planets/');
    const result = await response.json();

    setPlanetsCount(result.count);
  }

  const fetchRandomPlanet = async (planetsCount) => {
    const randomId = Math.floor((Math.random() * planetsCount) + 1);
    const response = await fetch(`https://swapi.co/api/planets/${randomId}/`);
    const result = await response.json();

    setPlanet(result);
  }

  const getFilmsTitle = async (planet, _fetchFilm) => {
    const filmsArray = planet.films;
    let filmsTitleArray = [];

    if (filmsArray.length > 0) {
      filmsTitleArray = await Promise.all(filmsArray.map(film => _fetchFilm(film)));
    }

    setFeaturedFilms(filmsTitleArray);
  }

  const fetchFilm = useCallback(async (filmUrl) => {
    const response = await fetch(filmUrl);
    const result = await response.json();

    return result.title;
  }, [])

  useEffect(() => {
    fetchPlanetsCount();
  }, []);

  useEffect(() => {
    if (planetsCount > 0) {
      fetchRandomPlanet(planetsCount);
    }
  }, [planetsCount]);

  useEffect(() => {
    if (Object.entries(planet).length > 0) {
      getFilmsTitle(planet, fetchFilm);
      document.title = planet.name;
    }
  }, [planet, fetchFilm]);

  return (
    <div className={styles.container}>
      <Card>
        <CardTitle>{planet.name}</CardTitle>

        <CardBody>
          <span className={styles.greyText}>Population:</span> {formatNumber(planet.population)}<br />
          <span className={styles.greyText}>Climate:</span> {planet.climate}<br />
          <span className={styles.greyText}>Terrain:</span> {planet.terrain}
        </CardBody>

        <CardFooter>
          {
            featuredFilms.length === 0 ?
              <span className={styles.greyText}>Not featured in any film</span>
            :
              <>
                <span className={styles.greyText}>Featured in</span> {featuredFilms.join(', ')}
              </>
          }
        </CardFooter>
      </Card>

      <div className={styles.buttonMargin}>
        <Button onClick={() => fetchRandomPlanet(planetsCount)}>Next</Button>
      </div>
    </div>
  );
}

export default RandomPlanetDisplay;
