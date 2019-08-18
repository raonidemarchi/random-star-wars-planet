# Random Star Wars Planet

> A simple application (using [`create-react-app`](https://github.com/facebook/create-react-app)) to get random planets from Star Wars from [SWAPI](https://swapi.co).

## Development

*Make sure to have [Git](http://git-scm.com/) and [Node.js](http://nodejs.org/) installed.*

1. Fork the repo and create a new branch — or just create a new branch if you have permissions.

2. Once you have your local copy, install its dependencies:

    ```sh
    npm install
    ```
    
3. Run the `start` script

    ```sh
    npm start
    ```
    
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
    
    *The page will reload if you make edits and you will also see any lint errors in the console.*

## Production

1. To build the app for production, run:
    
    ```sh
    npm run build
    ```
    *It correctly bundles React in production mode and optimizes the build for the best performance.*

## Tests

Use the following command to run the tests:

```sh
npm test
```
*It launches the test runner in the interactive watch mode using [Jest](https://jestjs.io).*

## Deploy on Github Pages

1. Change the property `homepage` on `package.json` file to your respository:

    ```sh
    "homepage": "https://yourusername.github.io/repository-name"
    ```

2. Run the `build` script to build the app for production:

    ```sh
    npm run build
    ```
    
3. Deploy the app by running:

    ```sh
    npm run deploy
    ```

## Live demo

Access the live demo here: https://raonidemarchi.github.io/random-star-wars-planet/

## Used APIs

- Planets: https://swapi.co/api/planets/
- Films: https://swapi.co/api/films/
