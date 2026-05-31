import Link from "next/link";
import Layout from "../components/Layout";

const modules = [
  {
    id: "database",
    code: "DB",
    name: "Producer Index",
    benchmark: "Inspired by Candid",
    desc: "검증된 제작사의 재무·계약·안전 데이터를 한눈에. Trust Score 기반 정렬과 비교.",
    features: [
      "Trust Score (정시 정산률 · 표준계약서 · 안전관리 · 평균 지급)",
      "FY 재무 그레이드 · YoY 성장률 · 12M 매출 추이",
      "사업자 등록 · 4대보험 · 산업안전 인증 자동 검증",
      "프로젝트 히스토리 41+편 추적",
    ],
  },
  {
    id: "jobs",
    code: "JOB",
    name: "Casting Board",
    benchmark: "Inspired by Backstage",
    desc: "Backstage 모델 기반 정밀 필터링. 인증 제작사만 공고 게시 가능.",
    features: [
      "장르·역할·연령·신장·경력·특기 멀티 필터",
      "인증 제작사 · 표준계약서 · 마감임박 우선 정렬",
      "AI Match — 프로필 적합도 자동 매칭",
      "지원 → 1차 통과 → 인터뷰 → 계약까지 파이프라인 추적",
    ],
  },
  {
    id: "archive",
    code: "ARCH",
    name: "Works Archive",
    benchmark: "Inspired by Playbill",
    desc: "1990년대부터 현재까지, 검증된 제작사의 모든 작품을 한 자리에서.",
    features: [
      "14,892건 작품 메타데이터 · 검색 가능",
      "Decade 필터 (1990s · 2000s · 2010s · 2020s)",
      "제작사 × 작품 × 예술인 크로스 레퍼런스",
      "Living Chronicle — 예술인 개인 연대기",
    ],
  },
  {
    id: "class",
    code: "CLS",
    name: "Callboard Class",
    benchmark: "Masterclass / 1:1 멘토링",
    desc: "업계 전문가가 직접 가르치는 데이터 기반 커리큘럼.",
    features: [
      "Masterclass · Group · Workshop · 1:1 Mentoring",
      "캐스팅 디렉터, 음악감독, 연출가 직강",
      "프리미엄 멤버 30% 할인",
      "수료 인증 → 프로필 자동 반영",
    ],
  },
  {
    id: "report",
    code: "RPT",
    name: "Industry Report",
    benchmark: "Monthly + Dataset",
    desc: "매월 둘째 주 화요일 발행. 캐스팅·계약·정산·매칭 데이터셋 포함.",
    features: [
      "월간 PDF 리포트 (64—96p)",
      "원시 데이터셋 (CSV · API)",
      "정책·법규 트래커 (문체부 · 예술경영지원센터 · 지자체)",
      "비공개 라운드테이블 (PD · 캐스팅 디렉터 50인)",
    ],
  },
];

export default function Product() {
  return (
    <Layout title="Product" description="콜보드의 5개 핵심 모듈. Producer Index, Casting Board, Works Archive, Class, Industry Report.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Platform · 5 Modules )</p>
          <h1 className="h-hero">한 자리에서<br />작동하는 모듈.</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 680, lineHeight: 1.65 }}>
            Candid의 투명성, Backstage의 매칭, Playbill의 아카이브 —
            세 가지 글로벌 표준을 한국 공연예술 산업에 맞게 통합했습니다.
          </p>
        </div>
      </section>

      {modules.map((m, i) => (
        <section
          key={m.id}
          id={m.id}
          className={`section ${i % 2 === 1 ? "section-alt" : ""}`}
          style={{ paddingTop: 64, paddingBottom: 64 }}
        >
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 1fr", gap: 48, alignItems: "start" }} className="module-detail">
              <div className="mono" style={{ color: "var(--red-live)", fontSize: "0.86rem", fontWeight: 700 }}>
                [{m.code}]
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>{m.benchmark}</p>
                <h2 className="h-section" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>{m.name}</h2>
                <p style={{ fontSize: "1.02rem", lineHeight: 1.65, color: "var(--ink-dim)" }}>{m.desc}</p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {m.features.map((f, j) => (
                  <li key={j} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, fontSize: "0.94rem", lineHeight: 1.5 }}>
                    <span className="mono" style={{ color: "var(--red-live)", fontWeight: 600 }}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section section-dark text-center">
        <div className="container">
          <p className="eyebrow">( Get Started )</p>
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>
            Beta access opens<br />Q3 2026.
          </h2>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link href="/pricing" className="btn" style={{ background: "var(--red-live)", borderColor: "var(--red-live)" }}>
              See Pricing →
            </Link>
            <Link href="/investors" className="btn btn-outline" style={{ borderColor: "var(--ink-on-dark)", color: "var(--ink-on-dark)" }}>
              For Investors →
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.module-detail) {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </Layout>
  );
}
