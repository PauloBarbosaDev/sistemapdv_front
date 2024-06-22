import ButtomGeneric from '@/app/components/Common/ButtonGeneric/ButtonGeneric';
import { FiArrowRight } from 'react-icons/fi';

const SectionContent = () => {
  return (
    <section>
      <div className="flex flex-col p-4 gap-9">
        <p className="text-title w-[39rem] text-left font-bold text-darkBlue leading-[3.563rem]">
          Potencialize sua experiência de compra com nosso novo{' '}
          <span className="text-primaryColor">sistema PDV integrado</span>!
        </p>
        <p className="text-paragraph1 w-[41.208rem] text-darkBlue">
          Simplifique suas operações de checkout, controle seu estoque em tempo
          real e impulsione o crescimento do seu negócio com nosso sistema PDV
          intuitivo e confiável.
        </p>
      </div>
      <div className="flex gap-10">
        <ButtomGeneric
          target="/register"
          content="Teste grátis"
          width={12.313}
          height={3.688}
          color="var(--white-color)"
          bgColor="var(--primary-color)"
          ftSize={1.25}
        />

        <ButtomGeneric
          target="/register"
          content="Saiba mais"
          width={12.813}
          height={3.688}
          color="var(--dark-blue)"
          bgColor="var(--light-base)"
          bdColor="var(--primary-color)"
          ftSize={1.25}
          iconPosition="after"
          icon={FiArrowRight}
        />
      </div>
    </section>
  );
};

export default SectionContent;
