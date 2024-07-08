import TitleGeneric from '../../Common/TitleGeneric/TitleGeneric';
import DemoVideo from './DemoVideo/DemoVideo';
import SectionContent from './SectionContent/SectionContent';

const DemoSection = () => {
  return (
    <section className="flex flex-col p-14 bg-darkBlue text-white">
      <div className="flex items-center justify-center">
        <TitleGeneric
          content="Transforme seu Negócio com Nossa Avançada Solução PDV Integrada"
          color="var(--white-color)"
        />
      </div>
      <div className="flex justify-around items-center pt-[6.25rem] flex-wrap-reverse gap-9">
        <DemoVideo />
        <SectionContent />
      </div>
    </section>
  );
};

export default DemoSection;
