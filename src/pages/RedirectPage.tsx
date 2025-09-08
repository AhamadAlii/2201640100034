import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useURLContext } from '../context/URLContext'
import { Typography, Paper } from '@mui/material'

export default function RedirectPage(){
  const { shortId } = useParams()
  const { findById, addClick } = useURLContext()
  const u = findById(shortId || '')

  useEffect(() => {
    if(!u) return
    const now = new Date()
    const expiry = new Date(u.expiresAt)
    if(now > expiry){
      return
    }
    // record click
    addClick(u.id, { timestamp: now.toISOString(), referrer: document.referrer || undefined, userAgent: navigator.userAgent })
    // perform redirect
    window.location.replace(u.original)
  }, [u, addClick])

  if(!u) {
    return <Paper sx={{ p:2 }}><Typography>Short URL not found.</Typography></Paper>
  }
  const isExpired = new Date() > new Date(u.expiresAt)
  if(isExpired){
    return <Paper sx={{ p:2 }}><Typography>Link has expired.</Typography></Paper>
  }
  return <Paper sx={{ p:2 }}><Typography>Redirecting...</Typography></Paper>
}
