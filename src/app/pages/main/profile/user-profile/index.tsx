import { Button } from '@/components/atoms/button'
import { Label } from '@/components/atoms/label'
import { Separator } from '@/components/atoms/separator'
import Account from './components/account'
import Finance from './components/finance'
import clsx from 'clsx'
import { useSearchParams } from '@/hooks/use-url-params'

export default function UserProfile() {
   const { getParam, setParam } = useSearchParams()

   const getProfileParams = getParam('p')

   return (
      <div className='flex flex-col w-full gap-4'>
         <div className='flex flex-col w-full gap-2'>
            <Label className='text-2xl font-bold font-sans'>
               Configurações de conta
            </Label>
            <Label className='font-light font-sans'>
               Acesse suas informações pessoais e configure-as da maneira que
               preferir
            </Label>
         </div>
         <Separator className='mt-2' />
         <div className='grid grid-cols-4 gap-8 w-full'>
            <div className='flex flex-col gap-1 items-start w-full col-span-1'>
               <Button
                  variant='ghost'
                  className={clsx(
                     getParam('p') === 'account' && 'bg-accent',
                     'w-full justify-start items-start'
                  )}
                  onClick={() => setParam('p', 'account')}
               >
                  Conta
               </Button>
               <Button
                  variant='ghost'
                  className={clsx(
                     getParam('p') === 'finance' && 'bg-accent',
                     'w-full justify-start items-start'
                  )}
                  onClick={() => setParam('p', 'finance')}
               >
                  Financeiro
               </Button>
            </div>
            {getProfileParams === 'account' && <Account />}
            {getProfileParams === 'finance' && <Finance />}
         </div>
      </div>
   )
}
