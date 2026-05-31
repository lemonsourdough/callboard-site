import Link from "next/link";
import Layout from "../components/Layout";

export default function Investors() {
  return (
    <Layout title="Investors" description="콜보드 투자 안내. Pitch Deck, 미팅 요청, 핵심 지표.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( For Investors · Seed Round Open )</p>
          <h1 className="h-hero">
            One platform.<br />
            One pipeline.<br />
            <span style={{ color: "var(--red-live)" }}>One callboard.</span>
          </h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.7 }}>
            한국 콘텐츠 산업 ₩160조의 데이터 인프라 공백을 채우는 첫 번째 플랫폼.
            <br />지금 시드 라운드를 진행 중입니다.
          </p>
          <div className="btn-group">
            <a href="mailto:ceo@callboard.kr?subject=Callboard%20Investor%20Inquiry" className="btn">
              Schedule a Meeting →
            </a>
            <a href="#deck" className="btn btn-outline">
              Pitch Deck ↓
            </a>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( Why Now · Key Metrics )</p>
          <h2 className="h-section">숫자로 보는 콜보드.</h2>

          <div className="data-grid">
            {[
              { n: "₩160조", l: "Korean Content Industry · 2025" },
              { n: "+9.4%", l: "YoY Industry Growth" },
              { n: "94.2%", l: "Standard Contract Adoption" },
              { n: "62.5%", l: "Firms with Hiring Difficulty" },
            ].map((s, i) => (
              <div key={i} className="data-cell">
                <span className="data-num">{s.n}</span>
                <span className="data-label">{s.l}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="metrics-grid">
            <div>
              <h3 className="h-card">3-Year Financial Projection</h3>
              <div style={{ borderTop: "2px solid var(--line-strong)", marginTop: 16 }}>
                {[
                  ["2026", "₩2억", "-₩1억", "MVP 출시 · 유료 이용자 1만"],
                  ["2027", "₩6억", "-₩0.5억", "DB·락인 · 유료 이용자 1.5만"],
                  ["2028", "₩13억", "+₩4.5억", "부가서비스 · 손익구조 안정화"],
                ].map(([y, rev, op, note]) => (
                  <div key={y} style={{ display: "grid", gridTemplateColumns: "60px 80px 80px 1fr", padding: "16px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline", gap: 12, fontSize: "0.92rem" }}>
                    <span className="mono" style={{ color: "var(--red-live)", fontWeight: 700 }}>{y}</span>
                    <span className="mono" style={{ fontWeight: 600 }}>{rev}</span>
                    <span className="mono" style={{ color: op.startsWith("+") ? "var(--green-up)" : "var(--ink-dim)" }}>{op}</span>
                    <span style={{ color: "var(--ink-dim)", fontSize: "0.84rem" }}>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="h-card">Market Entry Roadmap</h3>
              <div style={{ borderTop: "2px solid var(--line-strong)", marginTop: 16 }}>
                {[
                  ["Q1 ~ 2026.3", "Pilot 검증", "MVP 개발 · 공연예술 파일럿"],
                  ["Q2 2026.5—7", "유료 전환", "구독 모델 · 뉴미디어 레퍼런스"],
                  ["Q3 2026.7—9", "시장 확대", "해외진출 · 고객군 다각화"],
                  ["Q4 2026.10—", "DB 고도화", "축적 DB 기반 · 부가 모델"],
                ].map(([q, t, d]) => (
                  <div key={q} style={{ padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                    <div className="mono" style={{ fontSize: "0.74rem", color: "var(--red-live)", marginBottom: 4 }}>{q}</div>
                    <div style={{ fontWeight: 600, fontSize: "0.96rem" }}>{t}</div>
                    <div style={{ fontSize: "0.86rem", color: "var(--ink-dim)" }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deck */}
      <section id="deck" className="section">
        <div className="container">
          <p className="eyebrow">( Pitch Deck · 2026 Edition )</p>
          <h2 className="h-section">투자 자료.</h2>
          <p style={{ fontSize: "1rem", maxWidth: 640, color: "var(--ink-dim)" }}>
            본격 미팅 전 살펴보실 수 있는 21페이지 분량의 회사 소개 및 투자 개요.
          </p>

          <div style={{ background: "var(--ink)", color: "var(--ink-on-dark)", padding: 48, marginTop: 32, display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 32 }} className="deck-card">
            <div>
              <p className="eyebrow" style={{ color: "var(--red-live)" }}>( Confidential )</p>
              <div className="h-card" style={{ color: "var(--ink-on-dark)", fontSize: "1.6rem" }}>Callboard — 2026 회사 소개 및 투자 개요</div>
              <div className="mono" style={{ fontSize: "0.84rem", color: "var(--ink-on-dark-dim)", marginTop: 8 }}>21 pages · PDF · 8 MB</div>
            </div>
            <a
              href="mailto:ceo@callboard.kr?subject=Pitch%20Deck%20Request%20-%20Callboard"
              className="btn"
              style={{ background: "var(--red-live)", borderColor: "var(--red-live)" }}
            >
              Request Deck →
            </a>
          </div>
          <p className="mono ink-dim" style={{ fontSize: "0.74rem", marginTop: 16 }}>
            * 펀드/엔젤 투자자 검증 후 메일로 전달드립니다. 일반 공개는 진행하지 않습니다.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">( Direct Contact )</p>
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>
            대표이사 직접 문의.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 40 }} className="contact-grid-3">
            {[
              { l: "Email", v: "ceo@callboard.kr", href: "mailto:ceo@callboard.kr" },
              { l: "Address", v: "서울시 중구 필동2가 82-1\n동국대 캠퍼스타운 START UP TOWN 1 B111", href: "" },
              { l: "Founder", v: "김규린 · Madison Gyurin Kim\nCEO & Founder", href: "/about" },
            ].map((c, i) => (
              <div key={i} style={{ border: "1px solid var(--ink-on-dark-dim)", padding: 24 }}>
                <p className="eyebrow" style={{ color: "var(--ink-on-dark-dim)", marginBottom: 8 }}>( {c.l} )</p>
                {c.href ? (
                  c.href.startsWith("mailto") ? (
                    <a href={c.href} className="mono" style={{ color: "var(--ink-on-dark)", fontSize: "0.96rem", whiteSpace: "pre-line" }}>{c.v}</a>
                  ) : (
                    <Link href={c.href} className="mono" style={{ color: "var(--ink-on-dark)", fontSize: "0.96rem", whiteSpace: "pre-line" }}>{c.v}</Link>
                  )
                ) : (
                  <span className="mono" style={{ color: "var(--ink-on-dark)", fontSize: "0.92rem", whiteSpace: "pre-line" }}>{c.v}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.metrics-grid),
          :global(.contact-grid-3),
          :global(.deck-card) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}
