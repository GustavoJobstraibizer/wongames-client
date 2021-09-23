const APP_KEY = 'WONGAMES'

const isServerSide = typeof window === 'undefined'

export function getStorageItem(key: string) {
  if (isServerSide) return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return data ? JSON.parse(data) : null
}

export function setStorageItem(key: string, values: string[]) {
  if (isServerSide) return

  window.localStorage.setItem(`${APP_KEY}_${key}`, JSON.stringify(values))
}
