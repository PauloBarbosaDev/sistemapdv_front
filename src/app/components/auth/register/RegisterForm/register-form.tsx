'use client';

import { useToast } from '@/app/components/ui/use-toast';
import authService from '@/app/services/authService';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { registerStatusMessages } from '@/constant/data';

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm();
  const { toast } = useToast();

  const handleSubmit = form.handleSubmit(async data => {
    const { status } = await authService.register({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (status !== undefined) {
      const message =
        registerStatusMessages[status as keyof typeof registerStatusMessages];

      if (message) {
        toast({
          title: message.title,
          description: message.description,
          variant: message.variant,
          duration: message.duration,
          className: message.className,
        });

        if (status === 201) {
          router.push('/login');
        }
      }
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
        <label htmlFor="name" className="text-paragraph3">
          Nome
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full min-h-[2.688rem] rounded-xl border-2 border-lightGrey"
          {...form.register('name')}
        />
      </div>

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
          CADASTRAR
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
