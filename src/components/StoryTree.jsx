import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, CheckCircle, Circle, Heart, Skull, Star, Crown } from 'lucide-react'
import useGameStore from '../store/gameStore'

// 剧情节点定义 - 树状分支结构（19章 + 4结局）
// 结局类型: good(好结局), bad(坏结局), death(女主死亡), true(真结局-结婚)
// 节点会根据 unlockedScenes 动态显示，未解锁的分支显示为 "???"
const storyNodes = [
  // === 序章 & 第一章（无分支） ===
  { id: 'prologue', title: '序章', subtitle: '潮汐的赠礼', scene: 'start', x: 50, y: 2, children: ['chapter1'] },
  { id: 'chapter1', title: '第一章', subtitle: '陆地上的第一口空气', scene: 'chapter1', x: 50, y: 6, children: ['chapter2'] },
  
  // === 第二章：危险的温度（选择不影响主线，但影响数值） ===
  { id: 'chapter2', title: '第二章', subtitle: '危险的温度', scene: 'chapter2', x: 50, y: 10, children: ['chapter3'] },
  
  // === 第三章：干涸的焦虑（关键分支点） ===
  { id: 'chapter3', title: '第三章', subtitle: '干涸的焦虑', scene: 'chapter3', x: 50, y: 14, children: ['chapter3_true', 'chapter3_death', 'chapter3_bad'] },
  // 第三章分支
  { id: 'chapter3_true', title: '???', subtitle: '???', scene: 'chapter3_trueRoute', x: 35, y: 18, children: ['chapter4'] },
  { id: 'chapter3_death', title: '???', subtitle: '???', scene: 'chapter3_deathRoute', x: 50, y: 18, children: ['chapter4_death'], branch: 'death' },
  { id: 'chapter3_bad', title: '???', subtitle: '???', scene: 'chapter3_badRoute', x: 70, y: 18, children: ['chapter4_bad'], branch: 'bad' },
  
  // === 第四章：清晨的不速之客 ===
  { id: 'chapter4', title: '第四章', subtitle: '清晨的不速之客', scene: 'chapter4', x: 50, y: 22, children: ['chapter4_cousin', 'chapter4_gf', 'chapter4_hide'] },
  { id: 'chapter4_cousin', title: '???', subtitle: '???', scene: 'chapter4_cousin', x: 30, y: 26, children: ['chapter5'] },
  { id: 'chapter4_gf', title: '???', subtitle: '???', scene: 'chapter4_girlfriend', x: 50, y: 26, children: ['chapter5'] },
  { id: 'chapter4_hide', title: '???', subtitle: '???', scene: 'chapter4_hide', x: 70, y: 26, children: ['chapter5'] },
  
  // === 第五章：鳞片下的秘密 ===
  { id: 'chapter5', title: '第五章', subtitle: '鳞片下的秘密', scene: 'chapter5', x: 50, y: 30, children: ['chapter5_praise', 'chapter5_record', 'chapter5_hide'] },
  { id: 'chapter5_praise', title: '???', subtitle: '???', scene: 'chapter5_praise', x: 30, y: 34, children: ['chapter6'] },
  { id: 'chapter5_record', title: '???', subtitle: '???', scene: 'chapter5_record', x: 50, y: 34, children: ['chapter6'] },
  { id: 'chapter5_hide', title: '???', subtitle: '???', scene: 'chapter5_hide', x: 70, y: 34, children: ['chapter6'] },
  
  // === 第六章 ===
  { id: 'chapter6', title: '第六章', subtitle: '???', scene: 'chapter6', x: 40, y: 26, children: ['chapter7', 'chapter6b'] },
  { id: 'chapter6b', title: '???', subtitle: '???', scene: 'chapter6b', x: 70, y: 30, children: ['chapter7b'] },
  
  // === 第七章 ===
  { id: 'chapter7', title: '第七章', subtitle: '???', scene: 'chapter7', x: 35, y: 30, children: ['chapter8'] },
  { id: 'chapter7b', title: '???', subtitle: '???', scene: 'chapter7b', x: 70, y: 34, children: ['chapter8b'] },
  
  // === 第八章 ===
  { id: 'chapter8', title: '第八章', subtitle: '???', scene: 'chapter8', x: 35, y: 34, children: ['chapter9', 'chapter8b'] },
  { id: 'chapter8b', title: '???', subtitle: '???', scene: 'chapter8b', x: 65, y: 38, children: ['chapter9b'] },
  
  // === 第九章 ===
  { id: 'chapter9', title: '第九章', subtitle: '???', scene: 'chapter9', x: 30, y: 38, children: ['chapter10'] },
  { id: 'chapter9b', title: '???', subtitle: '???', scene: 'chapter9b', x: 65, y: 42, children: ['chapter10b'] },
  
  // === 第十章 ===
  { id: 'chapter10', title: '第十章', subtitle: '???', scene: 'chapter10', x: 30, y: 42, children: ['chapter11'] },
  { id: 'chapter10b', title: '???', subtitle: '???', scene: 'chapter10b', x: 65, y: 46, children: ['chapter11b'] },
  
  // === 第十一章 ===
  { id: 'chapter11', title: '第十一章', subtitle: '???', scene: 'chapter11', x: 30, y: 46, children: ['chapter12', 'chapter11b'] },
  { id: 'chapter11b', title: '???', subtitle: '???', scene: 'chapter11b', x: 60, y: 50, children: ['chapter12b'] },
  
  // === 第十二章 ===
  { id: 'chapter12', title: '第十二章', subtitle: '???', scene: 'chapter12', x: 25, y: 50, children: ['chapter13'] },
  { id: 'chapter12b', title: '???', subtitle: '???', scene: 'chapter12b', x: 60, y: 54, children: ['chapter13b'] },
  
  // === 第十三章 ===
  { id: 'chapter13', title: '第十三章', subtitle: '???', scene: 'chapter13', x: 25, y: 54, children: ['chapter14'] },
  { id: 'chapter13b', title: '???', subtitle: '???', scene: 'chapter13b', x: 60, y: 58, children: ['chapter14b'] },
  
  // === 第十四章 ===
  { id: 'chapter14', title: '第十四章', subtitle: '???', scene: 'chapter14', x: 25, y: 58, children: ['chapter15'] },
  { id: 'chapter14b', title: '???', subtitle: '???', scene: 'chapter14b', x: 60, y: 62, children: ['chapter15b'] },
  
  // === 第十五章 ===
  { id: 'chapter15', title: '第十五章', subtitle: '???', scene: 'chapter15', x: 25, y: 62, children: ['chapter16'] },
  { id: 'chapter15b', title: '???', subtitle: '???', scene: 'chapter15b', x: 60, y: 66, children: ['chapter16b'] },
  
  // === 第十六章 ===
  { id: 'chapter16', title: '第十六章', subtitle: '???', scene: 'chapter16', x: 25, y: 66, children: ['chapter17'] },
  { id: 'chapter16b', title: '???', subtitle: '???', scene: 'chapter16b', x: 60, y: 70, children: ['chapter17b'] },
  
  // === 第十七章 ===
  { id: 'chapter17', title: '第十七章', subtitle: '???', scene: 'chapter17', x: 25, y: 70, children: ['chapter18'] },
  { id: 'chapter17b', title: '???', subtitle: '???', scene: 'chapter17b', x: 60, y: 74, children: ['chapter18b'] },
  
  // === 第十八章 ===
  { id: 'chapter18', title: '第十八章', subtitle: '???', scene: 'chapter18', x: 25, y: 74, children: ['chapter19'] },
  { id: 'chapter18b', title: '???', subtitle: '???', scene: 'chapter18b', x: 60, y: 78, children: ['chapter19b'] },
  
  // === 第十九章（通向结局） ===
  { id: 'chapter19', title: '第十九章', subtitle: '???', scene: 'chapter19', x: 25, y: 78, children: ['ending_good', 'ending_true'] },
  { id: 'chapter19b', title: '???', subtitle: '???', scene: 'chapter19b', x: 60, y: 82, children: ['ending_good'] },
  
  // === 结局 ===
  { id: 'ending_good', title: '好结局', subtitle: '???', scene: 'ending_good', x: 15, y: 86, children: [], ending: 'good', icon: Heart },
  { id: 'ending_bad', title: '坏结局', subtitle: '???', scene: 'ending_bad', x: 90, y: 18, children: [], ending: 'bad', icon: Skull },
  { id: 'ending_death', title: '死亡结局', subtitle: '???', scene: 'ending_death', x: 5, y: 22, children: [], ending: 'death', icon: Star },
  { id: 'ending_true', title: '真结局', subtitle: '???', scene: 'ending_true', x: 40, y: 86, children: [], ending: 'true', icon: Crown },
]

export default function StoryTree({ onClose }) {
  const { unlockedScenes, jumpToScene } = useGameStore()

  const isUnlocked = (node) => {
    return unlockedScenes?.includes(node.scene) || node.scene === 'start'
  }

  const handleNodeClick = (node) => {
    if (isUnlocked(node)) {
      jumpToScene(node.scene)
      onClose()
    }
  }

  // 获取结局颜色
  const getEndingColor = (ending) => {
    switch (ending) {
      case 'good': return { bg: 'from-pink-900/50 to-red-900/50', border: 'border-pink-500/50', text: 'text-pink-300' }
      case 'bad': return { bg: 'from-gray-900/50 to-slate-900/50', border: 'border-gray-500/50', text: 'text-gray-300' }
      case 'death': return { bg: 'from-purple-900/50 to-indigo-900/50', border: 'border-purple-500/50', text: 'text-purple-300' }
      case 'true': return { bg: 'from-amber-900/50 to-yellow-900/50', border: 'border-amber-500/50', text: 'text-amber-300' }
      default: return { bg: 'from-cyan-900/50 to-blue-900/50', border: 'border-cyan-500/50', text: 'text-cyan-300' }
    }
  }

  // 获取已解锁的主线章节（用于列表视图）
  const unlockedMainNodes = storyNodes.filter(node => isUnlocked(node)).sort((a, b) => a.y - b.y)

  // 绘制连接线 - 只显示已解锁节点之间的连线
  const renderConnections = () => {
    return storyNodes.map((node) => {
      // 只有当前节点解锁时才绘制连线
      if (!isUnlocked(node)) return null

      return node.children.map((childId) => {
        const child = storyNodes.find((n) => n.id === childId)
        if (!child) return null

        // 只有子节点也解锁时才显示连线
        if (!isUnlocked(child)) return null

        return (
          <line
            key={`${node.id}-${childId}`}
            x1={`${node.x}%`}
            y1={`${node.y + 5}%`}
            x2={`${child.x}%`}
            y2={`${child.y - 2}%`}
            stroke="#7dd3fc"
            strokeWidth="2"
          />
        )
      })
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-3xl mx-4 h-[85vh] bg-gradient-to-b from-gray-900/95 to-black/95 rounded-2xl border border-white/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">剧情回顾</h2>
            <p className="text-white/50 text-xs md:text-sm mt-1">点击章节可重新体验</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>

        {/* 列表视图（移动端友好） */}
        <div className="flex-1 overflow-auto p-3 md:p-4">
          <div className="space-y-2">
            {unlockedMainNodes.map((node, index) => {
              const colors = node.ending ? getEndingColor(node.ending) : getEndingColor()
              const IconComponent = node.icon || CheckCircle

              return (
                <motion.button
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNodeClick(node)}
                  className={`
                    w-full flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 transition-all duration-200
                    bg-gradient-to-r ${colors.bg} ${colors.border}
                    active:scale-[0.98] touch-manipulation
                  `}
                >
                  {/* 图标 */}
                  <div className={`p-2 rounded-lg bg-black/30`}>
                    <IconComponent className={`w-5 h-5 ${colors.text}`} />
                  </div>

                  {/* 内容 */}
                  <div className="flex-1 text-left">
                    <div className={`text-sm md:text-base font-bold ${colors.text}`}>
                      {node.title}
                    </div>
                    <div className="text-xs text-white/60">
                      {node.subtitle}
                    </div>
                  </div>

                  {/* 箭头 */}
                  <div className="text-white/30">→</div>
                </motion.button>
              )
            })}
          </div>

          {/* 空状态 */}
          {unlockedMainNodes.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-white/40">
              <Lock className="w-12 h-12 mb-4" />
              <p>尚未解锁任何章节</p>
            </div>
          )}
        </div>

        {/* 图例 */}
        <div className="p-3 md:p-4 border-t border-white/10 flex flex-wrap justify-center gap-3 md:gap-4 text-xs shrink-0">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="text-white/60">好结局</span>
          </div>
          <div className="flex items-center gap-1">
            <Skull className="w-4 h-4 text-gray-400" />
            <span className="text-white/60">坏结局</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-white/60">死亡结局</span>
          </div>
          <div className="flex items-center gap-1">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-white/60">真结局</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
