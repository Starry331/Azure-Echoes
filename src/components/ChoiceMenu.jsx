import { motion } from 'framer-motion'
import useGameStore from '../store/gameStore'

export default function ChoiceMenu() {
  const { currentChoices, selectChoice } = useGameStore()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="flex flex-col gap-3 md:gap-4 p-4 md:p-8 w-full max-w-2xl"
      >
        {currentChoices.map((choice, index) => (
          <motion.button
            key={index}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.15 }}
            onClick={() => selectChoice(choice)}
            className="
              group relative px-8 md:px-12 py-4 md:py-5 
              bg-gradient-to-r from-white/10 to-white/5
              active:from-pink-500/30 active:to-purple-500/30
              border border-white/20 active:border-pink-400/50
              rounded-lg backdrop-blur-md
              transition-all duration-150 ease-out
              overflow-hidden touch-manipulation
            "
          >
            {/* 悬停光效 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl" />
            </div>

            {/* 选项编号 */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-mono">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* 选项文本和资金标注 */}
            <div className="relative flex flex-col items-center">
              <span className="text-white text-base md:text-lg tracking-wide font-medium">
                {choice.text}
              </span>
              {/* 资金扣除标注 */}
              {choice.money && (
                <span className="text-yellow-400/80 text-xs mt-1">
                  💰 -¥{choice.money}
                </span>
              )}
            </div>

            {/* 右侧箭头 */}
            <motion.span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-white/70"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
