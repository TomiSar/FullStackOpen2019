import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = props => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

// const App = (props) => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

  //left
  // const handleLeftClick = () =>
  //   setClicks({ ...clicks, left: clicks.left + 1 })


  //right
  // const handleRightClick = () =>
  //   setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       <div>
//         {clicks.left}
//         <button onClick={handleLeftClick}>left</button>
//         <button onClick={handleRightClick}>right</button>
//         {clicks.right}
//       </div>
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