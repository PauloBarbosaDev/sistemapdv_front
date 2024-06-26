interface props {
  color: string;
  witdh: string;
  content: string;
}

const TitleGeneric = ({ color, witdh, content }: props) => {
  return (
    <p
      className="text-title font-bold text-center leading-[3.5rem]"
      style={{
        width: `${witdh}rem`,
        color: `${color}`,
      }}
    >
      {content}
    </p>
  );
};

export default TitleGeneric;
