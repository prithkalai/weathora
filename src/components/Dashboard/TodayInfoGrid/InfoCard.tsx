interface Props {
  title: string;
}

const InfoCard = ({ title }: Props) => {
  return <div className="h-44 rounded-2xl bg-white">{title}</div>;
};

export default InfoCard;
