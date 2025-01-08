import { Route, Routes } from 'react-router-dom'
import LoginPage from './login'

export default function AuthRoutes() {
   return (
      <Routes>
         <Route path='login' element={<LoginPage />} />
      </Routes>
   )
}
