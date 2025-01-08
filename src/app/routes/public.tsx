/* eslint-disable react-refresh/only-export-components */
import { Navigate } from 'react-router-dom'
import AuthLayout from '../layouts/auth-layout'
import AuthRoutes from '../pages/auth/routes'

const Auth = () => {
   return (
      <AuthLayout>
         <AuthRoutes />
      </AuthLayout>
   )
}

export const publicRoutes = [
   {
      path: '/login',
      element: <Auth />,
   },
   {
      path: '*',
      element: <Navigate to='/login' />,
   },
]
