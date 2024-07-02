import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  const Main = () => {
    try {
        let UserInput = Number(prompt("Guess a Number and Play! : "));
        
        if (isNaN(UserInput)) {
            throw new Error("Invalid Input");
        }
        
        let GuessedNum = Math.floor(Math.random() * 11);

        if (GuessedNum === UserInput) {
            setMessage("Congratulations You Won! \nYou will be awarded.");
            return "Win"; 
        } else {
            setMessage(`Sorry, the correct number was ${GuessedNum}. Try Again.`);
            return "Lose";
        }
    } catch (error) {
        setMessage("Please enter an integer...");
        return "Error: Invalid Input";
    }
}



   


  return (
    <>
    <div className="Text">

      </div>

    <div className='placeHolder'>
    <input type="number"
        placeholder= "Enter a Number"/>
      </div>

    <div  className = "PlaySection">
    <p>Click Play to generate number</p>
    <button id="Playbutton" onClick={Main}>Play</button>
      </div>
      
    </>
  )
}


export default App
