import CardGeneric from '../../../Common/CardGeneric/CardGeneric';

const HelpCards = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-14">
      <CardGeneric
        imageLink="/homeNoAuth/icons8-marcador.svg"
        imageAlt="icone-marcador"
        title="LOCALIZAÇÃO"
        description="Rua exemplo no site n:400 Alagoas"
        imageClasses="pt-[1.875rem] pb-8"
        titleClasses="text-paragraph2 sm:text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-base sm:text-paragraph2 text-darkBlue"
        containerClasses="w-full sm:w-[27.75rem] h-[15.125rem]"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-telefone.svg"
        imageAlt="icone-telefone"
        title="TELEFONE"
        description="Whatsapp: (82)99402-1172"
        imageClasses="pt-[2.313rem] pb-[1.375rem]"
        titleClasses="text-paragraph2 sm:text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-base sm:text-paragraph2 text-darkBlue"
        containerClasses="w-full sm:w-[27.75rem] h-[15.125rem]"
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
        imageClasses="pt-[2.125rem] pb-[1.063rem]"
        titleClasses="text-paragraph2 sm:text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-base sm:text-paragraph2 text-darkBlue"
        containerClasses="w-full sm:w-[27.75rem] h-[15.125rem]"
      />

      <CardGeneric
        imageLink="/homeNoAuth/icons8-nova-mensagem.svg"
        imageAlt="icone-email"
        title="EMAIL"
        description="pauloabarbosa.dev@gmail.com"
        imageClasses="pt-[2.125rem] pb-[1.375rem]"
        titleClasses="text-paragraph2 sm:text-paragraph1 font-bold text-darkBlue pb-[0.625rem]"
        descriptionClasses="text-base sm:text-paragraph2 text-darkBlue"
        containerClasses="w-full sm:w-[27.75rem] h-[15.125rem]"
      />
    </div>
  );
};

export default HelpCards;
