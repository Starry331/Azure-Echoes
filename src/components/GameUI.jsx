import { motion } from 'framer-motion'
import { Menu, Save, History, Settings, SkipForward } from 'lucide-react'
import useGameStore from '../store/gameStore'

export default function GameUI() {
  const { setGameState, nextDialog, isTextComplete } = useGameStore()

  const buttons = [
    { 
      icon: Menu, 
      label: '菜单',
      action: () => setGameState('menu'),
    },
    { 
      icon: Save, 
      label: '存档',
      action: () => setGameState('menu'),
    },
    { 
      icon: History, 
      label: '历史',
      action: () => console.log('History'),
    },
    { 
      icon: SkipForward, 
      label: '跳过',
      action: () => {
        if (!isTextComplete) {
          useGameStore.setState({ isTextComplete: true })
        } else {
          nextDialog()
        }
      },
    },
    { 
      icon: Settings, 
      label: '设置',
      action: () => console.log('Settings'),
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-4 right-4 z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex gap-2">
        {buttons.map((btn) => (
          <motion.button
            key={btn.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={btn.action}
            className="
              p-3 rounded-lg
              bg-black/30 hover:bg-black/50
              backdrop-blur-sm
              border border-white/10 hover:border-white/30
              transition-all duration-200
              group
            "
            title={btn.label}
          >
            <btn.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
