import { ApplicationForm } from "./application-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="section" style={{ height: "2000px", paddingTop: "3rem" }}>
      <div style={{ position: "relative", height: "90%", overflowX: "hidden" }}>
        <Image
          src="/world_map.svg"
          alt="world map"
          width="1000"
          height="1000"
          style={{
            opacity: "50%",
            position: "absolute",
            zIndex: -1,
            right: 0,
            top: 0,
            left: 0,
            minWidth: "1000px",
          }}
        ></Image>
        <div
          style={{
            fontSize: "4rem",
            // borderBottom: "0.5px solid white",
            // maxWidth: "300px",
          }}
        >
          Design, <br></br>Develop,<br></br> Deploy,<br></br> the World is your
          Office
        </div>
      </div>

      <div style={{ height: "100px" }}></div>
      {/* <ApplicationForm></ApplicationForm> */}
    </div>
  );
}
