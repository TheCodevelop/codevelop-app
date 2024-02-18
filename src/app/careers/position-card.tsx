import Button from "@/components/button";

interface PositionCardProps {
  name: string;
  id: string;
}
const PositionCard: React.FC<PositionCardProps> = ({ name, id }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid white",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>{name}</p>
      <Button
        text="View Role"
        color="white"
        style={{ paddingTop: "0px", paddingBottom: "0px", fontSize: "1rem" }}
        href={`/careers/job/${id}`}
      ></Button>
    </div>
  );
};

export default PositionCard;
