//Import useState-funktio
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Jätetään sovelluksen tila, eli laskimen arvo komponenttiin App ja välitetään tila propsien avulla komponentille Display
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text} </button>
)

//Tilallinen komponentti
const App = (props) => {

  //Komponentin määrittelevä funktio alkaa metodikutsulla
  const [counter, setCounter] = useState(0)
  const setToValue = (value) => setCounter(value)



  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={() => setToValue(counter + 1)}
        text='plus' />
      <Button handleClick={() => setToValue(counter - 1)}
        text='minus' />
      <Button handleClick={() => setToValue(0)}
        text='zero'
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// const increaseByOne = () =>
//   setCounter(counter + 1)
// const setToZero = () =>
//   setCounter(0)

// setTimeout(
//   () => setCounter(counter + 1),
//   1000
// )

//Sivun uudelleenrenderöinti
// const App = (props) => {
//   const { counter } = props
//   return (
//     <div>{counter}</div>
//   )
// }

//let counter = 1

//update counter value
// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, document.getElementById('root'))
// }

//increment counter value with every second 
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

// const Hello = ( { name, age } ) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old.</p>
//       <p>So you we're propably born in {bornYear()}.</p>
//     </div>
//   )
// }

// const App = () => {

//   console.log('Hello from JavaScript')
//   const nimi = 'Tomi';
//   const ika = 39;

//   return (
//     <div>
//       <h1>Greetings!</h1>
//       <Hello name="Jartsa" age={26 + 10} />
//       <Hello name={nimi} age={ika} />
//     </div>
//   )
// }

//ReactDOM.render(<App />, document.getElementById('root'))

//Tiedosto index.js määrittelee nyt React-komponentin nimeltään App ja viimeisen rivin komento
//renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka id:n arvona on 'root'.
/*Tiedosto public/index.html on oleellisesti ottaen tyhjä, voit kokeilla lisätä sinne HTML:ää. Reactilla ohjelmoitaessa
yleensä kuitenkin kaikki renderöitävä sisältö määritellään Reactin komponenttien avulla.*/

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();