import Link from "next/link";
import Layout from "../components/Layout";

export default function CaseStudy() {
  return (
    <Layout title="Case Study" description="럭키참스 12년의 프로듀싱이 콜보드의 시드 데이터가 되다.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Case Study · Lucky Charms )</p>
          <h1 className="h-hero">12년의 프로듀싱이<br />콜보드의<br />시드 데이터가 되다.</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.7 }}>
            콜보드의 창업자는 럭키참스를 통해 2013년부터 현재까지
            <strong> 30+ 프로젝트, 20,000+ 관객, 50+ 협업 예술인</strong>의 운영 데이터를 축적해왔습니다.
            <br />이 데이터가 콜보드 MVP의 첫 번째 검증 자산입니다.
          </p>
          <div className="btn-group">
            <a href="https://luckycharms-site.vercel.app" target="_blank" rel="noreferrer" className="btn">
              Visit Lucky Charms →
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( By the Numbers · 2013—2026 )</p>
          <h2 className="h-section">12 years.<br />30+ projects.<br />20,000+ audience.</h2>
          <div className="data-grid">
            {[
              { n: "12+", l: "Years Producing" },
              { n: "30+", l: "Projects Delivered" },
              { n: "20,000+", l: "Audience Reached" },
              { n: "3", l: "Cities · Seoul · NYC · LA" },
            ].map((s, i) => (
              <div key={i} className="data-cell">
                <span className="data-num">{s.n}</span>
                <span className="data-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Pipeline */}
      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">( IP Pipeline )</p>
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>3 cultural IPs<br />we own and grow.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }} className="ip-grid">
            {[
              { num: "01", t: "Project DOSAN", k: "Musical · Opera · Symphony · Documentary", d: "도산 안창호 IP의 6년 운영 데이터. Walt Disney Concert Hall (8,000명), 예술의전당 오페라 (전석 매진), Wilshire Ebell Theatre 등.", m: "2024 — ongoing" },
              { num: "02", t: "K-Musical on Broadway", k: "Musical Series", d: "13년간 한국 창작 뮤지컬의 브로드웨이 진출. Sheen Center, Public Theater, 54 Below 등 NYC 핵심 무대.", m: "2013 — ongoing" },
              { num: "03", t: "Focus Art Fair NYC", k: "Curation · Exhibition", d: "Chelsea Pier 12,000명 큐레이션. 글로벌 아트페어 총괄디렉터 경험.", m: "2024" },
            ].map((ip) => (
              <div key={ip.num} style={{ border: "1px solid var(--ink-on-dark-dim)", padding: 32 }}>
                <p className="mono" style={{ color: "var(--red-live)", fontSize: "0.78rem", letterSpacing: "0.14em", marginBottom: 24 }}>[{ip.num}]</p>
                <h3 className="h-card" style={{ color: "var(--ink-on-dark)" }}>{ip.t}</h3>
                <p className="mono" style={{ fontSize: "0.84rem", color: "var(--red-live)", fontStyle: "italic", marginBottom: 16 }}>{ip.k}</p>
                <p style={{ fontSize: "0.9rem", color: "var(--ink-on-dark-dim)", lineHeight: 1.65 }}>{ip.d}</p>
                <p className="mono" style={{ fontSize: "0.74rem", color: "var(--ink-on-dark-dim)", textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: 16, borderTop: "1px solid var(--ink-on-dark-dim)", marginTop: 20 }}>
                  {ip.m}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Why this matters for Callboard )</p>
          <h2 className="h-section">우리는 0에서<br />시작하지 않습니다.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 40 }} className="why-grid">
            <div>
              <p style={{ fontSize: "1.02rem", lineHeight: 1.75 }}>
                대부분의 데이터 플랫폼은 <strong>"빈 데이터베이스"</strong>로 시작합니다.
                사용자가 들어와야 데이터가 쌓이고, 데이터가 쌓여야 사용자가 모입니다 —
                이게 콜드 스타트 문제예요.
              </p>
              <p style={{ fontSize: "1.02rem", lineHeight: 1.75, marginTop: 16 }}>
                콜보드는 다릅니다. 창업자 김규린은 <strong>12년간 실제 프로덕션을 운영하며</strong>
                축적한 운영 데이터·인력 네트워크·산업 인사이트를 직접 보유합니다.
              </p>
              <p style={{ fontSize: "1.02rem", lineHeight: 1.75, marginTop: 16 }}>
                즉, <strong>콜보드는 첫날부터 실데이터로 작동하는 플랫폼</strong>이 될 수 있습니다.
              </p>
            </div>
            <div style={{ background: "var(--bg-card)", padding: 32, border: "1px solid var(--line)" }}>
              <p className="eyebrow">( Seed Dataset from Lucky Charms )</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["30+", "프로젝트 운영 메타데이터"],
                  ["50+", "검증 협업 예술인 프로필"],
                  ["20+", "글로벌 파트너 네트워크"],
                  ["12", "년치 산업 트렌드 인사이트"],
                  ["3", "도시 (서울·NYC·LA) 운영 경험"],
                ].map(([n, t]) => (
                  <li key={n} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16, alignItems: "baseline", paddingBottom: 12, borderBottom: "1px solid var(--line)" }}>
                    <span className="mono" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--red-live)" }}>{n}</span>
                    <span style={{ fontSize: "0.94rem" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark text-center">
        <div className="container">
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>
            Want the full story?
          </h2>
          <p style={{ color: "var(--ink-on-dark-dim)", maxWidth: 540, margin: "0 auto 32px" }}>
            상세 데이터셋과 운영 사례는 Pitch Deck에 포함되어 있습니다.
          </p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link href="/investors" className="btn" style={{ background: "var(--red-live)", borderColor: "var(--red-live)" }}>
              Request Investor Deck →
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.ip-grid),
          :global(.why-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}
