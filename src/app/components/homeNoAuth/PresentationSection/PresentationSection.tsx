import Image from 'next/image';
import PresentationImage from './PresentationImage/PresentationImage';
import SectionContent from './SectionContent/SectionContent';

const PresentationSection = () => {
  return (
    <>
      <section className="flex justify-around items-center">
        <SectionContent />
        <PresentationImage />
      </section>
      <div className="flex justify-center items-center">
        <Image
          className="hover:animate-pulse"
          src={'/homeNoAuth/iconArrowDown.svg'}
          alt={'arrowDown'}
          width={46.66}
          height={25.08}
        />
      </div>
    </>
  );
};

export default PresentationSection;
