import { Button } from '@/components/atoms/button'
import { Label } from '@/components/atoms/label'
import { Separator } from '@/components/atoms/separator'
import { Plus } from 'lucide-react'
import { CreateFinancialAccount } from './new-financial-account'
import { useSearchParams } from '@/hooks/use-url-params'

export default function Finance() {
   const { deleteParam, getParam, setParam } = useSearchParams()

   const containsCreateParam = getParam('fm') === 'open'

   return (
      <div className='flex flex-col w-full gap-4 col-span-2'>
         <div className='flex flex-col w-full'>
            <Label className='text-lg font-bold font-sans'>Financeiro</Label>
            <Label className='font-light font-sans'>
               Gerencie suas contas financeiras.
            </Label>
         </div>
         <Separator />
         <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-row items-center justify-between'>
               <Label className='text-md font-semibold font-sans'>
                  Contas financeiras
               </Label>
               <Button
                  size='icon'
                  variant='secondary'
                  onClick={() => setParam('fc', 'open')}
               >
                  <Plus />
               </Button>
               <CreateFinancialAccount
                  isOpen={containsCreateParam}
                  onClose={() => deleteParam('fc')}
               />
            </div>
            <div className='flex flex-col border border-thin rounded-lg w-full items-center justify-center h-[100px]'>
               <Label className='text-sm font-light font-sans'>
                  Nenhuma conta financiera cadastrada
               </Label>
            </div>
            <div>
               <Button className='bg-white hover:bg-white/80 text-black'>
                  Atualizar
               </Button>
            </div>
         </div>
      </div>
   )
}