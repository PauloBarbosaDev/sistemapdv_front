import Image from 'next/image';
import PresentationImage from './PresentationImage/PresentationImage';
import SectionContent from './SectionContent/SectionContent';

const PresentationSection = () => {
  return (
    <>
      <section className="flex justify-around items-center p-2">
        <SectionContent />
        <PresentationImage />
      </section>
      <div className="flex justify-center items-center">
        <Image
          className="hover:animate-pulse"
          src={'/homeNoAuth/iconArrowDown.svg'}
          alt={'arrowDown'}
          width={44}
          height={20}
        />
      </div>
    </>
  );
};

export default PresentationSection;
