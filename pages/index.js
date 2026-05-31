import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home" description="모든 예술의 시작은 콜에서. 콜보드는 한국 공연예술의 데이터 인텔리전스 허브입니다.">
      {/* ────────────── HERO ────────────── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Callboard · Data Intelligence Hub · 2026 Edition )</p>
          <h1 className="h-hero">
            모든 예술의 시작은<br />
            콜(Call)에서.
          </h1>
          <p style={{ fontSize: "1.15rem", maxWidth: 720, lineHeight: 1.6 }}>
            흩어져 있던 공연예술 데이터를 하나의 인덱스로 잇습니다.
            <br />
            <strong>Candid의 투명성, Backstage의 매칭, Playbill의 아카이브</strong> —
            세 가지 표준이 한 자리에서 작동합니다.
          </p>
          <div className="btn-group">
            <Link href="/investors" className="btn">
              Investor Deck →
            </Link>
            <Link href="/index-page" className="btn btn-outline">
              Live Index →
            </Link>
            <Link href="/product" className="btn btn-outline">
              See Product →
            </Link>
          </div>

          {/* 4 Key Metrics */}
          <div className="data-grid">
            <div className="data-cell">
              <span className="data-num">
                1,284<sup>+12</sup>
              </span>
              <span className="data-label">Certified Producers</span>
              <span className="data-delta">+12 this week</span>
            </div>
            <div className="data-cell">
              <span className="data-num">
                3,612<sup>+186</sup>
              </span>
              <span className="data-label">Open Calls · Active</span>
              <span className="data-delta">+186 MTD</span>
            </div>
            <div className="data-cell">
              <span className="data-num">
                47,219<sup>+1.4K</sup>
              </span>
              <span className="data-label">Verified Artists</span>
              <span className="data-delta">+1,402 MTD</span>
            </div>
            <div className="data-cell">
              <span className="data-num">
                892<sup>+9.4%</sup>
              </span>
              <span className="data-label">Matches · This Month</span>
              <span className="data-delta">+9.4% MoM</span>
            </div>
          </div>
          <p className="mono ink-dim" style={{ fontSize: "0.74rem", marginTop: 16 }}>
            * Mock data for demonstration. MVP launching Q3 2026.
          </p>
        </div>
      </section>

      {/* ────────────── PROBLEM ────────────── */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( The Problem · 2026 )</p>
          <h2 className="h-section">
            세계적인 K-컬처 콘텐츠의 위상,<br />
            여전히 아날로그인 제작 DB.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 48 }} className="problem-grid">
            <div>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                글로벌 시장으로 확장된 우리의 콘텐츠 산업과 달리,
                제작 현장은 분산된 정보 관리와 경험 의존적 운영 방식이 지속되며
                산업 규모에 부합하는 체계적 인프라가 충분히 구축되지 않고 있습니다.
              </p>
              <ul style={{ paddingLeft: 20, fontSize: "0.98rem", lineHeight: 1.9, marginTop: 24 }}>
                <li>프로젝트형 운영 구조</li>
                <li>정보 분산 및 운영 비효율</li>
                <li>인맥 중심 구조 고착</li>
                <li>디지털 전환 공백</li>
              </ul>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "var(--bg-card)", padding: 24, border: "1px solid var(--line)" }}>
                <div className="data-num" style={{ fontSize: "2.2rem" }}>₩160조</div>
                <div className="data-label">한국 콘텐츠 산업 규모 · 2025</div>
              </div>
              <div style={{ background: "var(--bg-card)", padding: 24, border: "1px solid var(--line)" }}>
                <div className="data-num" style={{ fontSize: "2.2rem" }}>$104억</div>
                <div className="data-label">연간 콘텐츠 수출 규모</div>
              </div>
              <div style={{ background: "var(--bg-card)", padding: 24, border: "1px solid var(--line)" }}>
                <div className="data-num" style={{ fontSize: "2.2rem" }}>80만+</div>
                <div className="data-label">예술산업 종사자 수</div>
              </div>
              <div style={{ background: "var(--bg-card)", padding: 24, border: "1px solid var(--line)" }}>
                <div className="data-num" style={{ fontSize: "2.2rem" }}>62.5%</div>
                <div className="data-label">사업체 인력수급 어려움 경험</div>
              </div>
            </div>
          </div>
          <p className="mono ink-dim" style={{ fontSize: "0.74rem", marginTop: 24 }}>
            출처 · 한국콘텐츠진흥원 노동환경 조사 (2025) · 예술경영지원센터 (2024)
          </p>
        </div>
      </section>

      {/* ────────────── SOLUTION ────────────── */}
      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">( Our Solution )</p>
          <h2 className="h-section">
            제작·운영의 비공식 구조를<br />
            데이터 기반 시스템으로.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }} className="solution-grid">
            {[
              { n: "01", t: "정보의 일원화", d: "프로젝트별로 흩어져 있던 제작 인력·커뮤니케이션 정보를 하나의 구조 안에서 통합 관리.", r: "운영 DB 축적, 명확성 확보" },
              { n: "02", t: "운영 흐름의 표준화", d: "프로젝트 단위로 반복되는 제작과정을 일정한 관리 구조로 설계.", r: "리스크 감소 및 관리 비용 절감" },
              { n: "03", t: "인력 네트워크의 구조화", d: "경험과 인맥에 의존하던 인력 관리 방식을 데이터 기반 관리 체계로 전환, 접근성 확대.", r: "검증된 산업 인력 DB 자산화" },
            ].map((s) => (
              <div key={s.n} style={{ border: "1px solid var(--ink-on-dark-dim)", padding: 32 }}>
                <div className="mono" style={{ color: "var(--ink-on-dark)", fontSize: "0.82rem", marginBottom: 24 }}>
                  [{s.n}]
                </div>
                <h3 className="h-card">{s.t}</h3>
                <p style={{ color: "var(--ink-on-dark-dim)", fontSize: "0.94rem", lineHeight: 1.65 }}>
                  {s.d}
                </p>
                <hr style={{ border: "none", height: 1, background: "var(--ink-on-dark-dim)", margin: "20px 0" }} />
                <div className="mono" style={{ fontSize: "0.78rem", color: "var(--ink-on-dark)" }}>
                  → {s.r}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── PRODUCT MODULES ────────────── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Product Modules · 5 )</p>
          <h2 className="h-section">한 자리에서 작동하는 모듈.</h2>

          <div style={{ marginTop: 48, borderTop: "2px solid var(--line-strong)" }}>
            {[
              { code: "DB", t: "Producer Index", d: "Candid 스타일 투명성 데이터. 검증된 제작사의 재무·계약·안전 데이터.", href: "/product#database" },
              { code: "JOB", t: "Casting Board", d: "Backstage 모델 정밀 필터링. 인증 제작사만 공고 게시.", href: "/product#jobs" },
              { code: "ARCH", t: "Works Archive", d: "Playbill 1990s—Now. 작품 메타데이터 14,892건 검색·추적.", href: "/product#archive" },
              { code: "CLS", t: "Masterclass", d: "캐스팅 디렉터·연출가가 직접 가르치는 데이터 기반 커리큘럼.", href: "/product#class" },
              { code: "RPT", t: "Industry Report", d: "매월 발행. 캐스팅·계약·정산 데이터셋과 함께.", href: "/reports" },
            ].map((m) => (
              <Link
                key={m.code}
                href={m.href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 240px 1fr auto",
                  alignItems: "center",
                  gap: 32,
                  padding: "24px 0",
                  borderBottom: "1px solid var(--line)",
                  transition: "background 0.15s ease, padding 0.15s ease",
                }}
                className="module-row"
              >
                <span className="mono" style={{ color: "var(--red-live)", fontSize: "0.82rem", fontWeight: 600 }}>
                  [{m.code}]
                </span>
                <span className="h-card" style={{ margin: 0 }}>{m.t}</span>
                <span style={{ color: "var(--ink-dim)", fontSize: "0.94rem" }}>{m.d}</span>
                <span className="mono" style={{ fontSize: "0.78rem" }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── ROADMAP ────────────── */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( Market Entry Roadmap )</p>
          <h2 className="h-section">단계적 시장 진입.<br />리스크 최소화.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 48, borderTop: "2px solid var(--line-strong)" }} className="roadmap-grid">
            {[
              { q: "Q1 · ~2026.3", t: "Pilot 검증", d: "MVP 개발 / 공연예술 산업 파일럿 운영" },
              { q: "Q2 · 2026.5—7", t: "유료 전환", d: "구독 모델 도입 / 뉴미디어 레퍼런스 확보" },
              { q: "Q3 · 2026.7—9", t: "시장 확대", d: "해외진출 프로덕션 확장 / 고객군 다각화" },
              { q: "Q4 · 2026.10—", t: "DB 고도화", d: "축적 DB 기반 서비스 / 부가 모델 도입" },
            ].map((r, i) => (
              <div key={i} style={{ padding: 32, borderRight: i < 3 ? "1px solid var(--line)" : "none", borderBottom: "2px solid var(--line-strong)" }}>
                <div className="mono" style={{ color: "var(--red-live)", fontSize: "0.78rem", marginBottom: 16 }}>
                  {r.q}
                </div>
                <h3 className="h-card">{r.t}</h3>
                <p style={{ color: "var(--ink-dim)", fontSize: "0.92rem" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── DIFFERENTIATION ────────────── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Why Callboard )</p>
          <h2 className="h-section">우리는 0부터 시작하지 않습니다.</h2>
          <p style={{ fontSize: "1.05rem", maxWidth: 760, lineHeight: 1.7 }}>
            창업자 김규린은 럭키참스를 통해 <strong>12년간 30+ 프로젝트, 20,000+ 관객</strong>의
            운영 데이터를 축적해왔습니다. Project DOSAN, K-Musical on Broadway, Focus Art Fair NYC —
            <br />
            이 운영 경험이 콜보드 MVP의 첫 번째 검증 자산입니다.
          </p>
          <div className="btn-group">
            <Link href="/case-study" className="btn">
              Read the Case Study →
            </Link>
            <Link href="/vs" className="btn btn-outline">
              vs. Backstage, Candid, Playbill →
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section className="section section-dark">
        <div className="container text-center">
          <p className="eyebrow">( Next Steps )</p>
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>
            One platform.<br />
            One pipeline.<br />
            One callboard.
          </h2>
          <p style={{ fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 32px", color: "var(--ink-on-dark-dim)" }}>
            지금 콜보드는 Series 펀딩 라운드를 진행 중입니다.
          </p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link href="/investors" className="btn" style={{ background: "var(--red-live)", borderColor: "var(--red-live)", color: "#fff" }}>
              Schedule Investor Meeting →
            </Link>
            <a
              href="mailto:ceo@callboard.kr"
              className="btn btn-outline"
              style={{ borderColor: "var(--ink-on-dark)", color: "var(--ink-on-dark)" }}
            >
              ceo@callboard.kr
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.problem-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.solution-grid),
          :global(.roadmap-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.module-row) {
            grid-template-columns: 50px 1fr !important;
          }
          :global(.module-row > span:nth-child(3)),
          :global(.module-row > span:nth-child(4)) {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
}
