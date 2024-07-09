import Image from 'next/image';

interface props {
  imageLink: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  imageClasses: string;
  titleClasses: string;
  descriptionClasses: string;
  containerClasses?: string;
}

const CardGeneric = ({
  imageLink,
  imageAlt,
  title,
  description,
  imageClasses,
  titleClasses,
  descriptionClasses,
  containerClasses = '',
}: props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-lightBase shadow-custom transform transition-transform duration-300 ease-in-out hover:-translate-y-2 ${containerClasses}`}
    >
      <Image
        src={imageLink}
        alt={imageAlt}
        width={87.15}
        height={80}
        className={`${imageClasses}`}
      />
      <p className={`${titleClasses}`}>{title}</p>
      <p className={`${descriptionClasses}`}>{description}</p>
    </div>
  );
};

export default CardGeneric;
