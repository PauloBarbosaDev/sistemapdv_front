import { LucideMenu } from 'lucide-react';
import LogoGeneric from '../../../Common/LogoGeneric/LogoGeneric';

const Menu = () => {
  return (
    <div className="flex space-x-5 items-center">
      <div className="flex items-center justify-center w-12 h-12 bg-primaryColor rounded-full">
        <LucideMenu className="text-white w-6 h-6" />
      </div>
      <LogoGeneric />
    </div>
  );
};

export default Menu;
