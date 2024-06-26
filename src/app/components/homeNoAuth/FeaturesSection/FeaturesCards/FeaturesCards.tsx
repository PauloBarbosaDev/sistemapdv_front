import CardGeneric from '../../../Common/CardGeneric/CardGeneric';

const FeaturesCards = () => {
  return (
    <div className=" text-center flex items-center justify-center gap-11 ">
      <CardGeneric
        imageLink="/homeNoAuth/icons8-em-alta.svg"
        imageAlt="icone-em-alta"
        title="ESTOQUE"
        description="Gerencie o estoque em tempo real para manter a loja sempre
              abastecida, organizada e eficiente."
        width={19.813}
        height={25.5}
        imageClasses="p-t[3.25rem] pb-10"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-5"
        descriptionClasses="text-paragraph2 text-darkBlue w-[16.272rem]"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-passageiros-com-bagagem.svg"
        imageAlt="icone-passageiros-com-bagagem"
        title="CHECKOUT"
        description="Facilite o checkout para uma experiência de compra rápida,
            intuitiva e convenientemente eficaz."
        width={19.813}
        height={25.5}
        imageClasses="p-t[3.25rem] pb-10"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-5"
        descriptionClasses="text-paragraph2 text-darkBlue w-[16.272rem]"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-seguranca-verificada.svg"
        imageAlt="icone-seguranca-verificada"
        title="SEGURANÇA"
        description="Proteja transações com segurança avançada de pagamento e
            confiabilidade excepcional."
        width={19.813}
        height={25.5}
        imageClasses="p-t[3.25rem] pb-10"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-5"
        descriptionClasses="text-paragraph2 text-darkBlue w-[16.272rem]"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-assistente.svg"
        imageAlt="icone-assistente"
        title="SUPORTE"
        description=" Oferecemos suporte e atendimento para garantir sua tranquilidade e
            satisfação contínua."
        width={19.813}
        height={25.5}
        imageClasses="p-t[3.25rem] pb-10"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-5"
        descriptionClasses="text-paragraph2 text-darkBlue w-[16.272rem]"
      />
    </div>
  );
};

export default FeaturesCards;
