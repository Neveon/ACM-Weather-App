# ACM Workshop - React intro creating a Weather App

[API](https://fcc-weather-api.glitch.me/) to get weather information

1) Need `Node` and `npm` versions >= 8.10 and 5.6, respectively

2) `npx create-react-app app-name`

  - Create React APP (CRA) in the `app-name` directory
  - `npx` comes bundled with `npm` version 5.2+ and is a node package runner
  - If for some reason you don't have npx, install with `npm i -g npx` command

3) `npm start` will start the CRA and instructs us to edit `src/App.js`

  - If we want to see the new edit, we would have to save and reload
  - *Edit the line to 'Hello World'*
  - `src/index.js` file is what renders this App function returning HTML into a <div> with `id='root'`

4) Create `src/components` and `src/components/Weather.js`

5) Usually `src/App.js` is where we put together all our components
 
  - `import Weather from './components`, notice components start with a capital letter
  - Remove all HTML except for div because all HTML returned by components need a wrapping div
  - Place `<Weather/>` into `App.js` so it could render and we can see it in the browser

6) We will create a simple 'form' for the user to input their address
  - `<input type=text onChange={handleChange}/>`
  - `<button onClick={getWeather}/>`
  - We will be using `useState` to handle the component state
  - `const [obj, func] = useState()`

7) Create handleChange() and getWeather()

  - We will get our weather from `wttr.in/${location}?format=j1`
  - This will return JSON data of the weather
  - Temperature information can be found at:
  - `weather[0]` where there is:
  - `.maxTempC`, `.maxTempF`, `.minTempC`, `.minTempF` 
  - There is a lot more info in the JSON data but this is what we will use

8) Change HTML in `return()` for customization

9) Edit css to make it look nice, maybe add an image?
