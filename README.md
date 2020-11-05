# Shapes App

The shapes app draws objects to the screen based on the shape and length of the shape selected. [Shapes App](https://shapes-omega.vercel.app/).

## Features

- Dynamic lengths
- 20 shapes available for selection
- No shape is drawn if length is 0 or empty
- Shapes are animated (opacity and stroke)
- Dynamic stroke color
- Dynamic fill color
- Light/Dark mode
- Shapes are scaled to the draw area size
- It uses Localstorage to store app's state on refresh
- Unit tests
  - Checks if each shape is rendered on selection
  - Checks if size of svg is correct

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
