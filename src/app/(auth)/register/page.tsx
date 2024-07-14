import RegisterForm from '@/app/components/auth/register/RegisterForm/register-form';

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[32.75rem] min-h-[28.688rem] flex flex-col items-center justify-center shadow-custom gap-10 p-6 bg-white rounded-lg">
        <p className="text-darkBase text-4xl">Cadastrar-se</p>
        <RegisterForm />
      </div>
    </main>
  );
}
