import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className=".flex .flex-column">
        <Link href="/">Hmooe</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
