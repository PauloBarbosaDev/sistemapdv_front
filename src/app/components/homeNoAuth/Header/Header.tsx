import LogoGeneric from '../../Common/LogoGeneric/LogoGeneric';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <>
      <header className="bg-lightBase flex items-center justify-center md:justify-between px-8 min-h-20 shadow-custom sticky top-0 z-20">
        <LogoGeneric />
        <Menu />
      </header>
    </>
  );
};

export default Header;
