import Link from "next/link";
import Layout from "../components/Layout";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    tag: "",
    desc: "공고를 무제한으로 열람하고 기본 알림을 받습니다.",
    features: [
      "공고 무제한 열람",
      "프로필 1개 생성",
      "기본 알림",
    ],
    cta: "시작하기",
    highlight: false,
  },
  {
    name: "Plus",
    price: "₩9,900",
    period: "/월",
    tag: "Recommended",
    desc: "예술인을 위한 표준 멤버십. 매칭과 데이터 인사이트.",
    features: [
      "무제한 지원",
      "프로필 2개 관리",
      "적합 공고 매칭 알림",
      "주간 인사이트 리포트",
    ],
    cta: "업그레이드",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₩29,000",
    period: "/월",
    tag: "",
    desc: "프로 예술인·매니저를 위한 데이터·노출 강화.",
    features: [
      "프로필 3개 관리",
      "프로필 통계 (조회수·찜)",
      "제작사 추천 리스트 노출",
      "Class 30% 할인",
    ],
    cta: "업그레이드",
    highlight: false,
  },
];

const producerTier = {
  name: "Producer Tier",
  price: "Custom",
  desc: "인증 제작사를 위한 전용 어드민과 데이터 도구.",
  features: [
    "공고 무제한 등록 (인증 제작사만)",
    "AI 추천 인재 풀 (적합도 80%+)",
    "Producer Index 등록 + Trust Score",
    "팀 시트 · 협업 협업예술인 관리",
    "비공개 라운드테이블 초대",
  ],
};

export default function Pricing() {
  return (
    <Layout title="Pricing" description="콜보드 멤버십. Basic · Plus · Premium · Producer Tier.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Membership )</p>
          <h1 className="h-hero">데이터를 어떻게<br />운영할지 선택하세요.</h1>
          <p style={{ fontSize: "1.02rem", maxWidth: 640, lineHeight: 1.6 }}>
            예술인 · 매니저 · 제작사. 모두를 위한 4가지 멤버십.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="pricing-grid">
            {plans.map((p) => (
              <div
                key={p.name}
                style={{
                  background: p.highlight ? "var(--ink)" : "var(--bg-card)",
                  color: p.highlight ? "var(--ink-on-dark)" : "var(--ink)",
                  padding: 32,
                  border: p.highlight ? "2px solid var(--red-live)" : "1px solid var(--line)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.tag && (
                  <span
                    className="badge badge-live"
                    style={{ position: "absolute", top: -10, right: 24 }}
                  >
                    {p.tag}
                  </span>
                )}
                <p className="eyebrow" style={{ color: p.highlight ? "var(--ink-on-dark-dim)" : "var(--ink-dim)", margin: 0 }}>
                  ({ p.name })
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "16px 0 8px" }}>
                  <span className="data-num" style={{ fontSize: "2.4rem", color: p.highlight ? "var(--ink-on-dark)" : "var(--ink)" }}>
                    {p.price}
                  </span>
                  <span className="mono ink-dim" style={{ color: p.highlight ? "var(--ink-on-dark-dim)" : "var(--ink-dim)", fontSize: "0.86rem" }}>{p.period}</span>
                </div>
                <p style={{ fontSize: "0.92rem", color: p.highlight ? "var(--ink-on-dark-dim)" : "var(--ink-dim)", marginBottom: 24 }}>
                  {p.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.features.map((f, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 10, fontSize: "0.92rem" }}>
                      <span style={{ color: "var(--red-live)" }}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    background: p.highlight ? "var(--red-live)" : "var(--ink)",
                    borderColor: p.highlight ? "var(--red-live)" : "var(--ink)",
                    color: "#fff",
                  }}
                >
                  {p.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Producer Tier */}
      <section className="section">
        <div className="container">
          <div style={{ background: "var(--bg-card)", padding: 48, border: "1px solid var(--line)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="producer-tier">
            <div>
              <p className="eyebrow">( For Producers )</p>
              <h2 className="h-section" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>{producerTier.name}</h2>
              <p style={{ fontSize: "1rem", color: "var(--ink-dim)", lineHeight: 1.6 }}>{producerTier.desc}</p>
              <div className="data-num" style={{ fontSize: "2rem", marginTop: 24 }}>{producerTier.price}</div>
              <p className="mono ink-dim" style={{ fontSize: "0.78rem" }}>인증 제작사 전용. 1:1 협의.</p>
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {producerTier.features.map((f, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, fontSize: "0.95rem", lineHeight: 1.5 }}>
                    <span className="mono" style={{ color: "var(--red-live)", fontWeight: 600 }}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:ceo@callboard.kr" className="btn" style={{ marginTop: 32 }}>
                Contact Sales →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.pricing-grid),
          :global(.producer-tier) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}
