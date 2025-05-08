import { useState } from 'react'
import reactLogo from './assets/react.svg'
const guessingGameLogo = '/guessinggame.png';
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(false) 

  const handlePress = () => {
    confetti()  //
    setShowWelcome(true)
  }

  return (
    <>
      <div>
        <a href="https://ttpr-guessing-game-olive.vercel.app" target="_blank">
          <img src={guessingGameLogo} className="logo" alt="Game logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My First App With React</h1>
      <div className="card">
        <button onClick={handlePress} style={{ marginTop: '10px' }}>
          Press here
        </button>

        {showWelcome && (
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
            🎉 Welcome to my first React page!
          </p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
