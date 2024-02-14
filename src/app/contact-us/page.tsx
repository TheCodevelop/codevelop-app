import styles from "./contact-us.module.scss";
import ContactForm from "./contact-form";

export default function Page() {
  return (
    <div className="section">
      <div className={styles.page_layout}>
        <div style={{ fontWeight: "400", fontSize: "64px" }}>
          Lets
          <br></br>
          Codevelop
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
