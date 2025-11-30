import { motion } from 'framer-motion'
import { Play, BookOpen, Settings, FolderOpen } from 'lucide-react'
import useGameStore from '../store/gameStore'
import { scenario } from '../data/scenario'

export default function TitleScreen({ isEnding = false }) {
  const { startGame, setGameState, saveSlots } = useGameStore()

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
      label: '回顾历史', 
      action: () => console.log('History'),
      disabled: true,
    },
    { 
      icon: Settings, 
      label: '游戏设置', 
      action: () => console.log('Settings'),
      disabled: true,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* 标题 */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center mb-16"
      >
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4 tracking-wider">
          {isEnding ? 'THE END' : scenario.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light tracking-widest">
          {isEnding ? '感谢游玩' : scenario.subtitle}
        </p>
      </motion.div>

      {/* 菜单 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 flex flex-col gap-4"
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            onClick={item.action}
            disabled={item.disabled}
            className={`
              group flex items-center gap-4 px-8 py-4 
              bg-white/5 hover:bg-white/15 
              border border-white/10 hover:border-white/30
              rounded-lg backdrop-blur-sm
              transition-all duration-300 ease-out
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <item.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            <span className="text-lg text-white/80 group-hover:text-white font-medium tracking-wide transition-colors">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* 版权信息 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 text-white/30 text-sm"
      >
        Made with @Starry | 蔚蓝回响 Azure Echoes
      </motion.div>
    </motion.div>
  )
}
