import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, BookOpen, Settings, FolderOpen } from 'lucide-react'
import useGameStore from '../store/gameStore'
import { scenario } from '../data/scenario'
import StoryTree from './StoryTree'
import SettingsPanel from './SettingsPanel'
import { preloadSceneAssets, preloadImage } from '../utils/assetLoader'

const MENU_BG = './assets/menu/main_menu.png'

export default function TitleScreen({ isEnding = false }) {
  const { startGame, setGameState, saveSlots, settings } = useGameStore()
  const audioRef = useRef(null)
  const [showStoryTree, setShowStoryTree] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [audioStarted, setAudioStarted] = useState(false)
  const [bgLoaded, setBgLoaded] = useState(false)
  
  // 预加载主菜单背景和第一个场景资源
  useEffect(() => {
    // 优先加载主菜单背景
    preloadImage(MENU_BG).then(() => setBgLoaded(true))
    
    // 后台预加载第一个场景
    const firstScene = scenario.scenes['start']
    if (firstScene) {
      preloadSceneAssets(firstScene, firstScene.nextScene, scenario.scenes)
    }
  }, [])
  
  // 更新音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = settings.bgmVolume
    }
  }, [settings.bgmVolume])

  // 用户交互后播放BGM
  const tryPlayAudio = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current.play().then(() => {
        setAudioStarted(true)
      }).catch(() => {})
    }
  }

  // 清理
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const hasSaveData = saveSlots.some(slot => slot !== null)

  const menuItems = [
    { 
      icon: Play, 
      label: isEnding ? '重新开始' : '开始游戏', 
      action: startGame 
    },
    ...(hasSaveData ? [{
      icon: FolderOpen,
      label: '继续游戏',
      action: () => setGameState('menu'),
    }] : []),
    { 
      icon: BookOpen, 
      label: '剧情回顾', 
      action: () => setShowStoryTree(true),
      disabled: false,
    },
    { 
      icon: Settings, 
      label: '游戏设置', 
      action: () => setShowSettings(true),
      disabled: false,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col items-center justify-end md:justify-center relative overflow-hidden"
      onClick={tryPlayAudio}
    >
      {/* 背景图片 - 带呼吸动画 */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: bgLoaded ? 1 : 0,
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center md:bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${MENU_BG})`,
            backgroundPosition: 'center 20%',
          }} 
        />
      </motion.div>
      
      {/* 加载中背景 */}
      {!bgLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
        </div>
      )}
      
      {/* 渐变遮罩 - 增强文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* 浮动爱心 */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/20"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '-20px',
              fontSize: `${14 + (i % 3) * 4}px`,
            }}
            animate={{
              y: [0, -window.innerHeight - 50],
              opacity: [0, 0.4, 0.3, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut",
            }}
          >
            ♥
          </motion.div>
        ))}
      </motion.div>

      {/* 标题 - 竖屏时靠上 */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: bgLoaded ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center mb-6 md:mb-16 md:absolute md:top-[12%]"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-2 md:mb-4 tracking-widest"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #e0f2fe 40%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: 'none',
            filter: 'drop-shadow(0 2px 8px rgba(125, 211, 252, 0.4))',
          }}
          animate={{ 
            filter: [
              'drop-shadow(0 2px 8px rgba(125, 211, 252, 0.3))',
              'drop-shadow(0 2px 16px rgba(125, 211, 252, 0.5))',
              'drop-shadow(0 2px 8px rgba(125, 211, 252, 0.3))',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {isEnding ? 'THE END' : scenario.title}
        </motion.h1>
        <p 
          className="text-base md:text-xl font-light tracking-[0.3em]"
          style={{
            color: 'rgba(186, 230, 253, 0.8)',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {isEnding ? '感谢游玩' : scenario.subtitle}
        </p>
      </motion.div>

      {/* 菜单 - 竖屏时底部 */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: bgLoaded ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 flex flex-col gap-2 md:gap-3 pb-20 md:pb-0 md:absolute md:bottom-[15%] w-full px-6 md:px-0 md:w-auto"
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.08 }}
            onClick={item.action}
            disabled={item.disabled}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`
              group flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 
              bg-black/30 hover:bg-black/50 
              border border-white/20 hover:border-cyan-400/50
              rounded-xl backdrop-blur-md
              transition-all duration-300 ease-out
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-300/80 group-hover:text-cyan-300 transition-colors" />
            <span className="text-base md:text-lg text-white/90 group-hover:text-white font-medium tracking-wide transition-colors">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* 版权信息 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 md:bottom-6 text-white/40 text-xs md:text-sm z-10"
      >
        Made with @Starry | 蔚蓝回响 Azure Echoes
      </motion.div>
      
      {/* 主菜单BGM */}
      <audio ref={audioRef} src="./assets/bgm/menu.mp3" loop preload="auto" />
      
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
    </motion.div>
  )
}
