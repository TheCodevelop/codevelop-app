"use client";
import { useState } from "react";
import { InputField } from "@/components/input/input-field";
import Button from "@/components/button";
import { FileInput } from "@/components/input/file-input";

interface ApplicationFormProps {
  style?: React.CSSProperties;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ style }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "36px",
        padding: "36px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        ...style,
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "300",
        }}
      >
        Join Us
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          label="Name"
        ></InputField>
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
        ></InputField>
        <InputField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          label="Phone"
        ></InputField>
        <InputField
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          label="LinkedIn (Optional)"
        ></InputField>
        <InputField
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          label="Website (Optional)"
        ></InputField>
      </div>

      <FileInput
        label="Resume/CV"
        allowedFormats={[".pdf", ".doc", ".docx"]}
      ></FileInput>
      <FileInput
        label="Cover Letter (Optional)"
        allowedFormats={[".pdf", ".doc", ".docx"]}
      ></FileInput>

      <Button text="Submit Application" color="grey" href=""></Button>
    </div>
  );
};
