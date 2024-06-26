import Image from 'next/image';

const FooterIcons = () => {
  return (
    <div className="flex gap-[1.875rem]">
      <Image
        src="/homeNoAuth/Footer/instagram.svg"
        alt="icon-instagram"
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <Image
        src="/homeNoAuth/Footer/linkedin.svg"
        alt="icon-linkedin"
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <Image
        src="/homeNoAuth/Footer/youtube.svg"
        alt="icon-youtube"
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <Image
        src="/homeNoAuth/Footer/twitter.svg"
        alt="icon-twitter"
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <Image
        src="/homeNoAuth/Footer/facebook.svg"
        alt="icon-facebook"
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default FooterIcons;
