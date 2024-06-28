import LogoGeneric from '@/app/components/Common/LogoGeneric/LogoGeneric';
import ForgetPasswordLink from '@/app/components/auth/login/ForgetPasswordLink/ForgetPasswordLink ';
import LoginForm from '@/app/components/auth/login/LoginForm/login-form';

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[32.75rem] min-h-[28.688rem] flex flex-col items-center justify-center shadow-custom gap-10 p-6 bg-white rounded-lg">
        <LogoGeneric />
        <LoginForm />
        <ForgetPasswordLink />
      </div>
    </main>
  );
}
