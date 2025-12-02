import { motion } from 'framer-motion'
import { X, Volume2, Type, Home, Save } from 'lucide-react'
import useGameStore from '../store/gameStore'

export default function SettingsPanel({ onClose }) {
  const { settings, updateSettings, returnToTitle, saveGame, gameState } = useGameStore()

  const handleVolumeChange = (e) => {
    updateSettings({ bgmVolume: parseFloat(e.target.value) })
  }

  const handleTextSpeedChange = (e) => {
    updateSettings({ textSpeed: parseInt(e.target.value) })
  }

  const handleSaveAndReturn = () => {
    // 自动保存到第一个槽位
    saveGame(0)
    onClose()
    returnToTitle()
  }

  const handleReturnToTitle = () => {
    onClose()
    returnToTitle()
  }
  
  // 检查是否在游戏中（可以保存）
  const canSave = gameState === 'playing'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-md mx-4 bg-gradient-to-b from-gray-900/95 to-black/95 rounded-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">游戏设置</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>

        {/* 设置项 */}
        <div className="p-6 space-y-6">
          {/* 游戏音量 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white/80">
              <Volume2 className="w-5 h-5" />
              <span>游戏音量</span>
              <span className="ml-auto text-cyan-400">
                {Math.round(settings.bgmVolume * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.bgmVolume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-cyan-400
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-cyan-400/30
              "
            />
          </div>

          {/* 字幕速度 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white/80">
              <Type className="w-5 h-5" />
              <span>字幕显示速度</span>
              <span className="ml-auto text-cyan-400">
                {settings.textSpeed <= 20 ? '快' : settings.textSpeed <= 50 ? '中' : '慢'}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="10"
              value={settings.textSpeed}
              onChange={handleTextSpeedChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-cyan-400
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-cyan-400/30
              "
            />
            <div className="flex justify-between text-xs text-white/40">
              <span>快</span>
              <span>慢</span>
            </div>
          </div>
        </div>

        {/* 底部操作 */}
        <div className="p-6 border-t border-white/10 flex flex-col gap-3">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              关闭
            </button>
            {canSave && (
              <button
                onClick={handleSaveAndReturn}
                className="flex-1 py-3 px-4 bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                保存并返回
              </button>
            )}
          </div>
          <button
            onClick={handleReturnToTitle}
            className="w-full py-3 px-6 bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            不保存，返回主菜单
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
