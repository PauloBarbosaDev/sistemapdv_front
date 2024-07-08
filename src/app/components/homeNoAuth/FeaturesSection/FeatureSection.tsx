import TitleGeneric from '../../Common/TitleGeneric/TitleGeneric';
import FeaturesCards from './FeaturesCards/FeaturesCards';

const FeatureSection = () => {
  return (
    <>
      <section className="flex flex-col p-14 md:p-44 lg:p-52 items-center justify-center gap-28">
        <TitleGeneric
          content="Descubra como o PSistemaPDV pode impulsionar o seu negócio!"
          color="var(--dark-blue)"
        />
        <FeaturesCards />
      </section>
    </>
  );
};

export default FeatureSection;
