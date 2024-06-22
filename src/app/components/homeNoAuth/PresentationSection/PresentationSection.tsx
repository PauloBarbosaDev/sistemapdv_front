import Image from 'next/image';
import PresentationImage from './PresentationImage/PresentationImage';
import SectionContent from './SectionContent/SectionContent';

const PresentationSection = () => {
  return (
    <>
      <div className="flex justify-around items-center ">
        <SectionContent />
        <PresentationImage />
      </div>
      <div className="flex justify-center items-center">
        <Image
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
