import React from "react";
import styles from "../App.css";

const CustomButton = ({
  children,
  onClick,
  btnColor = "#000",
  labelColor,
  disabled,
  type,
  style,
  ...props
}) => {
  return <button className={styles.btn}>{children || "label"}</button>;
};

export default CustomButton;
