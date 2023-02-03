import { FC } from "react";
import styles from "../styles/AnimatedSuccesIcon.module.scss";

export const AnimatedErrorIcon: FC = () => {
  return (
    <div className={styles.animationctn}>
      <div
        className={`${styles.icon} ${styles.iconordersuccess} ${styles.svg}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
          <g fill="none" stroke="#F44812" stroke-width="2">
            <circle
              cx="77"
              cy="77"
              r="72"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            ></circle>
            <circle
              id="colored"
              fill="#F44812"
              cx="77"
              cy="77"
              r="72"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            ></circle>
            <polyline
              className="st0"
              stroke="#fff"
              stroke-width="10"
              points="43.5,77.8  112.2,77.8 "
              style={{
                strokeDasharray: "100px, 100px",
                strokeDashoffset: "200px",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedErrorIcon;
