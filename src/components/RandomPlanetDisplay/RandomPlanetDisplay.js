import React, { useState, useEffect } from 'react';
import Card, { CardTitle, CardBody, CardFooter } from '../Card/Card';
import Button from '../Button/Button';
import styles from './RandomPlanetDisplay.module.scss';
import { formatNumber } from '../../helper';
import { getPlanetsCount, getPlanetById } from '../../api/planetsAPI';
import { getFilmTitleByUrl } from '../../api/filmsAPI';

function RandomPlanetDisplay() {
  const [planetsCount, setPlanetsCount] = useState(0);
  const [planet, setPlanet] = useState({});
  const [featuredFilms, setFeaturedFilms] = useState([]);
  // const [loadingPlanets, setLoadingPlanets] = useState(true);

  const fetchPlanetsCount = async () => {
    const result = await getPlanetsCount();
    
    setPlanetsCount(result.data);
  }

  const fetchRandomPlanet = async (planetsCount) => {
    const randomId = Math.floor((Math.random() * planetsCount) + 1);
    const result = await getPlanetById(randomId);

    setPlanet(result.data);
  }

  const getFilmsTitle = async (planet) => {
    const filmsArray = planet.films;
    let filmsTitleArray = [];

    if (filmsArray.length > 0) {
      filmsTitleArray = await Promise.all(
        filmsArray.map(async film => {
          const result = await getFilmTitleByUrl(film);
          return result.data;
        })
      )
    }

    setFeaturedFilms(filmsTitleArray);
  }

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
      getFilmsTitle(planet);
      document.title = planet.name;
    }
  }, [planet]);

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
