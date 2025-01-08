import { Route, Routes } from 'react-router-dom'

import CustomersPage from './customers-list'

export function CustomersRoutes() {
   return (
      <Routes>
         <Route path='/' element={<CustomersPage />} />
      </Routes>
   )
}
