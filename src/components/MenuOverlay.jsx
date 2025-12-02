import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Save, FolderOpen, Home, Settings, GitBranch } from 'lucide-react'
import useGameStore from '../store/gameStore'
import StoryTree from './StoryTree'

export default function MenuOverlay() {
  const { setGameState, returnToTitle, saveGame, loadGame, saveSlots } = useGameStore()
  const [showStoryTree, setShowStoryTree] = useState(false)

  const closeMenu = () => setGameState('playing')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={closeMenu}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-2xl mx-4 bg-gradient-to-b from-gray-900/95 to-black/95 rounded-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">游戏菜单</h2>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>

        {/* 存档槽位 */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <Save className="w-5 h-5" />
            存档 / 读档
          </h3>
          <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
            {saveSlots.map((slot, index) => (
              <div
                key={index}
                className="
                  group relative p-4 rounded-lg
                  bg-white/5 hover:bg-white/10
                  border border-white/10 hover:border-white/20
                  transition-all duration-200
                "
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/60 text-sm">存档 {index + 1}</span>
                  {slot && (
                    <span className="text-white/40 text-xs">
                      {new Date(slot.savedAt).toLocaleDateString('zh-CN')}
                    </span>
                  )}
                </div>
                
                {slot ? (
                  <p className="text-white/80 text-sm truncate mb-3">
                    场景: {slot.currentSceneId}
                  </p>
                ) : (
                  <p className="text-white/40 text-sm mb-3">空</p>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => saveGame(index)}
                    className="flex-1 py-1.5 px-3 text-xs bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded transition-colors"
                  >
                    保存
                  </button>
                  {slot && (
                    <button
                      onClick={() => loadGame(index)}
                      className="flex-1 py-1.5 px-3 text-xs bg-green-500/20 hover:bg-green-500/40 text-green-300 rounded transition-colors"
                    >
                      读取
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部操作 */}
        <div className="p-6 border-t border-white/10 flex flex-wrap gap-4">
          <button
            onClick={() => setShowStoryTree(true)}
            className="flex-1 py-3 px-4 bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <GitBranch className="w-5 h-5" />
            剧情回顾
          </button>
          <button
            onClick={closeMenu}
            className="flex-1 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            继续游戏
          </button>
          <button
            onClick={returnToTitle}
            className="py-3 px-6 bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            返回标题
          </button>
        </div>
      </motion.div>

      {/* 剧情树弹窗 */}
      <AnimatePresence>
        {showStoryTree && (
          <StoryTree onClose={() => setShowStoryTree(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
