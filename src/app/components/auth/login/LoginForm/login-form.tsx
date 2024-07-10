'use client';

import authService from '@/app/services/authService';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const router = useRouter();
  const form = useForm();
  const handleSubmit = form.handleSubmit(async data => {
    const { status } = await authService.login({
      email: data.email,
      password: data.password,
    });

    if (status === 200) {
      router.push('/home');
    }
  });

  useEffect(() => {
    if (sessionStorage.getItem('sistemaPDV-token')) {
      router.push('/home');
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      method="post"
      className="flex flex-col gap-8 w-full max-w-[25.625rem]"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-paragraph3">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full min-h-[2.688rem] rounded-xl border-2 border-lightGrey"
          {...form.register('email')}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-paragraph3">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="w-full min-h-[2.688rem] rounded-xl border-2 border-lightGrey"
          {...form.register('password')}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-[10.313rem] h-[2.875rem] bg-primaryColor rounded-2xl text-white font-bold text-lg"
        >
          ENTRAR
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
