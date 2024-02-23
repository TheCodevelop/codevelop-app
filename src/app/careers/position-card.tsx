import ButtonLink from "@/components/button-link";
import { variables } from "../variables";

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
        borderTop: `1px solid ${variables.secondaryColor}`,
        padding: "20px",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>{name}</p>
      <ButtonLink
        text="View Role"
        color="white"
        style={{ paddingTop: "0px", paddingBottom: "0px", fontSize: "1rem" }}
        href={`/careers/job/${id}`}
      ></ButtonLink>
    </div>
  );
};

export default PositionCard;
