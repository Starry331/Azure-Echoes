import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGameStore from '../store/gameStore'
import { scenario } from '../data/scenario'

export default function DialogBox({ dialog }) {
  const { settings, isTextComplete, setDisplayedText, setTextComplete, displayedText } = useGameStore()
  const [currentText, setCurrentText] = useState('')
  const timeoutRef = useRef(null)

  const character = dialog?.character 
    ? scenario.characters[dialog.character] 
    : null

  // 打字机效果
  useEffect(() => {
    if (!dialog?.text) return

    // 清除之前的定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (isTextComplete) {
      setCurrentText(dialog.text)
      setDisplayedText(dialog.text)
      return
    }

    setCurrentText('')
    setDisplayedText('')

    let index = 0
    const text = dialog.text

    const typeNextChar = () => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1))
        setDisplayedText(text.slice(0, index + 1))
        index++
        timeoutRef.current = setTimeout(typeNextChar, settings.textSpeed)
      } else {
        setTextComplete(true)
      }
    }

    timeoutRef.current = setTimeout(typeNextChar, settings.textSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [dialog?.text, isTextComplete, settings.textSpeed])

  // 当文本完成时显示完整文本
  useEffect(() => {
    if (isTextComplete && dialog?.text) {
      setCurrentText(dialog.text)
    }
  }, [isTextComplete, dialog?.text])

  if (!dialog || dialog.choices) return null

  // 固定对话框高度
  const DIALOG_HEIGHT = 'h-[140px] md:h-[160px]'

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute bottom-0 left-0 right-0 p-2 md:p-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* 对话框背景 - 固定高度 */}
        <div className={`relative ${DIALOG_HEIGHT} bg-gradient-to-b from-black/70 to-black/85 md:from-black/80 md:to-black/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden`}>
          {/* 装饰边框 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          
          <div className="p-3 md:p-4 h-full flex flex-col">
            {/* 角色名 */}
            <AnimatePresence mode="wait">
              {character && (
                <motion.div
                  key={character.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="mb-2 shrink-0"
                >
                  <span 
                    className="text-sm md:text-base font-bold tracking-wider px-3 py-0.5 rounded-full"
                    style={{ 
                      color: character.color,
                      backgroundColor: `${character.color}20`,
                    }}
                  >
                    {character.name}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 对话文本 */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-white text-sm md:text-lg leading-relaxed tracking-wide font-serif">
                {currentText}
                {!isTextComplete && (
                  <span className="inline-block w-0.5 h-4 bg-white/70 ml-1 animate-pulse" />
                )}
              </p>
            </div>

            {/* 继续提示 */}
            <AnimatePresence>
              {isTextComplete && !dialog.choices && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-end mt-2"
                >
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-white/50"
                  >
                    ▼
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
