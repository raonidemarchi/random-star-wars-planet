import React, { useState, useEffect } from 'react';
import Card, { Title, Body, Footer } from '../Card/Card';
import Button from '../Button/Button';
import styles from './RandomPlanetDisplay.module.scss';

function RandomPlanetDisplay() {
  const [planetsCount, setPlanetsCount] = useState(0);
  const [planet, setPlanet] = useState({});
  const [featuredFilms, setFeaturedFilms] = useState([]);

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
    }
  }, [planet]);

  async function fetchPlanetsCount() {
    const response = await fetch('https://swapi.co/api/planets/');
    const result = await response.json();

    setPlanetsCount(result.count);
  }

  async function fetchRandomPlanet(planetsCount) {
    const randomId = Math.floor((Math.random() * planetsCount) + 1);
    const response = await fetch(`https://swapi.co/api/planets/${randomId}/`);
    const result = await response.json();

    setPlanet(result);
  }

  async function getFilmsTitle(planet) {
    const filmsArray = planet.films;
    let filmsTitleArray = [];

    async function _fetchFilm(filmUrl) {
      const response = await fetch(filmUrl);
      const result = await response.json();
  
      return result.title;
    }

    if (filmsArray.length > 0) {
      filmsTitleArray = await Promise.all(filmsArray.map(film => _fetchFilm(film)));
    }

    setFeaturedFilms(filmsTitleArray);
  }

  return (
    <div className={styles.container}>
      <Card>
        <Title>{planet.name}</Title>

        <Body>
          <span className={styles.greyText}>Population:</span> {planet.population}<br />
          <span className={styles.greyText}>Climate:</span> {planet.climate}<br />
          <span className={styles.greyText}>Terrain:</span> {planet.terrain}
        </Body>

        <Footer>
          {
            featuredFilms.length === 0 ?
              <span className={styles.greyText}>Not featured in any film</span>
            :
              <>
                <span className={styles.greyText}>Featured in</span> {featuredFilms.join(', ')}
              </>
          }
        </Footer>
      </Card>

      <div className={styles.buttonMargin}>
        <Button onClick={() => fetchRandomPlanet(planetsCount)}>Next</Button>
      </div>
    </div>
  );
}

export default RandomPlanetDisplay;
