import Menu from './Menu/Menu';
import Profile from './Profile/Profile';

const Header = () => {
  return (
    <>
      <header className="bg-white flex items-center justify-center md:justify-between p-4 sm:px-8 min-h-20 shadow-custom sticky top-0 z-20">
        <Menu />
        <Profile />
      </header>
    </>
  );
};

export default Header;
