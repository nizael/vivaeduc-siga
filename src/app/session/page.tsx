'use client'
import { LoginIcon } from '@/components/icons/LoginIcon';
import { InputText } from '@/components/inputs/InputText';
import { sessionCreate } from '@/services/session/sessionCreate';
import { cookiesManager } from '../../di/dependencyInjection';
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';


export default function SessionPage() {
  const router = useRouter()
  const handleLogin = async (formData: FormData) => {
    const result = await sessionCreate(formData)
    if (result.status === 201) {
      cookiesManager.setCookie('user_token', result.data.token)
      sessionStorage.setItem('user_token', result.data.token)
      router.push('/')
    }
  };

  return (
    <div className="h-full flex items-center max-sm:flex-col justify-between">
      <div className='w-full md:h-full flex flex-col items-center  bg-primary'>
        <div className="flex p-4 items-center gap-2 w-full">
          <p className="w-10 h-10 rounded-xl font-bold text-gray-50 text-2xl grid place-content-center bg-[#FB7D5B]">A</p>
          <p className=" text-2xl font-bold text-gray-50">Akademi</p>
        </div>
        <div className='grow flex items-center justify-end w-full max-sm:hidden'>
          <Image src="/img/objects-3d.png" alt="" width={612} height={524} className='' />
        </div>
      </div>
      <div className='w-full bg-gray-50 h-full flex items-center justify-center p-4'>
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-10">
          <h2 className="text-3xl font-bold text-primary">Login</h2>
          <form action={handleLogin} className='flex flex-col gap-4'>
            <InputText label="Usuário" id='username' name='username' />
            <InputText label="Senha" type="password" id='password' name='password' />
            <button className="h-[40px] bg-[--bg-primary] w-full text-gray-50 font-semibold rounded-xl flex items-center justify-center gap-2"> <LoginIcon /> Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

