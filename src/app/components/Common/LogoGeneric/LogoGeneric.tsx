import Image from 'next/image';
import Link from 'next/link';

const LogoGeneric = () => {
  return (
    <>
      <Link href={'/'}>
        <Image src={'logo.svg'} alt={'logo'} width={197} height={42}></Image>
      </Link>
    </>
  );
};

export default LogoGeneric;
