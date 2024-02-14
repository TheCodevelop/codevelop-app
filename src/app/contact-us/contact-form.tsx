"use client";
import { useState } from "react";
import { InputField } from "./input-field";
import { InputBlock } from "./input-block";
import Button from "@/components/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [communicationMethod, setCommunicationMethod] = useState("");

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "36px",
        padding: "36px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 3fr 1fr 2fr 1.5fr",
        rowGap: "20px",
        maxWidth: "500px",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "300",
          gridColumnStart: "1",
          gridColumnEnd: "3",
        }}
      >
        Contact Us
      </h2>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridColumnStart: "1",
          gridColumnEnd: "3",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
      </div>

      <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
        <fieldset>
          <legend>Preferred Communication</legend>
          <input
            type="radio"
            id="email"
            name="communication"
            value="email"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "email"}
            style={{
              marginTop: "20px",
              marginRight: "10px",
              transform: "scale(1.25)",
              accentColor: "black",
            }}
          />
          <label htmlFor="email" style={{ marginRight: "20px" }}>
            Email
          </label>
          <input
            type="radio"
            id="by-phone"
            name="communication"
            value="phone"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "phone"}
            style={{
              marginRight: "10px",
              transform: "scale(1.25)",
              accentColor: "black",
            }}
          />
          <label htmlFor="by-phone">By Phone</label>
        </fieldset>
      </div>

      <InputBlock
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Message"
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "3",
        }}
      ></InputBlock>
      <Button
        style={{ gridColumnStart: "1", gridColumnEnd: "3", marginTop: "auto" }}
        text="Submit"
        color="grey"
        href=""
      ></Button>
    </div>
  );
}
