import PresentationImage from './PresentationImage/PresentationImage';
import SectionContent from './SectionContent/SectionContent';

const PresentationSection = () => {
  return (
    <div className="flex justify-around items-center ">
      <SectionContent />
      <PresentationImage />
    </div>
  );
};

export default PresentationSection;
