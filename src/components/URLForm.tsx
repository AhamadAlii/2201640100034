import React, { useState } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { useURLContext } from '../context/URLContext'
import { ShortURL } from '../types'

export default function URLForm(){
  const { addURL, urls } = useURLContext()
  const [original, setOriginal] = useState('')
  const [validMins, setValidMins] = useState('30')
  const [customCode, setCustomCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!original) return
    if(urls.length >= 5){
      alert('Maximum 5 concurrent shortened URLs allowed in this demo.')
      return
    }
    const id = customCode ? customCode.trim() : uuidv4().slice(0,6)
    const now = new Date()
    const mins = Math.max(1, parseInt(validMins || '30', 10))
    const expires = new Date(now.getTime() + mins*60*1000)
    const short = `${window.location.origin}/${id}`
    const newUrl: ShortURL = {
      id,
      original,
      short,
      createdAt: now.toISOString(),
      expiresAt: expires.toISOString(),
      clicks: []
    }
    addURL(newUrl)
    setOriginal('')
    setCustomCode('')
    setValidMins('30')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <TextField label="Original URL" value={original} onChange={e=>setOriginal(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField label="Validity (mins)" value={validMins} onChange={e=>setValidMins(e.target.value)} type="number" inputProps={{min:1}} required fullWidth />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Custom Short Code (optional)" value={customCode} onChange={e=>setCustomCode(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" gap={2}>
            <Button variant="contained" type="submit">Create Short URL</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
