import { motion, AnimatePresence } from 'framer-motion'

export default function CharacterSprite({ dialog }) {
  if (!dialog?.sprite) return null

  const getPosition = () => {
    switch (dialog.position) {
      case 'left':
        return 'left-[10%]'
      case 'right':
        return 'right-[10%]'
      case 'center':
      default:
        return 'left-1/2 -translate-x-1/2'
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={dialog.sprite}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`absolute bottom-0 ${getPosition()} pointer-events-none`}
      >
        <img
          src={dialog.sprite}
          alt="Character"
          className="max-h-[85vh] w-auto object-contain drop-shadow-2xl"
          onError={(e) => {
            // 图片加载失败时显示占位符
            e.target.style.display = 'none'
          }}
        />
        
        {/* 立绘占位符（当图片未加载时显示） */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-64 h-96 bg-gradient-to-t from-purple-500/20 to-transparent rounded-t-full opacity-0" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
