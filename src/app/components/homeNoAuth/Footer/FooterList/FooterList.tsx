interface props {
  title: string;
  items: string[];
}

const FooterList = ({ title, items }: props) => {
  return (
    <div className="flex flex-col gap-3 ">
      <p className="text-title2 font-bold text-darkBlue">{title}</p>
      <ul className="text-paragraph3 text-darkBlue space-y-2 font-semibold">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
