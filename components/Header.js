import Link from "next/link";
import navbarStyle from "../styles/navbar.module.css";

const Header = () => {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.navbar_container}>
        <Link href="/" passHref>
          Portfolio
        </Link>
        <Link href="/about" passHref>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
