import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppContextProvider } from './context/appContext.tsx'
import { LangContextProvider } from './context/langContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </AppContextProvider>
  </StrictMode>,
)
