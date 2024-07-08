import CardGeneric from '../../../Common/CardGeneric/CardGeneric';

const HelpCards = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-14">
      <CardGeneric
        imageLink="/homeNoAuth/icons8-marcador.svg"
        imageAlt="icone-marcador"
        title="LOCALIZAÇÃO"
        description="Rua exemplo no site n:400 Alagoas"
        width={27.75}
        height={15.125}
        imageClasses="p-t[1.875rem] pb-8"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-paragraph2 text-darkBlue"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-telefone.svg"
        imageAlt="icone-telefone"
        title="TELEFONE"
        description="Whatsapp: (82)99402-1172"
        width={27.75}
        height={15.125}
        imageClasses="p-t[2.313rem] pb-[1.375rem]"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-paragraph2 text-darkBlue"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-perguntas-frequentes.svg"
        imageAlt="icone-faq"
        title="FAQ"
        description={
          <span>
            Clique <span className="text-primaryColor">aqui</span> para acessar
            nosso faq
          </span>
        }
        width={27.75}
        height={15.125}
        imageClasses="p-t[2.125rem] pb-[1.063rem]"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-paragraph2 text-darkBlue"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-nova-mensagem.svg"
        imageAlt="icone-email"
        title="EMAIL"
        description="pauloabarbosa.dev@gmail.com"
        width={27.75}
        height={15.125}
        imageClasses="p-t[2.125rem] pb-[1.375rem]"
        titleClasses="text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-paragraph2 text-darkBlue"
      />
    </div>
  );
};

export default HelpCards;
