/* eslint-disable react-refresh/only-export-components */
import { Navigate, useLocation } from 'react-router-dom'
import LoginPage from '../pages/auth/login'
import AuthLayout from '../layouts/auth-layout'
import RegisterPage from '../pages/auth/register'

const AuthRoutes = () => {
   const location = useLocation()
   const resolvePage = location.pathname.includes('/login') ? (
      <LoginPage />
   ) : location.pathname.includes('/register') ? (
      <RegisterPage />
   ) : null

   return <AuthLayout>{resolvePage}</AuthLayout>
}

export const publicRoutes = [
   {
      path: '/login',
      element: <AuthRoutes />,
   },
   {
      path: '/register',
      element: <AuthRoutes />,
   },
   {
      path: '*',
      element: <Navigate to='/login' />,
   },
]
