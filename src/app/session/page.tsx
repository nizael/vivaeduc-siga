'use client'
import { LoginIcon } from '@/components/icons/LoginIcon';
import { InputText } from '@/components/inputs/InputText';
import { sessionCreate } from '@/services/session/sessionCreate';
import { cookiesManager } from '../../di/dependencyInjection';
import { redirect } from 'next/navigation';


export default function SessionPage() {
  const handleLogin = async (formData: FormData) => {
    const result = await sessionCreate(formData)
    if (result.status === 201) {
      cookiesManager.setCookie('user_token', result.data.token)
      sessionStorage.setItem('user_token', result.data.token)
     redirect('/')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-gray-50 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-primary">Login</h2>
        <form action={handleLogin} className='flex flex-col gap-4'>
          <InputText label="Usuário" id='username' name='username' />
          <InputText label="Senha" type="password" id='password' name='password' />
          <button className="h-[40px] bg-[--bg-primary] w-full text-gray-50 font-semibold rounded-xl flex items-center justify-center gap-2"> <LoginIcon /> Entrar</button>
        </form>
      </div>
    </div>
  );
};

