/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import MainLayout from '../layouts/main-layout'
import { Suspense } from 'react'

import { DashboardRoutes } from '../pages/main/dashboard/routes'
import { CustomersRoutes } from '../pages/main/customers/routes'
import { WalletRoutes } from '../pages/main/wallets/routes'
import { ProfileRoutes } from '../pages/main/profile/routes'

const App = () => {
   const location = useLocation()

   const isAppRoute = location.pathname.startsWith('/app')

   return (
      <MainLayout>
         <Suspense>
            {isAppRoute && <DashboardRoutes />}
            <Outlet />
         </Suspense>
      </MainLayout>
   )
}

export const protectedRoutes = [
   {
      path: '/app',
      element: <App />,
      exact: true,
      children: [
         { path: 'customers/*', element: <CustomersRoutes /> },
         { path: 'wallet/*', element: <WalletRoutes /> },
         { path: 'user/*', element: <ProfileRoutes /> },
         { path: '*', element: <Navigate to='/app' /> },
      ],
   },
   { path: '*', element: <Navigate to='/app' /> },
]
