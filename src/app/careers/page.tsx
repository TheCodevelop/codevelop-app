import { ApplicationForm } from "./application-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="section" style={{ height: "2000px", paddingTop: "3rem" }}>
      <div style={{ position: "relative", height: "90%", overflowX: "hidden" }}>
        <Image
          src="/world_map.svg"
          alt="world map"
          height={300}
          width={300}
          style={{
            opacity: "50%",
            position: "absolute",
            zIndex: -1,
            right: 0,
            top: 0,
            left: 0,
            minWidth: "1000px",
            height: "auto",
          }}
        ></Image>
        <div
          style={{
            fontSize: "4rem",
            // borderBottom: "0.5px solid white",
            // maxWidth: "300px",
          }}
        >
          From Anywhere <br></br>to<br></br> Everywhere<br></br> the World is
          our Office
        </div>
      </div>

      <div style={{ height: "100px" }}></div>
      {/* <ApplicationForm></ApplicationForm> */}
    </div>
  );
}
