import Image from 'next/image';

interface props {
  imageLink: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CardGeneric = ({ imageLink, imageAlt, title, description }: props) => {
  return (
    <div className="flex flex-col items-center justify-center w-[19.813rem] h-[25.5rem] bg-lightBase shadow-custom ">
      <Image
        src={imageLink}
        alt={imageAlt}
        width={87.15}
        height={80}
        className="p-t[3.25rem] pb-10 "
      />
      <p className="text-subTitle font-bold text-darkBlue pb-5">{title}</p>
      <p className="text-paragraph2 text-darkBlue w-[16.272rem]">
        {description}
      </p>
    </div>
  );
};

export default CardGeneric;
