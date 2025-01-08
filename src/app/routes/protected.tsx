/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet } from 'react-router-dom'
import MainLayout from '../layouts/main-layout'
import { Suspense } from 'react'
import MainRoutes from '../pages/main/routes'

const App = () => {
   return (
      <MainLayout>
         <Suspense>
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
         { path: '/', element: <MainRoutes /> },
         { path: '*', element: <Navigate to='/app' /> },
      ],
   },
]
