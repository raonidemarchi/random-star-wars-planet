import React, { useState, useEffect } from 'react';
import Card, { CardTitle, CardBody, CardFooter } from '../Card/Card';
import Button from '../Button/Button';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import styles from './RandomPlanetDisplay.module.scss';
import { formatNumber, getRandomNumber } from '../../helper';
import PlanetsAPI from '../../api/PlanetsAPI';
import FilmsAPI from '../../api/FilmsAPI';
import deathStarIcon from '../../assets/icons/death-star.svg';

function RandomPlanetDisplay() {
  const [planetsCount, setPlanetsCount] = useState(0);
  const [planet, setPlanet] = useState({});
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadingPlanets, setLoadingPlanets] = useState(true);

  const fetchPlanetsCount = async () => {
    const result = await PlanetsAPI.getPlanetsCount();

    if (result.error) {
      setError(true);
      setErrorMessage(result.message);

      return;
    }

    setPlanetsCount(result.data);
  }

  const fetchRandomPlanet = async (planetsCount = 0) => {
    const randomId = getRandomNumber(1, planetsCount);
    const result = await PlanetsAPI.getPlanetById(randomId);

    if (result.error) {
      setError(true);
      setErrorMessage(result.message);

      return;
    }

    setPlanet(result.data);
  }

  useEffect(() => {
    fetchPlanetsCount();
  }, []);

  useEffect(function handlePlanetsCountChange() {
    if (planetsCount === 0) {
      return;
    }

    fetchRandomPlanet(planetsCount);
  }, [planetsCount]);
  
  useEffect(function handlePlanetChange() {
    if (Object.entries(planet).length === 0) {
      return;
    }

    const getFilmsTitle = async () => {
      const filmsTitleArray = await FilmsAPI.getFilmsTitleByUrlArray(planet.films);

      setFeaturedFilms(filmsTitleArray.data);
    }
  
    getFilmsTitle();
    document.title = planet.name;
  }, [planet]);

  if (error) {
    return (
      <div className={styles.container}>
        <img src={deathStarIcon} alt="Death Star icon" className={styles.noConnectionIcon} />

        <p className={styles.noConnectionMessage}>
          Houve um problema de conexão.
        </p>

        <span className={styles.noConnectionDetails}>{errorMessage}</span>

        <div className={styles.buttonMargin}>
          <ButtonSecondary onClick={() => fetchPlanetsCount()}>Tentar novamente</ButtonSecondary>
        </div>
      </div>
    )
  }

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
