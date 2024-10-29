import LogoGeneric from '../../Common/LogoGeneric/LogoGeneric';
import { SheetGeneric } from '../../Common/SheetGeneric/SheetGenetic';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <>
      <header className="bg-lightBase flex items-center justify-center md:justify-between p-4 min-h-20 shadow-custom sticky top-0 z-20">
        <div className="px-3 md:hidden">
          <SheetGeneric />
        </div>
        <LogoGeneric />
        <Menu />
      </header>
    </>
  );
};

export default Header;
