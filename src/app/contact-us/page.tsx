import styles from "./contact-us.module.scss";
import { ContactForm } from "./contact-form";

export default function Page() {
  return (
    <div className="section">
      <div className={styles.page_layout}>
        <div style={{ fontWeight: "400", fontSize: "4rem", flex: "1" }}>
          Lets
          <br></br>
          Codevelop
        </div>
        <ContactForm style={{ flex: "1" }}></ContactForm>
      </div>
    </div>
  );
}
