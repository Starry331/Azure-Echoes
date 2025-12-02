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
      
      // 已解锁的场景（用于剧情树）
      unlockedScenes: ['start'],
      
      // ═══════════════════════════════════════
      // 核心数值系统（隐藏变量）
      // ═══════════════════════════════════════
      // 💙 好感度 Affection (0-100)：她对你的情感依赖、信任与爱意
      affection: 10,
      // 🧬 异化值 Alienation (0-100)：生理状态和野性本能
      //    高=保留鳞片、尖牙、对水依赖（像人鱼）
      //    低=特征退化、身体虚弱但像人类
      alienation: 50,
      // 🧠 适应度 Adaptation (0-100)：社会化程度和人类常识
      //    高=懂礼貌、会撒谎、能融入人群
      //    低=天真、直率、容易闯祸
      adaptation: 0,
      // 💰 资金
      money: 1000,
      // 🔑 关键Flag
      flags: {
        girlfriendDeclared: false,  // 第4章承认女友
        scalesPraised: false,       // 第5章赞美鳞片
        tridentFound: false,        // 找到深海三叉戟
      },
      
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
          // 重置数值（初始：好感10 | 异化50 | 适应0 | 资金1000）
          affection: 10,
          alienation: 50,
          adaptation: 0,
          money: 1000,
          flags: {
            girlfriendDeclared: false,
            scalesPraised: false,
            tridentFound: false,
          },
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
            const { unlockedScenes } = get()
            const newUnlocked = unlockedScenes.includes(scene.nextScene)
              ? unlockedScenes
              : [...unlockedScenes, scene.nextScene]
            set({
              currentSceneId: scene.nextScene,
              currentDialogIndex: 0,
              displayedText: '',
              isTextComplete: false,
              unlockedScenes: newUnlocked,
            })
            // 检查新场景第一个对话是否是选项
            const newScene = scenario.scenes[scene.nextScene]
            if (newScene?.dialogs[0]?.choices) {
              set({
                showChoices: true,
                currentChoices: newScene.dialogs[0].choices,
                isTextComplete: true,
              })
            }
          } else {
            // 游戏结束
            set({ gameState: 'ending' })
          }
        } else {
          const nextIndex = currentDialogIndex + 1
          const nextDialog = scene.dialogs[nextIndex]
          set({
            currentDialogIndex: nextIndex,
            displayedText: '',
            isTextComplete: false,
          })
          // 检查下一个对话是否是纯选项对话（没有text只有choices）
          if (nextDialog?.choices && !nextDialog?.text) {
            set({
              showChoices: true,
              currentChoices: nextDialog.choices,
              isTextComplete: true,
            })
          }
        }
      },

      // 选择选项（含数值变动）
      selectChoice: (choice) => {
        const { history, currentSceneId, affection, alienation, adaptation, money, flags, unlockedScenes } = get()
        
        // 计算数值变动
        let newAffection = affection + (choice.affection || 0)
        let newAlienation = alienation + (choice.alienation || 0)
        let newAdaptation = adaptation + (choice.adaptation || 0)
        let newMoney = money - (choice.money || 0) // 资金扣除
        let newFlags = { ...flags }
        
        // 限制范围 0-100
        newAffection = Math.max(0, Math.min(100, newAffection))
        newAlienation = Math.max(0, Math.min(100, newAlienation))
        newAdaptation = Math.max(0, Math.min(100, newAdaptation))
        
        // 检查是否触发特殊Flag
        if (choice.flag) {
          newFlags[choice.flag] = true
        }
        
        // 解锁新场景
        const newUnlocked = unlockedScenes.includes(choice.nextScene)
          ? unlockedScenes
          : [...unlockedScenes, choice.nextScene]
        
        set({
          history: [...history, {
            sceneId: currentSceneId,
            choice: choice.text,
            // 记录数值变动
            stats: {
              affection: choice.affection || 0,
              alienation: choice.alienation || 0,
              adaptation: choice.adaptation || 0,
            },
          }],
          currentSceneId: choice.nextScene,
          currentDialogIndex: 0,
          showChoices: false,
          currentChoices: [],
          displayedText: '',
          isTextComplete: false,
          affection: newAffection,
          alienation: newAlienation,
          adaptation: newAdaptation,
          money: newMoney,
          flags: newFlags,
          unlockedScenes: newUnlocked,
        })
      },
      
      // 获取当前数值
      getStats: () => {
        const { affection, alienation, adaptation, flags } = get()
        return { affection, alienation, adaptation, flags }
      },
      
      // 更新数值（用于非选择事件）
      updateStats: (changes) => {
        const { affection, alienation, adaptation } = get()
        set({
          affection: Math.max(0, Math.min(100, affection + (changes.affection || 0))),
          alienation: Math.max(0, Math.min(100, alienation + (changes.alienation || 0))),
          adaptation: Math.max(0, Math.min(100, adaptation + (changes.adaptation || 0))),
        })
      },
      
      // 设置Flag
      setFlag: (flagName, value = true) => {
        const { flags } = get()
        set({ flags: { ...flags, [flagName]: value } })
      },
      
      // 检查结局条件（第19章结算）
      checkEnding: () => {
        const { affection, alienation, adaptation, flags } = get()
        
        // 🫧 死亡结局：深海的悲鸣
        // 好感度极低（失去活下去的动力）
        if (affection < 30) {
          return 'dead'
        }
        
        // 👑 真结局：蔚蓝誓约
        // 好感度高(≥80) + 异化值中高(40-80) + 适应度高(≥60)
        if (affection >= 80 && alienation >= 40 && alienation <= 80 && adaptation >= 60) {
          return 'true'
        }
        
        // 🏙️ 坏结局：褪色的泡沫
        // 异化值低(<20) + 适应度高(≥70) = 完全凡人化
        if (alienation < 20 && adaptation >= 70) {
          return 'bad'
        }
        
        // 🌊 好结局：远洋的呼唤
        // 好感度中高(≥60) + 适应度低(<40) = 无法融入人类社会
        if (affection >= 60 && adaptation < 40) {
          return 'good'
        }
        
        // 未达成特定结局
        return null
      },

      // 更新显示文本
      setDisplayedText: (text) => set({ displayedText: text }),
      setTextComplete: (complete) => set({ isTextComplete: complete }),

      // 存档
      saveGame: (slotIndex) => {
        const { currentSceneId, currentDialogIndex, history, saveSlots, characters, affection, alienation, adaptation, money, flags, unlockedScenes } = get()
        const newSlots = [...saveSlots]
        newSlots[slotIndex] = {
          currentSceneId,
          currentDialogIndex,
          history,
          characters,
          unlockedScenes,
          // 保存数值系统
          affection,
          alienation,
          adaptation,
          money,
          flags,
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
            unlockedScenes: saveData.unlockedScenes ?? ['start'],
            // 恢复数值系统
            affection: saveData.affection ?? 10,
            alienation: saveData.alienation ?? 50,
            adaptation: saveData.adaptation ?? 0,
            money: saveData.money ?? 1000,
            flags: saveData.flags ?? {
              girlfriendDeclared: false,
              scalesPraised: false,
              tridentFound: false,
            },
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

      // 跳转到指定场景（剧情树回顾）
      jumpToScene: (sceneId) => {
        set({
          currentSceneId: sceneId,
          currentDialogIndex: 0,
          gameState: 'playing',
          displayedText: '',
          isTextComplete: false,
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
        unlockedScenes: state.unlockedScenes,
      }),
    }
  )
)

export default useGameStore
