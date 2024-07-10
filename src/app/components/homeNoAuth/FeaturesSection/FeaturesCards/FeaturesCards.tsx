import CardGeneric from '../../../Common/CardGeneric/CardGeneric';

const cardData = [
  {
    imageLink: '/homeNoAuth/icons8-em-alta.svg',
    imageAlt: 'ícone de estoque em alta',
    title: 'ESTOQUE',
    description:
      'Gerencie o estoque em tempo real para manter a loja sempre abastecida, organizada e eficiente.',
  },
  {
    imageLink: '/homeNoAuth/icons8-passageiros-com-bagagem.svg',
    imageAlt: 'ícone de checkout',
    title: 'CHECKOUT',
    description:
      'Facilite o checkout para uma experiência de compra rápida, intuitiva e convenientemente eficaz.',
  },
  {
    imageLink: '/homeNoAuth/icons8-seguranca-verificada.svg',
    imageAlt: 'ícone de segurança verificada',
    title: 'SEGURANÇA',
    description:
      'Proteja transações com segurança avançada de pagamento e confiabilidade excepcional.',
  },
  {
    imageLink: '/homeNoAuth/icons8-assistente.svg',
    imageAlt: 'ícone de suporte',
    title: 'SUPORTE',
    description:
      'Oferecemos suporte e atendimento para garantir sua tranquilidade e satisfação contínua.',
  },
];

const commonClasses = {
  imageClasses: 'p-t[3.25rem] pb-10',
  titleClasses:
    'text-paragraph2 sm:text-paragraph1 font-bold text-darkBlue pb-5',
  descriptionClasses:
    'text-base sm:text-paragraph2 text-darkBlue w-[16.272rem] lg:w-[13.125rem] xl:w-[16.272rem]',
  containerClasses: 'w-full sm:w-80 lg:w-56 xl:w-80 h-[25.5rem]',
};

const FeaturesCards = () => {
  return (
    <div className="text-center flex items-center justify-center gap-11 flex-wrap lg:flex-nowrap lg:gap-8 xl:gap-11">
      {cardData.map((card, index) => (
        <CardGeneric
          key={index}
          imageLink={card.imageLink}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
          {...commonClasses}
        />
      ))}
    </div>
  );
};

export default FeaturesCards;
