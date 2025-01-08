import { Route, Routes } from 'react-router-dom'
import UserProfile from './user-profile'

export function ProfileRoutes() {
   return (
      <Routes>
         <Route path='/' element={<UserProfile />} />
      </Routes>
   )
}
