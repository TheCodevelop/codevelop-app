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
      <div>
        <p style={{ fontSize: "2rem", fontWeight: "600" }}>{title}</p>
        <p style={{ fontSize: "1.5rem", fontWeight: "300" }}>{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
