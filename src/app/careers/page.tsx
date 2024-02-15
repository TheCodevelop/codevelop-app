import Button from "@/components/button";
import { ApplicationForm } from "./application-form";
import Image from "next/image";
import PositionCard from "./position-card";

export default function Page() {
  return (
    <div
      className="section"
      style={{
        height: "2000px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "90vh",
          minHeight: "600px",
          overflowX: "hidden",
          overflowY: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/world_map.svg"
          alt="world map"
          fill
          style={{
            opacity: "50%",
            position: "absolute",
            zIndex: -1,
            right: 0,
            top: 15,
            left: 0,
            minWidth: "1000px",
            minHeight: "600px",
          }}
        ></Image>
        <div
          style={{
            fontSize: "4rem",
            paddingBottom: "6rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span>
            From Anywhere <br></br>To Everywhere<br></br> The World is our
            Office
          </span>
          <Button text="See Open Positions" color="white"></Button>
        </div>
      </div>
      <div>Benefits</div>

      <div style={{ width: "75%" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Open Positions
        </div>
        <PositionCard name="Associate UI/UX Designer" id=""></PositionCard>
        <PositionCard name="Software Engineer" id=""></PositionCard>
        <PositionCard name="Android Developer" id=""></PositionCard>
        <PositionCard name="iOS Developer" id=""></PositionCard>
      </div>

      <ApplicationForm></ApplicationForm>
    </div>
  );
}
