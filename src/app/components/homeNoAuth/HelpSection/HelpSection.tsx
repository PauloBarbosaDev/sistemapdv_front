import HelpCards from './HelpCards/HelpCards';
import HelpTitle from './HelpTitle/HelpTitle';

const HelpSection = () => {
  return (
    <section className="flex flex-col p-14 md:p-44 lg:p-52 items-center justify-center gap-28">
      <HelpTitle />
      <HelpCards />
    </section>
  );
};

export default HelpSection;
