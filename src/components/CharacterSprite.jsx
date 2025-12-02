import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { preloadImage, isAssetLoaded } from '../utils/assetLoader'

export default function CharacterSprite({ dialog, sceneId }) {
  // 保存当前显示的立绘和位置
  const [currentSprite, setCurrentSprite] = useState(null)
  const [currentPosition, setCurrentPosition] = useState('center')
  const [spriteLoaded, setSpriteLoaded] = useState(false)

  // 场景切换时重置立绘
  useEffect(() => {
    setCurrentSprite(null)
    setCurrentPosition('center')
    setSpriteLoaded(false)
  }, [sceneId])

  // 同一场景内，只有出现新立绘时才切换
  useEffect(() => {
    if (dialog?.sprite) {
      // 检查是否已缓存
      if (isAssetLoaded(dialog.sprite)) {
        setCurrentSprite(dialog.sprite)
        setCurrentPosition(dialog.position || 'center')
        setSpriteLoaded(true)
      } else {
        setSpriteLoaded(false)
        preloadImage(dialog.sprite).then(() => {
          setCurrentSprite(dialog.sprite)
          setCurrentPosition(dialog.position || 'center')
          setSpriteLoaded(true)
        })
      }
    }
  }, [dialog?.sprite, dialog?.position])

  if (!currentSprite) return null

  const getPosition = () => {
    switch (currentPosition) {
      case 'left':
        return 'left-[10%]'
      case 'right':
        return 'right-[10%]'
      case 'center':
      default:
        return 'left-1/2 -translate-x-1/2'
    }
  }

  // 对话框高度：移动端 140px + padding 16px = 156px，桌面端 160px + padding 32px = 192px
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSprite}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: spriteLoaded ? 1 : 0, y: spriteLoaded ? 0 : 30 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`absolute ${getPosition()} pointer-events-none`}
        style={{ bottom: 'calc(156px)' }}
      >
        <img
          src={currentSprite}
          alt="Character"
          className="max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-240px)] w-auto object-contain drop-shadow-2xl"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
