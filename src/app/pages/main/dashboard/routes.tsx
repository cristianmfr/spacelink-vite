import { Route, Routes } from 'react-router-dom'

import OverviewPage from './overview'

export function DashboardRoutes() {
   return (
      <Routes>
         <Route path='/' element={<OverviewPage />} />
      </Routes>
   )
}
