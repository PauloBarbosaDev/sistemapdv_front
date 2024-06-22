import Image from 'next/image';

const PresentationImage = () => {
  return (
    <section>
      <Image
        src={'homeNoAuth/imgPresentation.svg'}
        alt={'Imagem de apresentação'}
        width={493.18}
        height={486}
      ></Image>
    </section>
  );
};

export default PresentationImage;
