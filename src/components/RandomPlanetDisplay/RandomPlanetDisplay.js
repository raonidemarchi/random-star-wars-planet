import React, { useState, useEffect } from 'react';
import Card, { CardTitle, CardBody, CardFooter } from '../Card/Card';
import Button from '../Button/Button';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import styles from './RandomPlanetDisplay.module.scss';
import { formatNumber, getRandomNumber } from '../../util';
import PlanetsAPI from '../../api/PlanetsAPI';
import FilmsAPI from '../../api/FilmsAPI';
import deathStarIcon from '../../assets/icons/death-star.svg';
import StarWarsLogo from '../../assets/img/star-wars-logo.png';

function RandomPlanetDisplay() {
  const [planetsCount, setPlanetsCount] = useState(0);
  const [planet, setPlanet] = useState({});
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadingPlanet, setLoadingPlanet] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [filmsError, setFilmsError] = useState(false);

  const fetchPlanetsCount = async () => {
    const result = await PlanetsAPI.getPlanetsCount();

    setError(false);

    if (result.error) {
      setError(true);
      setErrorMessage(result.message);

      return;
    }

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
    setError(false);

    randomId = getRandomNumber(1, planetsCount);
    result = await PlanetsAPI.getPlanetById(randomId);

    setLoadingPlanet(false);

    if (result.error) {
      setError(true);
      setErrorMessage(result.message);

      return;
    }

    setPlanet(result.data);
  }

  const fetchFilmsTitle = async (planet = {}) => {
    const filmsTitleArray = await FilmsAPI.getFilmsTitleByUrlArray(planet.films);

    if (filmsTitleArray.error) {
      setFilmsError(true);
    }

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
                      <span className={styles.greyText}>Featured in</span> {featuredFilms.join(', ')}
                    </>
                }

                {filmsError && <p className={styles.filmsErrorMessage}>We couldn't retreive all featured films.</p>}
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
              Houve um problema de conexão.
            </p>

            <span className={styles.noConnectionDetails}>{errorMessage}</span>

            <div className={styles.buttonMargin}>
              <ButtonSecondary onClick={() => fetchPlanetsCount()}>Tentar novamente</ButtonSecondary>
            </div>
          </>
      }
    </div>
  );
}

export default RandomPlanetDisplay;
