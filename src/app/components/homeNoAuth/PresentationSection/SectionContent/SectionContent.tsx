import ButtomGeneric from '@/app/components/Common/ButtonGeneric/ButtonGeneric';
import { FiArrowRight } from 'react-icons/fi';

const SectionContent = () => {
  return (
    <div>
      <div className="flex flex-col p-2 md:p-4 gap-8 md:gap-6 lg:gap-9">
        <p className="text-4xl max-w-sm sm:text-5xl sm:max-w-2xl text-left font-bold text-darkBlue leading-[2.4rem] sm:leading-[3.563rem]">
          Potencialize sua experiência de compra com nosso novo{' '}
          <span className="text-primaryColor">sistema PDV integrado</span>!
        </p>
        <p className="text-lg max-w-md sm:text-paragraph2 sm:max-w-2xl text-darkBlue">
          Simplifique suas operações de checkout, controle seu estoque em tempo
          real e impulsione o crescimento do seu negócio com nosso sistema PDV
          intuitivo e confiável.
        </p>
      </div>
      <div className="flex gap-10">
        <ButtomGeneric
          target="/register"
          content="Teste grátis"
          color="var(--white-color)"
          bgColor="var(--primary-color)"
          ftSize={1.125}
        />

        <ButtomGeneric
          target="/register"
          content="Saiba mais"
          color="var(--dark-blue)"
          bgColor="var(--light-base)"
          bdColor="var(--primary-color)"
          ftSize={1.125}
          iconPosition="after"
          icon={FiArrowRight}
        />
      </div>
    </div>
  );
};

export default SectionContent;
