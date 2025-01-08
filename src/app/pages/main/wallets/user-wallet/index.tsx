import { GET_USER_WALLET } from '@/app/api/queries/get-user-wallet'
import { Button } from '@/components/atoms/button'
import { DataTable } from '@/components/molecules/data-table'
import { WalletCard } from '@/components/molecules/wallet-card'
import { useSearchParams } from '@/hooks/use-url-params'
import { useQuery } from '@apollo/client'
import { WithdrawBalance } from './components/withdraw-balance-modal'

export default function UserWallet() {
   const { data: wallet, refetch } = useQuery(GET_USER_WALLET)
   const { deleteParam, getParam, setParam } = useSearchParams()

   const containsWithdrawParams = getParam('wm') === 'open'

   return (
      <div className='flex flex-col w-full gap-4'>
         <div className='grid grid-cols-3 w-full gap-4'>
            <WalletCard
               title='Saldo total'
               balance={`${wallet?.getUserWallet.wallet.balance || 0},00`}
               description='+ R$ 0,00 no ultimo mês'
               refresh={refetch}
            />
            <WalletCard
               title='Lançamentos futuros'
               balance={0}
               description='+ R$ 0,00 no ultimo mês'
               refresh={refetch}
            />
            <WalletCard
               title='Lançamentos futuros'
               balance={0}
               description='+ R$ 0,00 no ultimo mês'
               refresh={refetch}
            />
         </div>
         <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-row items-center justify-end w-full gap-1'>
               <Button variant='secondary'>Baixar extrato</Button>
               <Button onClick={() => setParam('wm', 'open')}>
                  Solicitar saque
               </Button>
            </div>
            <DataTable columns={[]} data={[]} />
         </div>
         <WithdrawBalance
            isOpen={containsWithdrawParams}
            onClose={() => deleteParam('wm')}
            refetch={refetch}
         />
      </div>
   )
}
