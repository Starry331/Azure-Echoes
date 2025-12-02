import { motion } from 'framer-motion'
import useGameStore from '../store/gameStore'
import { Heart } from 'lucide-react'

const AffectionDisplay = () => {
  const affection = useGameStore((state) => state.affection)
  const money = useGameStore((state) => state.money)
  
  // 根据好感度决定心的颜色
  const getHeartColor = () => {
    if (affection >= 80) return 'text-pink-400'
    if (affection >= 60) return 'text-rose-400'
    if (affection >= 40) return 'text-red-400'
    if (affection >= 20) return 'text-orange-400'
    return 'text-gray-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 left-4 z-40 flex flex-col gap-1
                 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2
                 border border-white/10"
    >
      {/* 好感度 */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Heart className="w-4 h-4 text-gray-600" strokeWidth={2} />
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(${100 - affection}% 0 0 0)` }}
          >
            <Heart className={`w-4 h-4 ${getHeartColor()}`} fill="currentColor" strokeWidth={2} />
          </div>
        </div>
        <span className={`text-sm font-medium ${getHeartColor()}`}>
          {affection}
        </span>
      </div>
      {/* 资金 */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-sm">💰</span>
        <span className="text-sm font-medium text-yellow-300">
          ¥{money.toLocaleString()}
        </span>
      </div>
    </motion.div>
  )
}

export default AffectionDisplay
