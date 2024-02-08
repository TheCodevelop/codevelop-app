"use client";
import { useState } from "react";
import { InputField } from "./input-field";
import { InputBlock } from "./input-block";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        height: "100%",
        borderRadius: "36px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        label="Name"
      ></InputField>
      <InputField
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
        label="Company"
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
      <InputBlock
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Message"
      ></InputBlock>
    </div>
  );
}
