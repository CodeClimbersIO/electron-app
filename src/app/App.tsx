import { CssBaseline, ThemeProvider } from '@mui/material'
import AppRouter from './routes'
import theme from '../config/theme'
import { createRoot } from 'react-dom/client'
import './index.css'

function AppRender() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

const root = createRoot(document.body)
root.render(AppRender())
