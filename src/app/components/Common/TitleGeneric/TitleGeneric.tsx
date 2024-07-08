interface props {
  color: string;
  content: string;
}

const TitleGeneric = ({ color, content }: props) => {
  return (
    <p
      className="text-4xl max-w-sm sm:text-5xl sm:max-w-4xl text-center font-bold text-darkBlue leading-[2.4rem] sm:leading-[3.563rem]"
      style={{
        color: `${color}`,
      }}
    >
      {content}
    </p>
  );
};

export default TitleGeneric;
