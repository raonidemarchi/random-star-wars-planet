import React, { useState, useEffect } from 'react';
import Card, { CardTitle, CardBody, CardFooter } from '../Card/Card';
import Button from '../Button/Button';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import styles from './RandomPlanetDisplay.module.scss';
import { formatNumber, getRandomNumber } from '../../Utils';
import PlanetsAPI from '../../api/PlanetsAPI';
import FilmsAPI from '../../api/FilmsAPI';
import deathStarIcon from '../../assets/icons/death-star.svg';
import StarWarsLogo from '../../assets/img/star-wars-logo.png';

function RandomPlanetDisplay() {
  const [planetsCount, setPlanetsCount] = useState(0);
  const [planet, setPlanet] = useState({});
  const [featuredFilms, setFeaturedFilms] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [filmsError, setFilmsError] = useState(false);

  const [loadingPlanet, setLoadingPlanet] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [loadingPlanetsCount, setLoadingPlanetsCount] = useState(true);
  
  const fetchPlanetsCount = async () => {
    let result = {}
    
    setLoadingPlanetsCount(true);
    
    result = await PlanetsAPI.getPlanetsCount();

    setLoadingPlanetsCount(false);
    setError(result.error);
    setErrorMessage(result.message);

    if (+result.data === +localStorage.planetsCount) {
      return;
    }

    setPlanetsCount(result.data);
    localStorage.planetsCount = result.data;
  }

  const fetchRandomPlanet = async (planetsCount = 0) => {
    let randomId = 0;
    let result = {};

    setLoadingPlanet(true);
    setLoadingFilms(true);

    randomId = getRandomNumber(1, planetsCount);
    result = await PlanetsAPI.getPlanetById(randomId);

    setLoadingPlanet(false);
    setError(result.error);
    setErrorMessage(result.message);
    setPlanet(result.data);
  }

  const fetchFilmsTitle = async (planet = {}) => {
    const filmsTitleArray = await FilmsAPI.getFilmsTitleByUrlArray(planet.films);

    setFilmsError(filmsTitleArray.error);
    setLoadingFilms(false);
    setFeaturedFilms(filmsTitleArray.data);
  }

  useEffect(function init() {
    if (localStorage.planetsCount) {
      setPlanetsCount(localStorage.planetsCount);
    }

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
  
    fetchFilmsTitle(planet);
    document.title = planet.name;
  }, [planet]);

  return (
    <div className={styles.container}>
      <img src={StarWarsLogo} alt="Star Wars logo" className={styles.starWarsLogoImg} />

      {
        !error ?
          <>
            <Card>
              <CardTitle loading={loadingPlanet}>{planet.name}</CardTitle>

              <CardBody loading={loadingPlanet}>
                <span className={styles.greyText}>Population:</span> {formatNumber(planet.population)}<br />
                <span className={styles.greyText}>Climate:</span> {planet.climate}<br />
                <span className={styles.greyText}>Terrain:</span> {planet.terrain}
              </CardBody>

              <CardFooter loading={loadingFilms}>
                {
                  featuredFilms.length === 0 ?
                    <span className={styles.greyText}>Not featured in any film</span>
                  :
                    <>
                      <span className={styles.greyText}>Featured in {featuredFilms.length} {featuredFilms.length > 1 ? 'films' : 'film'}</span><br />
                      {featuredFilms.join(', ')}
                    </>
                }

                {filmsError && <p className={styles.filmsErrorMessage}>We couldn't retreive all films.</p>}
              </CardFooter>
            </Card>

            <div className={styles.buttonMargin}>
              <Button disabled={loadingPlanet} onClick={() => fetchRandomPlanet(planetsCount)}>{loadingPlanet ? 'Loading planet' : 'Next'}</Button>
            </div>
          </>
        :
          <>
            <img src={deathStarIcon} alt="Death Star icon" className={styles.noConnectionIcon} />

            <p className={styles.noConnectionMessage}>
              There's a connection problem.
            </p>

            <span className={styles.noConnectionDetails}>{errorMessage}</span>

            <div className={styles.buttonMargin}>
              <ButtonSecondary disabled={loadingPlanetsCount} onClick={() => fetchPlanetsCount()}>{loadingPlanetsCount ? 'Tentando connection...' : 'Try to connect'}</ButtonSecondary>
            </div>
          </>
      }
    </div>
  );
}

export default RandomPlanetDisplay;
