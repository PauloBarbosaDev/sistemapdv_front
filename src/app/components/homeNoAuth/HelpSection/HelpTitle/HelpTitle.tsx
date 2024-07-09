import HelpDescription from './HelpDescription/HelpDescription';

const HelpTitle = () => {
  return (
    <div className="flex flex-col gap-9 text-center">
      <p className="text-4xl max-w-sm sm:text-5xl sm:max-w-4xl  font-bold text-darkBlue ">
        Precisa de ajuda?
      </p>
      <HelpDescription />
    </div>
  );
};

export default HelpTitle;
