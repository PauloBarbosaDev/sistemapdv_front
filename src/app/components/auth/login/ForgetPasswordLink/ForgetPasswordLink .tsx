import Link from 'next/link';

const ForgetPasswordLink = () => {
  return (
    <Link href={'/recovery-password'}>
      <p className="italic font-extralight text-lg text-center hover:underline">
        Esqueci minha senha
      </p>
    </Link>
  );
};

export default ForgetPasswordLink;
