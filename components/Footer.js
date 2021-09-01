import Link from "next/link";
import footerStyle from "../components/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <hr />
      <p className={footerStyle.copyright_year}>Copyright &copy; 2021</p>
    </footer>
  );
};

export default Footer;
