import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY){
  throw new Error('Please provide a publishable key to the .env file')
} 

createRoot(document.getElementById('root')).render(
  // ClerkProvider is third party provider  for authentication
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
