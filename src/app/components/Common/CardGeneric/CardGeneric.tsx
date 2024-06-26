import Image from 'next/image';

interface props {
  imageLink: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  width: number;
  height: number;
  imageClasses: string;
  titleClasses: string;
  descriptionClasses: string;
}

const CardGeneric = ({
  imageLink,
  imageAlt,
  title,
  description,
  width,
  height,
  imageClasses,
  titleClasses,
  descriptionClasses,
}: props) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-lightBase shadow-custom"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
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
