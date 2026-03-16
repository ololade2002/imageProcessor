import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Table from './components/Table.jsx'
import NewImage from './components/NewImage.jsx'
import Profile from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/table' element={<Table/>} />
      <Route path='/newImage'element={<NewImage/>}/>
      <Route path='/profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
