import { Route, Routes } from 'react-router-dom'
import UserWallet from './user-wallet'

export function WalletRoutes() {
   return (
      <Routes>
         <Route path='/' element={<UserWallet />} />
      </Routes>
   )
}
