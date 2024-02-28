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
        padding: "1.25rem",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>{name}</p>
      <ButtonLink
        text="View Role"
        color="white"
        style={{ paddingTop: "0rem", paddingBottom: "0rem", fontSize: "1rem" }}
        href={`/careers/job/${id}`}
      ></ButtonLink>
    </div>
  );
};

export default PositionCard;
