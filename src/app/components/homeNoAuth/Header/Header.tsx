import LogoGeneric from '../../Common/LogoGeneric/LogoGeneric';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <>
      <header className="bg-lightBase flex items-center justify-between px-24 min-h-20 shadow-custom">
        <LogoGeneric />
        <Menu />
      </header>
    </>
  );
};

export default Header;
