import Image from "next/image";
// This is the home page
export default function Home() {
  return (
    <main className="gradient" style={{ height: "53vw" }}>
      <p
        style={{
          color: "white",
          position: "absolute",
          top: "150px",
          left: "150px",
          fontSize: "30px",
        }}
      >
        {" "}
        CoDevelop
      </p>
    </main>
  );
}
