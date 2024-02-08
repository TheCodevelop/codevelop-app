import styles from "./contact-us.module.scss";
import ContactForm from "./contact-form";

export default function Page() {
  return (
    <div
      style={{ height: "1000px" }}
      className={`${styles.section} grid grid-cols-2 grid-rows-1 pt-24 pb-48`}
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
