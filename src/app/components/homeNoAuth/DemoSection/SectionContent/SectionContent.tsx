import ButtomGeneric from '@/app/components/Common/ButtonGeneric/ButtonGeneric';

const SectionContent = () => {
  return (
    <div>
      <div className="flex flex-col p-4 gap-9">
        <p className="hidden sm:block text-3xl max-w-xs sm:text-4xl sm:max-w-2xl text-center sm:text-left font-bold sm:leading-[3.563rem] md:leading-tight ">
          Assista ao vídeo e descubra como nosso novo Sistema PDV aprimora sua
          experiência de compra!
        </p>
        <p className="text-xl max-w-[40.625rem] leading-7 text-center sm:text-left">
          Descubra nosso sistema PDV em ação! Assista a uma demonstração
          envolvente que destaca os recursos essenciais para impulsionar seu
          negócio. Veja como nossa solução simplifica suas operações de vendas.
        </p>
      </div>
      <div className="hidden sm:block">
        <ButtomGeneric
          target="/login"
          content="TESTE GRÁTIS"
          color="var(--dark-blue)"
          bgColor="var(--light-base)"
          bdColor="var(--primary-color)"
          ftSize={1.125}
        />
      </div>
    </div>
  );
};

export default SectionContent;
