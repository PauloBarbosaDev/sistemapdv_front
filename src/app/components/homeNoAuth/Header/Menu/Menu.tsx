import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import styles from './menu.module.scss';
import ButtomGeneric from '@/app/components/Common/ButtonGeneric/ButtonGeneric';

const Menu = () => {
  return (
    <nav className="menu flex gap-10 items-center">
      <Link href="/" className={styles.link}>
        Início
      </Link>
      <Link href="/about" className={styles.link}>
        Sobre
      </Link>

      <ButtomGeneric
        target="/login"
        content="Acessar"
        width={8.75}
        height={2.875}
        color="var(--dark-blue)"
        bgColor="var(--light-base)"
        bdColor="var(--primary-color)"
        icon={FiUser}
      />

      <ButtomGeneric
        target="/register"
        content="Teste grátis"
        width={8.75}
        height={2.875}
        color="var(--white-color)"
        bgColor="var(--primary-color)"
      />
    </nav>
  );
};

export default Menu;
