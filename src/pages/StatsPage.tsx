import React from 'react'
import { useURLContext } from '../context/URLContext'
import { Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

export default function StatsPage(){
  const { urls } = useURLContext()
  return (
    <Paper sx={{ p:2 }}>
      <Typography variant="h6" gutterBottom>URL Shortener Statistics</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Short URL</TableCell>
              <TableCell>Original</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Expires</TableCell>
              <TableCell>Clicks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.map(u => (
              <TableRow key={u.id}>
                <TableCell>{u.short}</TableCell>
                <TableCell style={{maxWidth: 300}}>{u.original}</TableCell>
                <TableCell>{new Date(u.createdAt).toLocaleString()}</TableCell>
                <TableCell>{new Date(u.expiresAt).toLocaleString()}</TableCell>
                <TableCell>{u.clicks.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
