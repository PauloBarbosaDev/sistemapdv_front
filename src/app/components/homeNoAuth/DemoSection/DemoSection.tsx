import DemoSectionTitle from './DemoSectionTitle/DemoSectionTitle';
import DemoVideo from './DemoVideo/DemoVideo';
import SectionContent from './SectionContent/SectionContent';

const DemoSection = () => {
  return (
    <section className="flex flex-col p-16 bg-darkBlue text-white">
      <div className="flex items-center justify-center">
        <DemoSectionTitle />
      </div>
      <div className="flex justify-around items-center pt-[6.25rem]">
        <DemoVideo />
        <SectionContent />
      </div>
    </section>
  );
};

export default DemoSection;
