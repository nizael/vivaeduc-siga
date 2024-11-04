'use client'
import { LoginIcon } from '@/components/icons/LoginIcon';
import { InputText } from '@/components/inputs/InputText';
import { sessionCreate } from '@/services/session/sessionCreate';
import { cookiesManager } from '../../di/dependencyInjection';
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';
import { LoadingSpinner } from '@/components/loading-spinner/LoadingSpinner';
import { useState } from 'react';
import { Toast } from '@/components/toast/Toast';


export default function SessionPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const handleLogin = async (formData: FormData) => {
    setIsLoading(s => !s)
    const result = await sessionCreate(formData)
    if (result.status === 201) {
      cookiesManager.setCookie('user_token', result.data.token)
      sessionStorage.setItem('user_token', result.data.token)
      router.push('/')
    } else {
      <Toast message={result.data.message} onClose={() => ({})} />
    }
  };

  return (
    <div className="h-full flex items-center max-sm:flex-col justify-between">
      <div className='w-full md:h-full flex flex-col items-center  bg-primary'>
        <div className="flex p-4 items-center gap-2 w-full">
          <p className="w-10 h-10 rounded-xl font-bold text-gray-50 text-2xl grid place-content-center bg-[#FB7D5B]">A</p>
          <p className=" text-[26px] text-gray-50"><b className="font">Viva</b>Educ</p>
        </div>
        <div className='grow flex items-center justify-end w-full max-sm:hidden'>
          <Image src="/img/objects-3d.png" alt="" width={612} height={524} className='' />
        </div>
      </div>
      <div className='relative w-full bg-gray-50 h-full flex flex-col items-center justify-center gap-8'>
        <div className="flex flex-col p-4 items-center  gap-2 w-full max-w-md">
          <p className="w-10 h-10 rounded-xl font-bold text-gray-50 text-2xl grid place-content-center bg-[#FB7D5B]">A</p>
          {/* <p className=" text-[26px] text-gray-50"><b className="font">Viva</b>Educ</p> */}
          <p className=" text-[26px] text-primary"><b className="font">Viva</b>Educ</p>
        </div>

        <LoadingSpinner isLoading={isLoading} />
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-10">
          <h1 className="text-3xl font-bold text-primary">Entrar</h1>
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

