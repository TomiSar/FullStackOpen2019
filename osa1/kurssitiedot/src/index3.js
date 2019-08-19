import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Nyt komponentin toiminta riippuu siitä, onko näppäimiä jo painettu. 
//Jos ei, eli taulukko allClicks on tyhjä, renderöi komponentti "käyttöohjeen" sisältävän divin
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons.
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  //left
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  //right
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
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