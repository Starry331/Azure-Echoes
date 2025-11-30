import { AnimatePresence } from 'framer-motion'
import useGameStore from './store/gameStore'
import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import MenuOverlay from './components/MenuOverlay'

function App() {
  const { gameState } = useGameStore()

  return (
    <div className="w-full h-full bg-black">
      <AnimatePresence mode="wait">
        {gameState === 'title' && <TitleScreen key="title" />}
        {(gameState === 'playing' || gameState === 'menu') && (
          <GameScreen key="game" />
        )}
        {gameState === 'ending' && <TitleScreen key="ending" isEnding />}
      </AnimatePresence>
      
      {gameState === 'menu' && <MenuOverlay />}
    </div>
  )
}

export default App
