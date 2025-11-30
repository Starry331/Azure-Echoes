import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { scenario } from '../data/scenario'

const useGameStore = create(
  persist(
    (set, get) => ({
      // 游戏状态
      gameState: 'title', // 'title' | 'playing' | 'menu'
      currentSceneId: 'start',
      currentDialogIndex: 0,
      
      // 角色状态
      characters: {},
      
      // 显示状态
      displayedText: '',
      isTextComplete: false,
      showChoices: false,
      currentChoices: [],
      
      // 历史记录
      history: [],
      
      // 存档槽位
      saveSlots: Array(10).fill(null),
      
      // 设置
      settings: {
        textSpeed: 50, // 打字速度 (ms)
        autoPlayDelay: 2000, // 自动播放延迟
        bgmVolume: 0.7,
        seVolume: 1.0,
      },

      // 开始游戏
      startGame: () => {
        set({
          gameState: 'playing',
          currentSceneId: 'start',
          currentDialogIndex: 0,
          history: [],
          displayedText: '',
          isTextComplete: false,
          showChoices: false,
        })
      },

      // 继续游戏（从存档）
      continueGame: (saveData) => {
        set({
          ...saveData,
          gameState: 'playing',
        })
      },

      // 获取当前场景
      getCurrentScene: () => {
        const { currentSceneId } = get()
        return scenario.scenes[currentSceneId]
      },

      // 获取当前对话
      getCurrentDialog: () => {
        const scene = get().getCurrentScene()
        if (!scene) return null
        return scene.dialogs[get().currentDialogIndex]
      },

      // 前进到下一段对话
      nextDialog: () => {
        const { currentSceneId, currentDialogIndex, history } = get()
        const scene = get().getCurrentScene()
        
        if (!scene) return

        const currentDialog = scene.dialogs[currentDialogIndex]
        
        // 添加到历史记录
        if (currentDialog) {
          set({
            history: [...history, {
              sceneId: currentSceneId,
              dialog: currentDialog,
            }]
          })
        }

        // 检查是否有选项
        if (currentDialog?.choices) {
          set({
            showChoices: true,
            currentChoices: currentDialog.choices,
            isTextComplete: true,
          })
          return
        }

        // 检查是否是场景结尾
        if (currentDialogIndex >= scene.dialogs.length - 1) {
          if (scene.nextScene) {
            set({
              currentSceneId: scene.nextScene,
              currentDialogIndex: 0,
              displayedText: '',
              isTextComplete: false,
            })
          } else {
            // 游戏结束
            set({ gameState: 'ending' })
          }
        } else {
          set({
            currentDialogIndex: currentDialogIndex + 1,
            displayedText: '',
            isTextComplete: false,
          })
        }
      },

      // 选择选项
      selectChoice: (choice) => {
        const { history, currentSceneId, currentDialogIndex } = get()
        
        set({
          history: [...history, {
            sceneId: currentSceneId,
            choice: choice.text,
          }],
          currentSceneId: choice.nextScene,
          currentDialogIndex: 0,
          showChoices: false,
          currentChoices: [],
          displayedText: '',
          isTextComplete: false,
        })
      },

      // 更新显示文本
      setDisplayedText: (text) => set({ displayedText: text }),
      setTextComplete: (complete) => set({ isTextComplete: complete }),

      // 存档
      saveGame: (slotIndex) => {
        const { currentSceneId, currentDialogIndex, history, saveSlots, characters } = get()
        const newSlots = [...saveSlots]
        newSlots[slotIndex] = {
          currentSceneId,
          currentDialogIndex,
          history,
          characters,
          savedAt: new Date().toISOString(),
          thumbnail: scenario.scenes[currentSceneId]?.background || null,
        }
        set({ saveSlots: newSlots })
      },

      // 读档
      loadGame: (slotIndex) => {
        const { saveSlots } = get()
        const saveData = saveSlots[slotIndex]
        if (saveData) {
          set({
            currentSceneId: saveData.currentSceneId,
            currentDialogIndex: saveData.currentDialogIndex,
            history: saveData.history,
            characters: saveData.characters,
            gameState: 'playing',
            displayedText: '',
            isTextComplete: false,
            showChoices: false,
          })
        }
      },

      // 返回标题
      returnToTitle: () => {
        set({
          gameState: 'title',
          showChoices: false,
        })
      },

      // 更新设置
      updateSettings: (newSettings) => {
        set({ settings: { ...get().settings, ...newSettings } })
      },

      // 设置游戏状态
      setGameState: (state) => set({ gameState: state }),
    }),
    {
      name: 'galgame-storage',
      partialize: (state) => ({
        saveSlots: state.saveSlots,
        settings: state.settings,
      }),
    }
  )
)

export default useGameStore
