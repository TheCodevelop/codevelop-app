"use client";
import styles from "./contact-us.module.scss";
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange = () => {},
  type = "text",
  label = "Default",
}) => {
  return (
    <div className={styles.input_container}>
      <input id={`id-${label}`} type={type} value={value} onChange={onChange} />
      <label className={value && styles.filled} htmlFor={`id-${label}`}>
        {label}
      </label>
    </div>
  );
};
