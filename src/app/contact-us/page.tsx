import styles from "./contact-us.module.scss";
import ContactForm from "./contact-form";

export default function Page() {
  return (
    <div className={`${styles.section}  pt-24 pb-48`}>
      <div style={{ fontWeight: "400", fontSize: "64px" }}>
        Lets
        <br></br>
        Codevelop
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
