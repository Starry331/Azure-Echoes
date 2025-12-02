import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Save, GitBranch, Play, Settings } from 'lucide-react'
import useGameStore from '../store/gameStore'
import StoryTree from './StoryTree'
import SettingsPanel from './SettingsPanel'

export default function GameUI() {
  const { setGameState, nextDialog, isTextComplete, showChoices, getCurrentDialog } = useGameStore()
  const [showStoryTree, setShowStoryTree] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const autoPlayRef = useRef(null)

  // 自动播放逻辑 - 根据字数自动调节延迟
  useEffect(() => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current)
      autoPlayRef.current = null
    }

    if (isAutoPlay && isTextComplete && !showChoices) {
      const dialog = getCurrentDialog()
      const textLength = dialog?.text?.length || 0
      // 基础延迟500ms + 每个字50ms，最少800ms，最多3000ms
      const delay = Math.min(3000, Math.max(800, 500 + textLength * 50))
      
      autoPlayRef.current = setTimeout(() => {
        nextDialog()
      }, delay)
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
    }
  }, [isAutoPlay, isTextComplete, showChoices, nextDialog, getCurrentDialog])

  const buttons = [
    { 
      icon: Menu, 
      label: '菜单',
      action: () => setGameState('menu'),
      active: false,
    },
    { 
      icon: Save, 
      label: '存档',
      action: () => setGameState('menu'),
      active: false,
    },
    { 
      icon: GitBranch, 
      label: '剧情回顾',
      action: () => setShowStoryTree(true),
      active: false,
    },
    { 
      icon: Play, 
      label: isAutoPlay ? '停止自动' : '自动',
      action: () => setIsAutoPlay(!isAutoPlay),
      active: isAutoPlay,
    },
    { 
      icon: Settings, 
      label: '设置',
      action: () => setShowSettings(true),
      active: false,
    },
  ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-3 right-3 md:top-4 md:right-4 z-20"
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <div className="flex gap-1.5 md:gap-2">
          {buttons.map((btn) => (
            <motion.button
              key={btn.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={btn.action}
              className={`
                p-2.5 md:p-3 rounded-lg
                backdrop-blur-sm
                border transition-all duration-200
                group touch-manipulation
                ${btn.active 
                  ? 'bg-cyan-500/30 border-cyan-400/50 active:bg-cyan-500/50' 
                  : 'bg-black/40 active:bg-black/60 border-white/10 active:border-white/30'
                }
              `}
              title={btn.label}
            >
              <btn.icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                btn.active ? 'text-cyan-300' : 'text-white/70'
              }`} />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* 剧情树弹窗 */}
      <AnimatePresence>
        {showStoryTree && (
          <StoryTree onClose={() => setShowStoryTree(false)} />
        )}
      </AnimatePresence>

      {/* 设置面板 */}
      <AnimatePresence>
        {showSettings && (
          <SettingsPanel onClose={() => setShowSettings(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
