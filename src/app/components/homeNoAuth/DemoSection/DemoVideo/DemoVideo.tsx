import Image from 'next/image';

const DemoVideo = () => {
  return (
    <div>
      <Image
        src={'homeNoAuth/demoVideo.svg'}
        alt={'Video de apresentação'}
        width={506}
        height={491}
      ></Image>
    </div>
  );
};

export default DemoVideo;
