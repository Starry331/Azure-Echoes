import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, Lock, Circle } from 'lucide-react'
import useGameStore from '../store/gameStore'

// 剧情节点定义 - 简化的树状分支结构
const storyNodes = [
  // === 主线章节 ===
  { id: 'start', title: '序章', subtitle: '潮汐的赠礼', scene: 'start', row: 0, col: 1, children: ['chapter1'] },
  { id: 'chapter1', title: '第一章', subtitle: '陆地上的第一口空气', scene: 'chapter1', row: 1, col: 1, children: ['chapter2'] },
  { id: 'chapter2', title: '第二章', subtitle: '危险的温度', scene: 'chapter2', row: 2, col: 1, children: ['chapter3'] },
  { id: 'chapter3', title: '第三章', subtitle: '干涸的焦虑', scene: 'chapter3', row: 3, col: 1, children: ['chapter4'] },
  
  // 第四章
  { id: 'chapter4', title: '第四章', subtitle: '清晨的不速之客', scene: 'chapter4', row: 4, col: 1, children: ['chapter5'] },
  
  // 第五章
  { id: 'chapter5', title: '第五章', subtitle: '鳞片下的秘密', scene: 'chapter5', row: 5, col: 1, children: ['chapter6'] },
  
  // 第六章
  { id: 'chapter6', title: '第六章', subtitle: '外面的世界', scene: 'chapter6', row: 6, col: 1, children: ['chapter7'] },
  
  // 第七章（待续）
  { id: 'chapter7', title: '第七章', subtitle: '待续...', scene: 'chapter7', row: 7, col: 1, children: [] },
]

// 节点尺寸常量
const NODE_WIDTH = 100
const NODE_HEIGHT = 50
const ROW_GAP = 70
const COL_WIDTH = 120

export default function StoryTree({ onClose }) {
  const { unlockedScenes, jumpToScene } = useGameStore()
  const containerRef = useRef(null)

  const isUnlocked = (node) => {
    return unlockedScenes?.includes(node.scene) || node.scene === 'start'
  }

  const handleNodeClick = (node) => {
    if (isUnlocked(node)) {
      jumpToScene(node.scene)
      onClose()
    }
  }

  // 计算节点位置
  const getNodePosition = (node) => {
    const x = 50 + (node.col - 1) * COL_WIDTH
    const y = 20 + node.row * ROW_GAP
    return { x, y }
  }

  // 计算树的总高度
  const maxRow = Math.max(...storyNodes.map(n => n.row))
  const treeHeight = 40 + (maxRow + 1) * ROW_GAP

  // 绘制连接线
  const renderConnections = () => {
    return storyNodes.map((node) => {
      const parentPos = getNodePosition(node)
      
      return node.children.map((childId) => {
        const child = storyNodes.find((n) => n.id === childId)
        if (!child) return null
        
        const childPos = getNodePosition(child)
        const parentUnlocked = isUnlocked(node)
        const childUnlocked = isUnlocked(child)
        const bothUnlocked = parentUnlocked && childUnlocked
        
        // 计算贝塞尔曲线控制点
        const startX = parentPos.x + NODE_WIDTH / 2
        const startY = parentPos.y + NODE_HEIGHT
        const endX = childPos.x + NODE_WIDTH / 2
        const endY = childPos.y
        const midY = (startY + endY) / 2
        
        return (
          <path
            key={`${node.id}-${childId}`}
            d={`M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`}
            stroke={bothUnlocked ? '#22d3ee' : '#374151'}
            strokeWidth="2"
            fill="none"
            opacity={bothUnlocked ? 1 : 0.3}
          />
        )
      })
    })
  }

  // 渲染节点
  const renderNodes = () => {
    return storyNodes.map((node) => {
      const pos = getNodePosition(node)
      const unlocked = isUnlocked(node)
      
      return (
        <motion.g
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.row * 0.05 }}
        >
          {/* 节点背景 */}
          <rect
            x={pos.x}
            y={pos.y}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx="8"
            fill={unlocked ? 'url(#nodeGradient)' : '#1f2937'}
            stroke={unlocked ? '#22d3ee' : '#374151'}
            strokeWidth="2"
            className={unlocked ? 'cursor-pointer' : 'cursor-not-allowed'}
            onClick={() => handleNodeClick(node)}
          />
          
          {/* 节点文字 */}
          <text
            x={pos.x + NODE_WIDTH / 2}
            y={pos.y + NODE_HEIGHT / 2 - 6}
            textAnchor="middle"
            fill={unlocked ? '#ffffff' : '#6b7280'}
            fontSize="11"
            fontWeight="bold"
            className="pointer-events-none select-none"
          >
            {unlocked ? node.title : '???'}
          </text>
          <text
            x={pos.x + NODE_WIDTH / 2}
            y={pos.y + NODE_HEIGHT / 2 + 10}
            textAnchor="middle"
            fill={unlocked ? '#94a3b8' : '#4b5563'}
            fontSize="9"
            className="pointer-events-none select-none"
          >
            {unlocked ? (node.subtitle || '') : ''}
          </text>
          
          {/* 锁定图标 */}
          {!unlocked && (
            <g transform={`translate(${pos.x + NODE_WIDTH / 2 - 6}, ${pos.y + NODE_HEIGHT / 2 - 6})`}>
              <Lock size={12} className="text-gray-500" />
            </g>
          )}
        </motion.g>
      )
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
        className="w-full max-w-4xl mx-4 h-[85vh] bg-gradient-to-b from-gray-900/95 to-black/95 rounded-2xl border border-white/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-white">剧情回顾</h2>
            <p className="text-white/50 text-xs mt-1">点击已解锁章节可重新体验</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>

        {/* 树状图 */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-auto p-4"
        >
          <svg
            width="100%"
            height={treeHeight}
            viewBox={`0 0 ${50 + 3 * COL_WIDTH} ${treeHeight}`}
            preserveAspectRatio="xMidYMin meet"
          >
            {/* 渐变定义 */}
            <defs>
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#164e63" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </linearGradient>
            </defs>
            
            {/* 连接线 */}
            {renderConnections()}
            
            {/* 节点 */}
            {renderNodes()}
          </svg>
        </div>

        {/* 图例 */}
        <div className="p-3 border-t border-white/10 flex justify-center gap-6 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-b from-cyan-800 to-cyan-900 border border-cyan-400" />
            <span className="text-white/60">已解锁</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-800 border border-gray-600" />
            <span className="text-white/60">未解锁</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
