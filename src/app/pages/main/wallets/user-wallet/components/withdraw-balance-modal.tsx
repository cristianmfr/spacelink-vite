import { useMutation } from '@apollo/client'
import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { Modal } from '@/components/atoms/modal'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { WithdrawSchema, WithdrawType } from '../types/withdraw-customer-schema'
import { WITHDRAW_BALANCE } from '@/app/api/mutations/withdraw-balance'

interface WithdrawBalanceProps {
   isOpen: boolean
   onClose: () => void
   refetch: () => void
}

export function WithdrawBalance({ isOpen, onClose }: WithdrawBalanceProps) {
   const { register, formState, handleSubmit } = useForm<WithdrawType>({
      resolver: zodResolver(WithdrawSchema),
   })

   const [withdrawBalance] = useMutation(WITHDRAW_BALANCE)

   const handleWithdraw = (data: WithdrawType) => {
      const resolveValue = parseFloat(data.withdrawValue)

      withdrawBalance({
         variables: {
            withdrawValue: resolveValue,
            financialAccountId: '',
         },
      })
         .then(() => {
            toast.success('Sua solicitação foi enviada com sucesso!')
            onClose()
         })
         .catch((err) => {
            toast.error('Erro ao solicitar saque.')
            console.log(err)
         })
   }

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <div className='flex flex-col w-full gap-4'>
            <div className='grid grid-cols-12 items-center justify-between gap-2'>
               <Label htmlFor='balance' className='font-semibold col-span-2'>
                  Valor:
               </Label>
               <Input
                  id='balance'
                  placeholder='R$ 0,00'
                  type='number'
                  required
                  className='col-span-10'
                  {...register('withdrawValue')}
               />
               {formState.errors.withdrawValue && (
                  <span className='text-red-500 text-[12px] font-light col-span-12'>
                     {formState.errors.withdrawValue.message}
                  </span>
               )}
            </div>
            <div className='grid grid-cols-12 items-center justify-between gap-2'>
               <Label htmlFor='balance' className='font-semibold col-span-2'>
                  Conta:
               </Label>
               <Input placeholder='Chave PIX' />
            </div>
            <div className='grid grid-cols-2 items-center w-full gap-2'>
               <Button variant='secondary' onClick={onClose}>
                  Cancelar
               </Button>
               <Button onClick={handleSubmit(handleWithdraw)}>Sacar</Button>
            </div>
         </div>
      </Modal>
   )
}
