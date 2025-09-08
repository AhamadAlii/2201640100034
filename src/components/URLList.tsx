import React from 'react'
import { useURLContext } from '../context/URLContext'
import { List, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default function URLList(){
  const { urls } = useURLContext()

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(()=> alert('Copied to clipboard'))
  }

  return (
    <List>
      {urls.map(u => (
        <ListItem key={u.id} secondaryAction={
          <>
            <Tooltip title="Open">
              <IconButton edge="end" onClick={()=> window.open(u.short, '_blank')}>
                <OpenInNewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy">
              <IconButton edge="end" onClick={()=>copy(u.short)}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </>
        }>
          <ListItemText
            primary={u.short}
            secondary={`Original: ${u.original} — Expires: ${new Date(u.expiresAt).toLocaleString()} — Clicks: ${u.clicks.length}`}
          />
        </ListItem>
      ))}
      {urls.length === 0 && <ListItem><ListItemText primary="No shortened URLs yet." /></ListItem>}
    </List>
  )
}
