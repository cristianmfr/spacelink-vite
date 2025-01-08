import { Route, Routes } from 'react-router-dom'
import DashboardPage from './dashboard'
import CustomersPage from './customers'

export default function MainRoutes() {
   return (
      <Routes>
         <Route path='/' element={<DashboardPage />} />
         <Route path='/clientes' element={<CustomersPage />} />
      </Routes>
   )
}
