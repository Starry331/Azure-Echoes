import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGameStore from '../store/gameStore'
import { scenario } from '../data/scenario'
import DialogBox from './DialogBox'
import ChoiceMenu from './ChoiceMenu'
import CharacterSprite from './CharacterSprite'
import GameUI from './GameUI'

export default function GameScreen() {
  const {
    getCurrentScene,
    getCurrentDialog,
    nextDialog,
    isTextComplete,
    showChoices,
  } = useGameStore()

  const scene = getCurrentScene()
  const dialog = getCurrentDialog()

  // 处理点击事件
  const handleClick = useCallback(() => {
    if (showChoices) return // 有选项时不处理点击
    
    if (isTextComplete) {
      nextDialog()
    } else {
      // 跳过打字效果
      useGameStore.setState({ isTextComplete: true })
    }
  }, [isTextComplete, showChoices, nextDialog])

  // 键盘事件
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleClick()
      }
      if (e.key === 'Escape') {
        useGameStore.getState().setGameState('menu')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClick])

  if (!scene) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* 背景图 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.background}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: scene.background 
              ? `url(${scene.background})` 
              : 'linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 100%)',
          }}
        >
          {/* 背景叠加层 */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* 角色立绘 */}
      <CharacterSprite dialog={dialog} />

      {/* 游戏UI（菜单按钮等） */}
      <GameUI />

      {/* 对话框 */}
      <DialogBox dialog={dialog} />

      {/* 选项菜单 */}
      <AnimatePresence>
        {showChoices && <ChoiceMenu />}
      </AnimatePresence>

      {/* 特效层 */}
      <AnimatePresence>
        {dialog?.effect === 'flash' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
