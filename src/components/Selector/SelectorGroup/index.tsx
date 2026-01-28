import React from "react";
import styles from "./SelectorGroup.module.css";

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectorGroup = ({ icon, children, ...rest }: SelectorGroupProps) => {
  return (
    <div className={styles.container}>
      {icon && <span className={styles.icone}>{icon}</span>}
      <select className={styles.selector} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectorGroup;
