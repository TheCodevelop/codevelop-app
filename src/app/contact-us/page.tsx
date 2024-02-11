import styles from "./contact-us.module.scss";
import ContactForm from "./contact-form";

export default function Page() {
  return (
    <div
      style={{
        display: "grid",
        gap: "30px 30px",
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
      }}
      className={`${styles.section}  pt-24 pb-48`}
    >
      <div style={{ fontWeight: "400", fontSize: "64px" }}>
        Lets
        <br></br>
        Codevelop
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
