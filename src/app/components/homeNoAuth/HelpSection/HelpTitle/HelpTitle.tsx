import HelpDescription from './HelpDescription/HelpDescription';

const HelpTitle = () => {
  return (
    <div className="flex flex-col gap-9 text-center leading-7 text-paragraph2">
      <p className="text-title font-bold text-darkBlue ">Precisa de ajuda?</p>
      <HelpDescription />
    </div>
  );
};

export default HelpTitle;
