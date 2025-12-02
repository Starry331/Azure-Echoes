import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { preloadImage, isAssetLoaded } from '../utils/assetLoader'

// 优化的图片组件 - 懒加载 + 渐入效果
export default function OptimizedImage({ 
  src, 
  alt = '', 
  className = '', 
  style = {},
  onLoad,
  placeholder = null,
  ...props 
}) {
  const [loaded, setLoaded] = useState(isAssetLoaded(src))
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!src) return
    
    // 已缓存，直接显示
    if (isAssetLoaded(src)) {
      setLoaded(true)
      return
    }

    setLoaded(false)
    setError(false)

    preloadImage(src)
      .then(() => {
        setLoaded(true)
        onLoad?.()
      })
      .catch(() => {
        setError(true)
      })
  }, [src, onLoad])

  if (error) {
    return placeholder
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    />
  )
}
