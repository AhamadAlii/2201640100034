import React, { createContext, useContext, useState, useEffect } from 'react'
import { ShortURL } from '../types'

interface URLContextType {
  urls: ShortURL[]
  addURL: (u: ShortURL) => void
  addClick: (id: string, click: { timestamp: string; referrer?: string; userAgent?: string }) => void
  findById: (id: string) => ShortURL | undefined
}

const ctx = createContext<URLContextType | undefined>(undefined)

const STORAGE_KEY = 'affordmed_urls_v1'

export const URLProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [urls, setUrls] = useState<ShortURL[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) as ShortURL[] : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(urls))
  }, [urls])

  const addURL = (u: ShortURL) => setUrls(prev => [u, ...prev])
  const addClick = (id: string, click: { timestamp: string; referrer?: string; userAgent?: string }) => {
    setUrls(prev => prev.map(u => u.id === id ? { ...u, clicks: [...u.clicks, click] } : u))
  }
  const findById = (id: string) => urls.find(u => u.id === id)

  return <ctx.Provider value={{ urls, addURL, addClick, findById }}>{children}</ctx.Provider>
}

export function useURLContext(){
  const v = useContext(ctx)
  if(!v) throw new Error('useURLContext must be used inside URLProvider')
  return v
}
