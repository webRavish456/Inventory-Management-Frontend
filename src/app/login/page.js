'use client'

import { useState } from 'react'
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can replace this with API call or auth logic
    console.log('Email:', email, 'Password:', password)
    alert(`Logged in as ${email}`)
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        <Typography variant="h5" align="left" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5, borderRadius: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
