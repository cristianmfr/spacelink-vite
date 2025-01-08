/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import MainLayout from '../layouts/main-layout'
import { Suspense } from 'react'
import DashboardPage from '../pages/main/dashboard'
import CustomersPage from '../pages/main/customers'

const App = () => {
   const location = useLocation()

   const isAppRoute = location.pathname.startsWith('/app')

   return (
      <MainLayout>
         <Suspense>
            {isAppRoute && <DashboardPage />}
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
         { path: 'clientes', element: <CustomersPage /> },
         { path: '*', element: <Navigate to='/app' /> },
      ],
   },
]
