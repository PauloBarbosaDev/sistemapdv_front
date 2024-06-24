import CardGeneric from '../../Common/CardGeneric/CardGeneric';

const FeatureSection = () => {
  return (
    <>
      <section className="flex flex-col p-[12.5rem] items-center justify-center gap-28">
        <p className="text-title font-bold text-darkBlue w-[48.938rem]">
          Descubra como o PSistemaPDV pode impulsionar o seu negócio!
        </p>
        <div className=" text-center flex items-center justify-center gap-11 ">
          <CardGeneric
            imageLink="/homeNoAuth/icons8-em-alta.svg"
            imageAlt="icone-em-alta"
            title="ESTOQUE"
            description="Gerencie o estoque em tempo real para manter a loja sempre
              abastecida, organizada e eficiente."
          />

          <CardGeneric
            imageLink="/homeNoAuth/icons8-passageiros-com-bagagem.svg"
            imageAlt="icone-passageiros-com-bagagem"
            title="CHECKOUT"
            description="Facilite o checkout para uma experiência de compra rápida,
            intuitiva e convenientemente eficaz."
          />

          <CardGeneric
            imageLink="/homeNoAuth/icons8-seguranca-verificada.svg"
            imageAlt="icone-seguranca-verificada"
            title="SEGURANÇA"
            description="Proteja transações com segurança avançada de pagamento e
            confiabilidade excepcional."
          />

          <CardGeneric
            imageLink="/homeNoAuth/icons8-assistente.svg"
            imageAlt="icone-assistente"
            title="SUPORTE"
            description=" Oferecemos suporte e atendimento para garantir sua tranquilidade e
            satisfação contínua."
          />
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
