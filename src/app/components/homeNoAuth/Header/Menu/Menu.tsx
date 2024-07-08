import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import ButtomGeneric from '@/app/components/Common/ButtonGeneric/ButtonGeneric';

const Menu = () => {
  return (
    <nav className="gap-10 items-center hidden md:flex text-base">
      <Link href="/" className={'text-darkBlue font-bold hover:animate-pulse'}>
        Início
      </Link>
      <Link
        href="/about"
        className={' text-darkBlue font-bold hover:animate-pulse'}
      >
        Sobre
      </Link>

      <ButtomGeneric
        target="/login"
        content="Acessar"
        color="var(--dark-blue)"
        bgColor="var(--light-base)"
        bdColor="var(--primary-color)"
        icon={FiUser}
      />

      <ButtomGeneric
        target="/register"
        content="Teste grátis"
        color="var(--white-color)"
        bgColor="var(--primary-color)"
      />
    </nav>
  );
};

export default Menu;
