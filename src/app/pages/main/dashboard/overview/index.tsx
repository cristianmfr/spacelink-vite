import { Button } from '@/components/atoms/button'
import { Card, CardContent, CardHeader } from '@/components/atoms/card'
import { Label } from '@/components/atoms/label'

export default function OverviewPage() {
   return (
      <div className='flex flex-col w-full gap-4'>
         <div className='flex flex-col w-full gap-4'>
            <Card>
               <CardHeader>
                  <Label className='text-md font-semibold font-sans'>
                     Evolução mensal
                  </Label>
               </CardHeader>
               <CardContent>
                  <div className='flex flex-col w-full items-center justify-center gap-2'>
                     <Label>Nenhum resultado para ser exibido.</Label>
                     <Button variant='link'>Atualizar gráficos</Button>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}
