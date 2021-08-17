import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h2>
          <Link href="/" passHref>
            Portfolio
          </Link>
        </h2>
      </div>
    </header>
  );
};

export default Header;
