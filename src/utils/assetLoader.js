// 资源加载管理器 - 懒加载 + 预加载
const loadedAssets = new Map()
const loadingPromises = new Map()

// 预加载单个图片
export const preloadImage = (src) => {
  if (!src) return Promise.resolve(null)
  
  // 已加载
  if (loadedAssets.has(src)) {
    return Promise.resolve(loadedAssets.get(src))
  }
  
  // 正在加载
  if (loadingPromises.has(src)) {
    return loadingPromises.get(src)
  }
  
  // 开始加载
  const promise = new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      loadedAssets.set(src, img)
      loadingPromises.delete(src)
      resolve(img)
    }
    img.onerror = () => {
      loadingPromises.delete(src)
      reject(new Error(`Failed to load: ${src}`))
    }
    img.src = src
  })
  
  loadingPromises.set(src, promise)
  return promise
}

// 预加载多个资源
export const preloadAssets = async (assets) => {
  const promises = assets.filter(Boolean).map(preloadImage)
  return Promise.allSettled(promises)
}

// 检查资源是否已加载
export const isAssetLoaded = (src) => loadedAssets.has(src)

// 获取场景需要的资源列表
export const getSceneAssets = (scene) => {
  if (!scene) return []
  
  const assets = []
  
  // 背景
  if (scene.background) assets.push(scene.background)
  
  // 对话中的立绘
  if (scene.dialogs) {
    scene.dialogs.forEach(dialog => {
      if (dialog.sprite) assets.push(dialog.sprite)
    })
  }
  
  return [...new Set(assets)] // 去重
}

// 预加载场景资源（当前场景 + 下一场景）
export const preloadSceneAssets = async (currentScene, nextSceneId, scenes) => {
  const assets = []
  
  // 当前场景资源
  assets.push(...getSceneAssets(currentScene))
  
  // 下一场景资源（如果有）
  if (nextSceneId && scenes[nextSceneId]) {
    assets.push(...getSceneAssets(scenes[nextSceneId]))
  }
  
  // 选择分支的场景资源
  if (currentScene?.dialogs) {
    currentScene.dialogs.forEach(dialog => {
      if (dialog.choices) {
        dialog.choices.forEach(choice => {
          if (choice.nextScene && scenes[choice.nextScene]) {
            // 只预加载背景，不预加载所有立绘
            const nextScene = scenes[choice.nextScene]
            if (nextScene.background) assets.push(nextScene.background)
          }
        })
      }
    })
  }
  
  return preloadAssets([...new Set(assets)])
}

// 清理未使用的资源（可选，用于内存管理）
export const clearUnusedAssets = (keepAssets) => {
  const keepSet = new Set(keepAssets)
  for (const [src] of loadedAssets) {
    if (!keepSet.has(src)) {
      loadedAssets.delete(src)
    }
  }
}

export default {
  preloadImage,
  preloadAssets,
  isAssetLoaded,
  getSceneAssets,
  preloadSceneAssets,
  clearUnusedAssets,
}
