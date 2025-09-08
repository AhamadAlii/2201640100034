import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import URLForm from '../components/URLForm'
import URLList from '../components/URLList'

export default function ShortenerPage(){
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Develop a React URL Shortener Web App</Typography>
      <Box sx={{ my: 2 }}>
        <URLForm />
      </Box>
      <Box sx={{ mt: 3 }}>
        <URLList />
      </Box>
    </Paper>
  )
}
