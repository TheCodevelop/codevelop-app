import styles from "./careers.module.scss";

interface BenefitCardProps {
  title: string;
  description: string;
  image: React.ReactNode;
}
const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={styles.container}>
      {image}

      <p style={{ fontSize: "2rem", fontWeight: "600" }}>{title}</p>
      <p style={{ fontSize: "1.25rem", fontWeight: "300" }}>{description}</p>
    </div>
  );
};

export default BenefitCard;
