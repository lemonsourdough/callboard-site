import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        Callboard
      </Link>
      <nav className="nav-main">
        <Link href="/product">Product</Link>
        <Link href="/index-page">Live Index</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/case-study">Case Study</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/about">About</Link>
        <Link href="/investors" className="nav-cta">
          Investors →
        </Link>
      </nav>
    </header>
  );
}
