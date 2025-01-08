'use client'

import { AppSidebar } from '@/components/templates/sidebar'
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from '@/components/organisms/sidebar'
import { useNavigate } from 'react-router-dom'

interface MainLayoutProps {
   children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
   const navigate = useNavigate()

   const userNav = {
      name: 'Cris',
      email: 'email@example.com',
      avatar: '',
   }

   return (
      <SidebarProvider>
         <AppSidebar
            accountRouter={() => navigate('/profile?p=account')}
            financeRouter={() => navigate('/profile?p=finance')}
            signOut={() => console.log('saiu')}
            user={userNav}
         />
         <SidebarInset>
            <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
               <div className='flex items-center gap-2 px-4'>
                  <SidebarTrigger className='-ml-1' />
               </div>
            </header>
            <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
               {children}
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}
