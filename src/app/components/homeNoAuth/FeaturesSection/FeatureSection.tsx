import TitleGeneric from '../../Common/TitleGeneric/TitleGeneric';
import FeaturesCards from './FeaturesCards/FeaturesCards';

const FeatureSection = () => {
  return (
    <>
      <section className="flex flex-col p-[12.5rem] items-center justify-center gap-28">
        <TitleGeneric
          content="Descubra como o PSistemaPDV pode impulsionar o seu negócio!"
          color="var(--dark-blue)"
          witdh="48.938"
        />
        <FeaturesCards />
      </section>
    </>
  );
};

export default FeatureSection;
