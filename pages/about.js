import React from "react";
import Link from "next/link";
import aboutStyle from "../styles/about.module.css";

const about = () => {
  return (
    <div className={aboutStyle.about}>
      <h1 className={aboutStyle.about_header}>Portfolio</h1>
      <h4>
        <a href="https://github.com/lauriselvijs">GitHub: lauriselvijs</a>{" "}
      </h4>
      <h4>
        <a href="mailto:lauriselvijsma@gmail.com">
          Email: lauriselvijsma@gmail.com
        </a>
      </h4>
      <h4>Version 1.0.0</h4>
      <Link href="/" passHref>
        Go Back
      </Link>
    </div>
  );
};

export default about;
