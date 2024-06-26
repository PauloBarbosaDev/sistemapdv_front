import HelpCards from './HelpCards/HelpCards';
import HelpTitle from './HelpTitle/HelpTitle';

const HelpSection = () => {
  return (
    <section className="flex flex-col p-[12.5rem] items-center justify-center gap-28">
      <HelpTitle />
      <HelpCards />
    </section>
  );
};

export default HelpSection;
