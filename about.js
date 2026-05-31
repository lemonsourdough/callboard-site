import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About" description="콜보드는 뉴미디어 예술의 데이터 인텔리전스 허브입니다. 김규린 대표가 이끄는 동국대 캠퍼스타운 스타트업.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( About · 2026 )</p>
          <h1 className="h-hero">Connecting<br />the Dots.</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.65 }}>
            전통적인 공연 예술과 급변하는 뉴미디어 환경 사이의 간극을 메우는 스타트업.
            <br />콜보드는 단순한 관리 툴이 아니라, 아티스트와 제작자, 기술이 만나
            새로운 형태의 콘텐츠가 탄생하는 뉴미디어 시대의 핵심 인프라가 될 것입니다.
          </p>
        </div>
      </section>

      {/* Mission · 3 pillars */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( Mission )</p>
          <h2 className="h-section">제작·운영의 비공식 구조를<br />데이터 기반 시스템으로.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }} className="pillar-grid">
            {[
              { t: "Connecting the Dots", k: "경험과 데이터의 연결", d: "공연예술 현장에서 발생하는 수많은 데이터와 의사결정 과정을 유기적으로 연결합니다." },
              { t: "AI & Digital Transformation", k: "기술을 통한 혁신", d: "AI 기술로 반복 운영 업무를 자동화하고, 창작자가 콘텐츠 질에만 집중할 수 있는 워크플로우를 구축합니다." },
              { t: "Startup for New Media", k: "뉴미디어 생태계 구축", d: "전통 공연예술과 뉴미디어 환경 사이의 간극을 메우는 핵심 인프라가 됩니다." },
            ].map((p, i) => (
              <div key={i} style={{ background: "var(--bg-card)", padding: 32, border: "1px solid var(--line)" }}>
                <p className="eyebrow" style={{ marginBottom: 12, fontSize: "0.7rem" }}>0{i + 1}</p>
                <h3 className="h-card">{p.t}</h3>
                <p className="mono" style={{ fontSize: "0.86rem", color: "var(--red-live)", marginBottom: 16 }}>{p.k}</p>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-dim)", lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Service Areas )</p>
          <h2 className="h-section">우리가 만드는 것.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 32 }} className="service-grid">
            {[
              "AI 기반 스마트 프로듀싱 플랫폼 (SaaS)",
              "뉴미디어 콘텐츠 큐레이션 및 유통",
              "공연 예술 전문 채널 운영",
              "디지털 콜보드",
              "제작 데이터 아카이빙",
              "IP 비즈니스 확장",
              "글로벌 네트워킹",
              "창작자 기술 매칭 서비스",
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--ink)", color: "var(--ink-on-dark)", padding: "20px 24px", fontFamily: "var(--font-mono)", fontSize: "0.86rem", letterSpacing: "0.02em" }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">( CEO & Founder )</p>
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>김규린<br /><span style={{ fontSize: "0.4em", color: "var(--ink-on-dark-dim)", fontWeight: 400 }}>Madison Gyurin Kim</span></h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 48 }} className="ceo-grid">
            <div>
              <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "var(--ink-on-dark)" }}>
                서울과 뉴욕을 기반으로 활동하는 글로벌 프로듀서. 공연·영화·전시 등 다양한 국제 프로젝트를 기획하고 제작해왔습니다.
              </p>
              <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "var(--ink-on-dark-dim)", marginTop: 16 }}>
                기획 철학은 <em style={{ color: "var(--red-live)", fontStyle: "italic" }}>"예술과 대중을 연결하고, 한국의 창작 콘텐츠를 세계로 확장하는 것."</em>
                <br />럭키참스 운영을 통해 12년간 축적해온 데이터가 콜보드의 첫 번째 시드 자산입니다.
              </p>
              <div className="btn-group">
                <Link href="/case-study" className="btn" style={{ background: "var(--red-live)", borderColor: "var(--red-live)" }}>
                  Lucky Charms Case Study →
                </Link>
              </div>
            </div>

            <div style={{ borderLeft: "1px solid var(--ink-on-dark-dim)", paddingLeft: 32 }}>
              <p className="eyebrow" style={{ color: "var(--ink-on-dark-dim)" }}>( Education )</p>
              <div className="mono" style={{ fontSize: "0.86rem", lineHeight: 1.8, color: "var(--ink-on-dark)" }}>
                동국대학교 영상대학원 예술경영학과 출강 · 2026<br />
                동국대학교 문화예술대학원 예술경영학과<br />
                CUNY Brooklyn College — MFA in Theatre &amp; Technical (2019—2024)<br />
                상명대학교 연극과 학사 (2013—2017)
              </div>

              <p className="eyebrow" style={{ color: "var(--ink-on-dark-dim)", marginTop: 32 }}>( Selected Works · 2024—2026 )</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["2026—27", "국립무용단 〈미인〉 해외 진출 협력 프로듀서"],
                  ["2025.08", "Walt Disney Concert Hall — Musical DOSAN Gala (8,000명)"],
                  ["2025.07", "오페라 〈도산〉 — 예술의전당 (전석 매진)"],
                  ["2025.05", "HBO Series 〈Seven〉 기획"],
                  ["2024.11", "Musical 〈BLUEBLIND〉 — Broadway AEA Showcase, NYC"],
                  ["2024.05", "Focus Art Fair — Chelsea Pier, NYC (12,000명)"],
                ].map(([d, t], i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16, fontSize: "0.88rem", color: "var(--ink-on-dark)" }}>
                    <span className="mono" style={{ color: "var(--red-live)", fontWeight: 600 }}>{d}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Team )</p>
          <h2 className="h-section">경력 15년 내외 전문가와<br />함께합니다.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 48 }} className="team-grid">
            {[
              { role: "CEO / Founder", name: "김규린", details: ["동국대학교 출강", "동국대 예술경영대학원 졸업", "CUNY MFA 졸업"] },
              { role: "CTO / AI Engineer", name: "배상훈", details: ["JINX PICK SOMEONE 개발", "BONDIT · IGOTIN 개발", "마켓컬리 클론"] },
              { role: "CMO / Marketing", name: "박신영", details: ["서울대 경영학 석사", "SMITH COLLEGE 학사", "전 크래프톤 글로벌 PM"] },
              { role: "Product / UX Designer", name: "김정현", details: ["NEWYORK UNIVERSITY 졸업", "MICROSOFT 6년차"] },
            ].map((m, i) => (
              <div key={i} style={{ background: "var(--bg-card)", padding: 28, border: "1px solid var(--line)" }}>
                <p className="eyebrow" style={{ fontSize: "0.68rem", marginBottom: 8 }}>{m.role}</p>
                <h3 className="h-card" style={{ fontSize: "1.4rem" }}>{m.name}</h3>
                <div style={{ fontSize: "0.84rem", color: "var(--ink-dim)", lineHeight: 1.6 }}>
                  {m.details.map((d, j) => <div key={j}>{d}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( Recognition )</p>
          <h2 className="h-section">2026, 검증된 시작.</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0", borderTop: "2px solid var(--line-strong)" }}>
            {[
              "2026 HAI START-UP 입주경진대회 선정 · 동국대학교 캠퍼스타운센터 입주기업",
              "2026 스타트업 플러스 기업",
              "2026 SBA 서울경제진흥원 선정기업",
              "2026 동국패밀리 기업",
              "2026 예술경영지원센터 초기창업지원 선정 · 김규린 / 럭키참스",
              "2025 국가보훈부 / 대전산업문화진흥원 제작지원작 — 〈청춘, 도산에게 말을 걸다〉",
            ].map((a, i) => (
              <li key={i} style={{ padding: "20px 0", borderBottom: "1px solid var(--line)", fontSize: "0.96rem" }}>
                <span className="mono" style={{ color: "var(--red-live)", marginRight: 16, fontWeight: 600 }}>0{i + 1}</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.pillar-grid),
          :global(.service-grid),
          :global(.ceo-grid),
          :global(.team-grid) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) {
          :global(.service-grid),
          :global(.team-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </Layout>
  );
}
