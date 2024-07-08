import Link from 'next/link';
import { IconType } from 'react-icons';

interface props {
  color: string;
  bgColor: string;
  bdColor?: string;
  icon?: IconType;
  iconPosition?: 'before' | 'after';
  content: string;
  target: string;
  ftSize?: number;
}

const ButtomGeneric = ({
  icon: Icon,
  iconPosition = 'before',
  color,
  bgColor,
  bdColor,
  content,
  target,
  ftSize,
}: props) => {
  return (
    <Link
      href={`${target}`}
      className="font-bold border-2 rounded-full flex items-center justify-center hover:animate-pulse  w-32 h-11 lg:w-36 lg:h-12"
      style={{
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        borderColor: `${bdColor}`,
        fontSize: `${ftSize || 1}rem`,
      }}
    >
      {iconPosition === 'before' && Icon && <Icon className="mr-1" />}
      {content}
      {iconPosition === 'after' && Icon && <Icon className="ml-1" />}
    </Link>
  );
};

export default ButtomGeneric;
