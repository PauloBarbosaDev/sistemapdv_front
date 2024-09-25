import HomeCards from './Homecards/HomeCards';

const HomeContent = () => {
  return (
    <>
      <section className="flex p-10 justify-around border border-grayBase gap-10 flex-wrap md:flex-nowrap">
        <HomeCards />
      </section>
    </>
  );
};

export default HomeContent;
