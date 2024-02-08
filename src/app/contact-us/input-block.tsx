"use client";
import styles from "./contact-us.module.scss";
import React, { ChangeEvent } from "react";

interface InputBlockProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
}

export const InputBlock: React.FC<InputBlockProps> = ({
  value = "",
  onChange = () => {},
  label = "Default",
}) => {
  return (
    <div className={styles.input_container}>
      <textarea rows={3} id={`id-${label}`} value={value} onChange={onChange} />
      <label className={value && styles.filled} htmlFor={`id-${label}`}>
        {label}
      </label>
    </div>
  );
};
