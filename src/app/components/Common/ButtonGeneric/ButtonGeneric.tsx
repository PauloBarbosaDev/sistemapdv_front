import Link from 'next/link';
import { IconType } from 'react-icons';

interface props {
  width: number;
  height: number;
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
  width,
  height,
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
      className="text-paragraph3 font-bold border-2 rounded-full flex items-center justify-center hover:animate-pulse"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        borderColor: `${bdColor}`,
        fontSize: `${ftSize || 1}rem`,
      }}
    >
      {iconPosition === 'before' && Icon && <Icon className="mr-2" />}
      {content}
      {iconPosition === 'after' && Icon && <Icon className="ml-2" />}
    </Link>
  );
};

export default ButtomGeneric;
