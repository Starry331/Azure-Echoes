import { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGameStore from '../store/gameStore'
import { scenario } from '../data/scenario'
import DialogBox from './DialogBox'
import ChoiceMenu from './ChoiceMenu'
import CharacterSprite from './CharacterSprite'
import GameUI from './GameUI'
import AffectionDisplay from './AffectionDisplay'
import { preloadSceneAssets, preloadImage, isAssetLoaded } from '../utils/assetLoader'

export default function GameScreen() {
  const {
    getCurrentScene,
    getCurrentDialog,
    nextDialog,
    isTextComplete,
    showChoices,
    currentSceneId,
  } = useGameStore()
  
  const [bgLoaded, setBgLoaded] = useState(false)

  const scene = getCurrentScene()
  const dialog = getCurrentDialog()

  // 预加载当前场景和下一场景资源
  useEffect(() => {
    if (!scene) return
    
    // 检查背景是否已加载
    if (scene.background && isAssetLoaded(scene.background)) {
      setBgLoaded(true)
    } else {
      setBgLoaded(false)
    }
    
    // 预加载资源
    preloadSceneAssets(scene, scene.nextScene, scenario.scenes).then(() => {
      if (scene.background) {
        preloadImage(scene.background).then(() => setBgLoaded(true))
      }
    })
  }, [scene, currentSceneId])

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
          initial={{ opacity: 0 }}
          animate={{ opacity: bgLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
      
      {/* 加载指示器 */}
      <AnimatePresence>
        {!bgLoaded && scene.background && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
              <span className="text-cyan-400/70 text-sm">Loading...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 角色立绘 */}
      <CharacterSprite dialog={dialog} sceneId={currentSceneId} />

      {/* 好感度显示 */}
      <AffectionDisplay />

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
