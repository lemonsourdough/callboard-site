import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Callboard</div>
            <p className="footer-tagline">
              모든 예술의 시작은 콜(Call)에서.
              <br />
              뉴미디어 예술의 데이터 인텔리전스 허브.
            </p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/index-page">Live Index</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/vs">vs. Others</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Insights</h4>
            <ul>
              <li><Link href="/reports">Reports</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/case-study">Case Study</Link></li>
              <li><Link href="/press">Press</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/investors">Investors</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li>
                <a href="mailto:ceo@callboard.kr">ceo@callboard.kr</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 주식회사 콜보드 · Callboard Inc.</span>
          <span>서울시 중구 필동2가 82-1 · START UP TOWN 1 B111</span>
        </div>
      </div>
    </footer>
  );
}
