import ButtomGeneric from '@/app/components/Common/ButtonGeneric/ButtonGeneric';

const SectionContent = () => {
  return (
    <div>
      <div className="flex flex-col p-4 gap-9">
        <p className="text-title2 w-[40.688rem] text-left font-bold leading-[2.925rem]">
          Assista ao vídeo e descubra como nosso novo Sistema PDV aprimora sua
          experiência de compra!
        </p>
        <p className="text-paragraph2  w-[40.625rem] leading-7">
          Descubra nosso sistema PDV em ação! Assista a uma demonstração
          envolvente que destaca os recursos essenciais para impulsionar seu
          negócio. Veja como nossa solução simplifica suas operações de vendas.
        </p>
      </div>
      <div className="">
        <ButtomGeneric
          target="/login"
          content="TESTE GRÁTIS"
          width={11.688}
          height={4.063}
          color="var(--dark-blue)"
          bgColor="var(--light-base)"
          bdColor="var(--primary-color)"
          ftSize={1.25}
        />
      </div>
    </div>
  );
};

export default SectionContent;
