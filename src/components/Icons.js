import React from "react";
import cx from "classnames";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./Icons.module.scss";

export const Icons = ({ setActiveIndex, maxLength }) => (
  <>
    <FiChevronLeft
      className={cx(styles.Icon, styles.Left)}
      onClick={() =>
        setActiveIndex((prevIndex) => {
          if (prevIndex === 0) return maxLength;
          return prevIndex - 1;
        })
      }
    />
    <FiChevronRight
      className={cx(styles.Icon, styles.Right)}
      onClick={() =>
        setActiveIndex((prevIndex) => {
          if (prevIndex === maxLength) return 0;
          return prevIndex + 1;
        })
      }
    />
  </>
);