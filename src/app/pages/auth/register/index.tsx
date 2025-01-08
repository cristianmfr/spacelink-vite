'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { Image } from '@/components/atoms/image'
import Hand from '/waving-hang.svg'
import AuthLayout from '@/app/layouts/auth-layout'

export default function RegisterPage() {
   return (
      <AuthLayout>
         <form className={cn('flex flex-col gap-6')}>
            <div className='flex flex-col items-center gap-2 text-center'>
               <span className='flex flex-row gap-2 text-2xl font-bold'>
                  Cadastre-se agora
                  <Image alt='hang' width={30} height={30}>
                     {Hand}
                  </Image>
               </span>
               <p className='text-balance text-xs text-muted-foreground'>
                  Insira suas informações abaixo para se registrar
               </p>
            </div>
            <div className='grid gap-4'>
               <div className='grid gap-2'>
                  <Label htmlFor='name'>Seu nome</Label>
                  <Input id='name' placeholder='Digite seu nome' required />
               </div>
               <div className='grid grid-cols-2 gap-2'>
                  <div className='grid gap-2'>
                     <Label htmlFor='document'>Documento</Label>
                     <Input
                        id='document'
                        placeholder='Digite seu CPF'
                        required
                     />
                  </div>
                  <div className='grid gap-2'>
                     <Label htmlFor='phone'>Telefone</Label>
                     <Input
                        id='phone'
                        placeholder='Digite seu telefone'
                        required
                     />
                  </div>
               </div>
               <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                     id='email'
                     type='email'
                     placeholder='email@exemplo.com.br'
                     required
                  />
               </div>
               <div className='grid gap-2'>
                  <Label htmlFor='password'>Senha</Label>
                  <Input
                     id='password'
                     type='password'
                     placeholder='***********'
                     required
                  />
               </div>
               <Button type='submit' className='w-full'>
                  Cadastrar
               </Button>
            </div>
         </form>
      </AuthLayout>
   )
}
